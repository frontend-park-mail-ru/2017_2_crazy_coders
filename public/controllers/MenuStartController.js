'use strict';

import Controller from "./Controller";

class MenuStartController extends Controller {

    constructor(opt = {}) {
        if(MenuStartController.__instance) {
            return MenuStartController.__instance;
        }

        super(opt);
        MenuStartController.__instance = this;
        this.addListener();
    }

    addListener() {

        document.getElementById('menu-button-signIn').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/signin');
        });

        document.getElementById('menu-button-signUp').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/signup');
        });

        document.getElementById('menu-button-playGame').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/play');
        });

        document.getElementById('menu-button-logout').addEventListener('click', event => {
            event.preventDefault();
            this.userService.logout()
                .then(() => {
                    this.router.go('/');
                })
                .catch(e => {
                    alert(e);
                });
        });

        document.getElementById('menu-button-music').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/');
        });

        document.getElementById('menu-button-score').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/score');
        });

        document.getElementById('menu-button-about').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/about');
        });
    }


    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        debugger;

        if (!this.userService.isAuthorized()) {
            console.log("username: " + this.userService.username);
            this.page_parts.get("UnRegMenu").show();
        }
        else {
            this.page_parts.get("RegMenu").show();

            document.getElementById('userheader_login').innerHTML = this.userService.user.username;
            document.getElementById('userheader_score').innerHTML = this.userService.user.score;
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
