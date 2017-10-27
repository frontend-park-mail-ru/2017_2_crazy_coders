'use strict';

import Controller from "./Controller";
import Theme from '../static/css/style';

class ScoreListController extends Controller {

    constructor(opt = {}) {
        if(ScoreListController.__instance) {
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
        this.page_parts.get("Scoreboard").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("Scoreboard").hide();
    }
}

export default ScoreListController;
