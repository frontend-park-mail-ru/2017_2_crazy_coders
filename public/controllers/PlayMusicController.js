'use strict';

import Controller from "./Controller";

class PlayMusicController extends Controller {

    constructor(opt = {}) {
        if(PlayMusicController.__instance) {
            return PlayMusicController.__instance;
        }

        super(opt);
        PlayMusicController.__instance = this;
        this.addListener();
    }

    addListener() {

        document.getElementById('menu-button-music').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/');
        });


    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
    }
}

export default PlayMusicController;