'use strict';

import Controller from "./Controller";

class AboutUsController extends Controller {

    constructor(opt = {}) {
        if(AboutUsController.__instance) {
            return AboutUsController.__instance;
        }

        super(opt);
        AboutUsController.__instance = this;
        this.addListener();
    }

    addListener() {

        document.getElementById('aboutUs-button-back').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/');
        });


    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        this.page_parts.get("AboutUs").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("AboutUs").hide();
    }
}

export default AboutUsController;
