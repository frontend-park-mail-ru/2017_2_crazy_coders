'use strict';

import Controller from "./Controller";

class ScoreListController extends Controller {

    constructor(opt = {}) {
        if(ScoreListController.__instance) {
            return ScoreListController.__instance;
        }

        super(opt);
        ScoreListController.__instance = this;
        this.addListener();
    }

    addListener() {

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
