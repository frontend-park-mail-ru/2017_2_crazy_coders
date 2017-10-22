'use strict';

import Controller from "./Controller";
import Theme from '../static/css/style';

class MenuStartController extends Controller {

    constructor(opt = {}) {
        if(MenuStartController.__instance) {
            return MenuStartController.__instance;
        }

        super(opt);
        MenuStartController.__instance = this;
		this.theme = new Theme();
        this.addListener();
    }

    addListener() {

		document.getElementById('menu-theme-switch').addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

        document.getElementById('menu-button-signIn').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/signin');
        });

        document.getElementById('menu-button-signUp').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/signup');
        });

        document.getElementById('menu-button-playGame').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/play');
        });

        document.getElementById('menu-button-logout').addEventListener('click', event => {
            event.preventDefault();
            this.userService.logout()
                .then((response) => {
                    console.log(response);
                    this.userService.user.id = 0;
                    this.show();
                    this.page_parts.get("RegMenu").hide();
                    this._router.go('/');
                })
                .catch(e => {
                    alert(e);
                });
        });

        document.getElementById('menu-button-music').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/');
        });

        document.getElementById('menu-button-score').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/score');
        });

        document.getElementById('menu-button-about').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/about');
        });
    }


    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        console.log("[MenuStartController] in show");

        if (!this.userService.isAuthorized()) {
            console.log("username: " + this.userService.username);
            this.page_parts.get("UnRegMenu").show();
        }
        else {
            this.page_parts.get("RegMenu").show();
        }
        this.page_parts.get("Footer").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("UnRegMenu").hide();
        this.page_parts.get("RegMenu").hide();
        this.page_parts.get("Footer").hide();
    }
}

export default MenuStartController;
