'use strict';

import Controller from "./Controller";
import Theme from '../static/css/style';

class SettingsController extends Controller {

    constructor(opt = {}) {
        if(SettingsController.__instance) {
            return SettingsController.__instance;
        }

        super(opt);
        SettingsController.__instance = this;
        this.theme = new Theme();
        this.addListener();
    }

    addListener() {
        document.getElementsByClassName('theme')[0].addEventListener('click', event => {
            event.preventDefault();
            this.theme.changeTheme();
        });

        document.getElementById('settings-button-back').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/');
        });

        let slider = document.getElementsByClassName('table__checkbox')[0];
        slider.addEventListener('click', event => {
            if(slider.checked) {
                document.getElementsByClassName('table__img_keyboard')[0].style.display = "none";
                document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "initial";

            } else {
                document.getElementsByClassName('table__img_keyboard')[0].style.display = "initial";
                document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "none";
            }
            console.log(slider);
        });
    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        this.page_parts.get("Settings").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("Settings").hide();
    }
}

export default SettingsController;