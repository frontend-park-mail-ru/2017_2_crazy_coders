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
            .getScorelist(3)
            .then((resp) => {

                const topList = [];

                for (let user of resp) {
                    topList.push({
                        userId: user.userId,
                        position: user.position,
                        username: user.username,
                        kills: user.kills,
                        deaths: user.deaths,
                        maxKills: user.maxKills,
                        isOwner: false
                    })
                }

                let inTopFlag = false;

                for (let userStatistic of topList) {
                    if (userStatistic.userId === this.userService.user.id) {
                        inTopFlag = true;
                        userStatistic.isOwner = true;
                    }
                }


                if (this.userService.isAuthorized() && inTopFlag !== true) {

                    this.userService.getOwnScore()
                        .then((resp) => {

                            if (resp === null) {
                                console.log('need try one multiplayer game; statistics is null');
                                this.page_parts.get("Scoreboard").data.users = topList;
                                this.page_parts.get("Scoreboard").getClassElement().hidden = false;
                                this.addListener();
                                return;
                            }

                            console.log("arrived own statistic");

                            topList.push({
                                userId: null,
                                position: '',
                                username: '',
                                kills: '...',
                                deaths: '',
                                maxKills: '',
                                isOwner: false
                            });

                            topList.push({
                                userId: null,
                                position: resp.position,
                                username: resp.username,
                                kills: resp.kills,
                                deaths: resp.deaths,
                                maxKills: resp.maxKills,
                                isOwner: true
                            });

                            this.page_parts.get("Scoreboard").data.users = topList;
                            this.page_parts.get("Scoreboard").getClassElement().hidden = false;
                            this.addListener();

                        });

                } else {

                    this.page_parts.get("Scoreboard").data.users = topList;
                    this.page_parts.get("Scoreboard").getClassElement().hidden = false;
                    this.addListener();
                }

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
