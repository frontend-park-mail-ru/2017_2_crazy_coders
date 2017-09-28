'use strict';

import Block from './components/Block/BlockComponents';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import CreateHeader from './views/Header/Header';
import CreateUnRegMenu from './views/UnRegMenu/UnRegMenu';
import UserService from './services/UserService';
import CreateRegMenu from './views/RegMenu/RegMenu';
import CreateAboutUs from './views/AboutUs/AboutUs';
import Scoreboard from './views/Scoreboard/Scoreboard';
import CreateFooter from './views/Footer/Footer';
import Form from './components/Form/Form/Form'


let body = document.getElementsByTagName('body')[0];
const app = new Block('div', {id: 'application'});
body.appendChild(app.getElement());

let footerDiv = new Block('div', {id: 'multimedia-buttons-panel'});

const userService = new UserService();
const headerView = CreateHeader();
const inputMenuView = CreateUnRegMenu();
const signInView = SignIn();
const signUpView = SignUp();
const aboutUsView = CreateAboutUs();
const scoreView = Scoreboard();
const footerImgView = CreateFooter();
const mainPageView = CreateRegMenu();

footerDiv.append(scoreView.getTable())
    .append(aboutUsView.getTable());

app.append(headerView.getHeader())
    .append(inputMenuView.getMenu())
    .append(mainPageView.getMenu())
    .append(signInView.getForm())
    .append(signUpView.getForm())
    .append(footerImgView.getFooter())
    .append(footerDiv.getElement());


inputMenuView.hide();
signInView.hide();
signUpView.hide();
mainPageView.hide();
scoreView.hide();
aboutUsView.hide();

let inputMenuEventDelete = function () {
};
let footerImgEventDelete = function () {
};
let footerDivEventDelete = function () {
};
let mainPageEventDelete = function () {
};

function isUnregisteredUser() {

    inputMenuEventDelete();
    footerImgEventDelete();
    footerDivEventDelete();
    mainPageEventDelete();

    inputMenuView.show();

    inputMenuEventDelete = inputMenuView.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'button-log':
                footerImgView.hide();
                inputMenuView.hide();
                signInView.show();
                break;

            case 'button-register':
                footerImgView.hide();
                inputMenuView.hide();
                signUpView.show();
                break;
        }
    });

    let backButtonCollection = Form.getBackButton();
    const backButtonArray = Array.from(backButtonCollection);

    backButtonArray.forEach(button => {
        button.addEventListener('click', (event) => {
            const elemId = event.target.getAttribute('id');
            switch (elemId) {
                case 'back-sign-in':
                    signInView.hide();
                    inputMenuView.show();
                    footerImgView.show();
                    break;

                case 'back-sign-up':
                    signUpView.hide();
                    inputMenuView.show();
                    footerImgView.show();
                    break;
            }
        });
    });


    footerImgEventDelete = footerImgView.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'sound-logo':
                console.log('music');
                break;

            case 'score-logo':
                footerImgView.hide();
                inputMenuView.hide();
                mainPageView.hide();
                scoreView.show();
                break;

            case 'about-logo':
                footerImgView.hide();
                inputMenuView.hide();
                mainPageView.hide();
                aboutUsView.show();
                break;
        }
    });


    footerDivEventDelete = footerDiv.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'back-score':
                footerImgView.show();
                inputMenuView.show();
                scoreView.hide();
                break;

            case 'back-about':
                footerImgView.show();
                inputMenuView.show();
                aboutUsView.hide();
                break
        }
    });
}

function isRegisteredUser() {

    inputMenuEventDelete();
    footerImgEventDelete();
    footerDivEventDelete();
    mainPageEventDelete();

    inputMenuView.hide();
    signInView.hide();
    signUpView.hide();
    mainPageView.show();
    footerImgView.show();

    mainPageEventDelete = mainPageView.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'start-game':
                console.log('i am start');
                break;

            case 'logout':
                mainPageView.hide();
                UserService.logout();
                isUnregisteredUser();
                break;
        }
    });

    footerImgEventDelete = footerImgView.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'sound-logo':
                console.log('music');
                break;

            case 'score-logo':
                footerImgView.hide();
                inputMenuView.hide();
                mainPageView.hide();
                scoreView.show();
                break;

            case 'about-logo':
                footerImgView.hide();
                inputMenuView.hide();
                mainPageView.hide();
                aboutUsView.show();
                break;
        }
    });

    footerDivEventDelete = footerDiv.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'back-score':
                footerImgView.show();
                mainPageView.show();
                scoreView.hide();
                break;

            case 'back-about':
                footerImgView.show();
                mainPageView.show();
                aboutUsView.hide();
                break
        }
    });
}


userService
    .getProfile()
    .then(() => {
        isRegisteredUser();
    })
    .catch((err) => {
        console.error("[userService.getProfile] err: " + err);
        isUnregisteredUser();
    });



signInView.onSubmitSignInForm().then(formdata => {
        userService
            .signIn(formdata.email, formdata.password)
            .then(function () {
                console.log("[onSubmitSignInForm] Success sign in");
                Form.reset();
                isRegisteredUser();
            })
            .catch((err) => {
                console.log("[onSubmitSignInForm] err: " + err);
                Form.showFormMessage('server error', signInView);
            });
    });

signUpView.onSubmitSignUpForm().then(formdata => {
        return userService.signUp(formdata.username, formdata.email, formdata.password)
            .then(function () {
                console.log("[onSubmitSignUpForm] Success sign up");
                Form.reset();
                isRegisteredUser();
            })

            .catch((err) => {
                console.log("[onSubmitSignUpForm] err: " + err);
                Form.showFormMessage('server error', signUpView);
            });
    });
