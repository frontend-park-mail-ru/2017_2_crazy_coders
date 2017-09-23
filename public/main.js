'use strict';
import AboutUs from './js/views/parts/AboutUs/AboutUs';
import MenuGame from './js/views/parts/MenuGame/MenuGame';
import SignIn from './js/views/parts/SignIn/SignIn';
import SignUp from './js/views/parts/SignUp/SignUp';
import ScoreList from './js/views/parts/ScoreList/ScoreList';
import Block from './js/views/constructs/BlockConstruct/BlockConstruct';
import UserService from './js/services/UserService'
import ValidSigninform from './js/components/ValidSigninForm'
import ValidSignunform from './js/components/ValidSignupForm'

const userService = new UserService();

const app = new Block(document.getElementById('application'));
const title = Block.Create('a', {}, ['application-header'], 'Frontend-sample application');


const sections = {
    menu: Block.Create('div', {}, ['logo', 'logo_button']),
    signin: SignIn(),
    signup: SignUp(),
    about: (new AboutUs()).get(),
    /*score: ScoreList(),*/
    hide() {
        this.menu.hide();
        this.signin.hide();
        this.signup.hide();
        this.about.hide();
    },
};

sections.hide();

app
    .append(sections.menu)
    .append(sections.signin)
    .append(sections.signup)
    .append(sections.about);

function openSignin() {
    if (!sections.signin.ready) {
        let backClick = false;

        // const backButton  = sections.signin.getElement().getElementById("signin_back_button");
        sections.signin.on('click', function (event) {
            event.preventDefault();
            const target = event.currentTarget;
            console.log("target = " + target);
            const section = target.getAttribute('data-section');
            console.log("section = " + section);
            switch (section) {
                case 'signin':
                    backClick = false;
                    break;
                case 'back':
                    backClick = true;
                    break;
            }
        });

        sections.signin.onSubmit(function (formdata) {
            if(backClick) {
                openMenu();
            } else {
                let form = document.getElementById("signin_login").parentNode;
                if (ValidSigninform.validLoginForm(formdata.login, formdata.password, form)) {
                    userService.signin(formdata.login, formdata.password, function (err, resp) {
                        if (err) {
                            alert(`Some error ${err.status}: ${err.responseText}`);
                            return;
                        }
                        sections.signin.reset();
                        userService.getData(function (err, resp) {
                            if (err) {
                                return;
                            }
                            openMenu();
                        }, true);
                    });
                }
            }
        });

        sections.signin.ready = true;
    }

    sections.hide();
    if (userService.isLoggedIn()) {
        return openMenu();
    }
    sections.signin.show();
}

function openAbout() {
    sections.hide();

/*    if(userService.isLoggedIn()) {
        return openMenu();
    }*/

    sections.about.show();
}

function openSignup() {
    if (!sections.signup.ready) {
        sections.signup.onSubmit(function (formdata) {
            let form = document.getElementById("signup_login").parentNode;
            if(ValidSignunform.validSignupForm(formdata.login, formdata.email, formdata.password, formdata.repeatPassword, form)) {
                userService.signup(formdata.login, formdata.email, formdata.password, function (err, resp) {
                    if (err) {
                        alert(`Some error ${err.status}: ${err.responseText}`);
                        return;
                    }

                    sections.signup.reset();
                    openMenu();
                });
            }
        });

        sections.signup.ready = true;
    }
    sections.hide();

/*    if (userService.isLoggedIn()) {
        return openMenu();
    }*/

    sections.signup.show();
}

function openScore () {
/*    if (!sections.scores.ready) {
        sections.scores.scoreboard = new Scoreboard();
        sections.scores
            .append(Block.Create('h2', {}, [], 'Список лидеров'))
            .append(sections.scores.scoreboard);
        sections.scores.ready = true;
    }
    sections.hide();
    userService.loadUsersList(function (err, users) {
        if (err) {
            alert(`Some error ${err.status}: ${err.responseText}`);
            return openMenu();
        }

        sections.scores.scoreboard.update(users);
        sections.scores.show();
    }, true);*/
}

function openProfile() {
/*    if (!sections.profile.ready) {
        sections.profile.profile = new Profile();
        sections.profile
            .append(Block.Create('h2', {}, [], 'Мой профиль'))
            .append(sections.profile.profile);
        sections.profile.ready = true;
    }
    sections.hide();
    if (userService.isLoggedIn()) {
        userService.getData(function (err, user) {
            if (err) {
                alert(`Some error ${err.status}: ${err.responseText}`);
                return openMenu();
            }

            sections.profile.profile.update(user);
            sections.profile.show();
        }, true);
        return;
    }
    return openMenu();*/
}

function openExit() {
    userService.signout();
    console.log("press exit...");
    openMenu();
}

function openMenu() {

    if (!sections.menu.ready) {

        sections.menu.items = {
            signin: Block.Create('button', {'data-section': 'signin'}, ['button', 'button_login'], 'SIGN IN'),
            signup: Block.Create('button', {'data-section': 'signup'}, ['button', 'button_register'], 'SIGN UP'),
            about: Block.Create('button', {'data-section': 'about'}, ['button', 'button_start'], 'ABOUT'),
            exit: Block.Create('button', {'data-section': 'exit'}, ['button', 'button_start'], 'EXIT'),
        };

        sections.menu.on('click', function (event) {
            event.preventDefault();
            const target = event.target;
            console.log("target = " + target);
            const section = target.getAttribute('data-section');
            console.log("section = " + section);
            switch (section) {
                case 'signin':
                    openSignin();
                    break;
                case 'signup':
                    openSignup();
                    break;
                case 'exit':
                    openExit();
                    break;
                case 'about':
                    openAbout();
                    break;
            }
        });

        sections.menu
            .append(sections.menu.items.signin)
            .append(sections.menu.items.signup)
            .append(sections.menu.items.about)
            .append(sections.menu.items.exit);

        sections.menu.ready = true;
    }

    sections.hide();

    if (userService.isLoggedIn()) {

        console.log("registration ok");
        sections.menu.items.signin.show();
        sections.menu.items.signup.show();
        sections.menu.items.about.show();
        sections.menu.items.exit.show();

    } else {

        console.log("registration fail");
        sections.menu.items.signin.show();
        sections.menu.items.signup.show();
        sections.menu.items.about.hide();
        sections.menu.items.exit.hide();

    }

    sections.menu.show();
}

title.on('click', openMenu);
openMenu();

userService.getData(function (err, resp) {
    if (err) {
        return;
    }
    openMenu();
}, true);










/*
function createPage() {
    let body = document.getElementById('div');
    body.innerHTML = 'работает';
    addParts(body, "AppName", AboutUs());
}

function addParts(parent, name, elem) {
    elem.hidden = false;
    parent.appendChild(elem);
}
*/

