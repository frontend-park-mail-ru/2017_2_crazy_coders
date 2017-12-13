'use strict';

import Controller from "./Controller";
import Theme from '../static/css/style';

class ScoreListController extends Controller {

    constructor(opt = {}) {
        if (ScoreListController.__instance) {
            return ScoreListController.__instance;
        }

        super(opt);
        ScoreListController.__instance = this;
        this.theme = new Theme();
        this.addListener();
    }

    addListener() {
        document.getElementsByClassName('theme')[0].addEventListener('click', event => {
            event.preventDefault();
            this.theme.changeTheme();
        });

        document.getElementById('score-button-back').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/');
        });
    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        this.userService
            .getScorelist(5)
            .then((resp) => {

                const topList = [];

                for (let user of resp) {
                    topList.push({
                        position: user.position,
                        username: user.username,
                        kills: user.kills,
                        deaths: user.deaths,
                        maxKills: user.maxKills
                    })
                }

                debugger;

                this.page_parts.get("Scoreboard").data.users = topList;

                if (this.userService.isAuthorized()) {
                    // this.page_parts.get("Scoreboard").data.userScore = this.userService.user.getScore();
                    this.page_parts.get("Scoreboard").data.userScore = 10000;
                } else {
                    this.page_parts.get("Scoreboard").data.userScore = 0;
                }
                // this.userService.getProfile().then( (ans) => {
                // 		// this.page_parts.get("Scoreboard").data.userScore = this.userService.user.getScore();
                // 	console.log('1000');
                // 	this.page_parts.get("Scoreboard").data.userScore = 10000;
                // }).catch( (badAns) => {
                // 	console.log('err_1000');
                // 	this.page_parts.get("Scoreboard").data.userScore = 0;
                // });

                this.page_parts.get("Scoreboard").getClassElement().hidden = false;
                this.addListener();
            })
            .catch((err) => {
                console.log('bad answer');
            });

    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("Scoreboard").hide();
    }
}

export default ScoreListController;
