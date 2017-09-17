'use strict';
// require('../css/style.css');
import AboutUs from './js/views/parts/AboutUs/AboutUs';
import MenuGame from './js/views/parts/MenuGame/MenuGame';
import SignIn from './js/views/parts/SignIn/SignIn';
import SignUp from './js/views/parts/SignUp/SignUp';
import Block from './js/views/constructs/BlockConstruct/BlockConstruct';
import UserService from './js/services/UserService'

const userService = new UserService();

const app = new Block(document.getElementById('application'));
const title = Block.Create('a', {}, ['application-header'], 'Frontend-sample application');


const sections = {
    menu: MenuGame(),
    signin: SignIn(),
    signup: SignUp(),
    about: AboutUs(),
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
/*    if (!sections.login.ready) {
        sections.login.loginform = new Form(loginFields);
        sections.login.loginform.onSubmit(function (formdata) {
            userService.login(formdata.email, formdata.password, function (err, resp) {
                if (err) {
                    alert(`Some error ${err.status}: ${err.responseText}`);
                    return;
                }

                sections.login.loginform.reset();
                userService.getData(function (err, resp) {
                    if (err) {
                        return;
                    }
                    openMenu();
                }, true);
            });
        });
        sections.login
            .append(Block.Create('h2', {}, [], 'Войдите'))
            .append(sections.login.loginform);
        sections.login.ready = true;
    }
    sections.hide();
    if (userService.isLoggedIn()) {
        return openMenu();
    }
    sections.login.show();*/
}

function openSignup() {
/*    if (!sections.signup.ready) {
        sections.signup.signupform = new Form(signupFields);
        sections.signup.signupform.onSubmit(function (formdata) {
            userService.signup(formdata.email, formdata.password, +formdata.age, function (err, resp) {
                if (err) {
                    alert(`Some error ${err.status}: ${err.responseText}`);
                    return;
                }

                sections.signup.signupform.reset();
                openMenu();
            });
        });
        sections.signup
            .append(Block.Create('h2', {}, [], 'Зарегистрируйтесь'))
            .append(sections.signup.signupform);
        sections.signup.ready = true;
    }
    sections.hide();
    if (userService.isLoggedIn()) {
        return openMenu();
    }
    sections.signup.show();*/
}

function openScores() {
    if (!sections.scores.ready) {
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
    }, true);
}

function openAbout() {
    if (!sections.profile.ready) {
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
    return openMenu();
}

function openMenu() {

    if (!sections.menu.ready) {

        sections.menu.items = {
            signin: Block.Create('div', {'data-section': 'login'}, ['logo', 'input_form'], 'Открыть форму входа'),
            signup: Block.Create('div', {'data-section': 'signup'}, ['logo', 'input_form'], 'Открыть форму регистрации'),
            about: Block.Create('div', {'data-section': 'profile'}, ['logo', 'table_form'], 'Посмотреть страницу о нас'),
        };

        sections.menu.on('click', function (event) {
            event.preventDefault();
            const target = event.target;
            const section = target.getAttribute('data-section');
            switch (section) {
                case 'signin':
                    openSignin();
                    break;
                case 'signup':
                    openSignup();
                    break;
                case 'scores':
                    openScores();
                    break;
                case 'about':
                    openAbout();
                    break;
            }
        });
        sections.menu
            .append(Block.Create('h2', {}, [], 'Меню'))
            .append(sections.menu.items.signin)
            .append(sections.menu.items.signup)
            .append(sections.menu.items.about);

        sections.menu.ready = true;
    }

    sections.hide();

    if (userService.isLoggedIn()) {

        sections.menu.items.login.hide();
        sections.menu.items.signup.hide();
        sections.menu.items.scores.show();
        sections.menu.items.profile.show();

    } else {

        sections.menu.items.login.show();
        sections.menu.items.signup.show();
        sections.menu.items.scores.show();
        sections.menu.items.profile.hide();

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

