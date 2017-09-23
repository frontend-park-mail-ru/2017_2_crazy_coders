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

let body = document.getElementsByTagName('body')[0];
const app = new Block('div', {id: 'application'});
body.appendChild(app.getElement());

let footerPanel = new Block('div', {id: 'multimedia-buttons-panel'});

const userService = new UserService();
const header = CreateHeader();
const inputMenu = CreateUnRegMenu();
const signIn = SignIn();
const signUp = SignUp();
const aboutUs = CreateAboutUs();
const score = Scoreboard();



app.append(header.getHeader())
    .append(inputMenu.getMenu())
    .append(signIn.getForm())
    .append(signUp.getForm())
    .append(footerPanel.getElement())
    .append(aboutUs.getTable())
    .append(score.getTable());


inputMenu.hide();
signIn.hide();
signUp.hide();
score.hide();
aboutUs.hide();

function isUnregisteredUser() {

    inputMenu.show();

    inputMenu.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'button-log':
                inputMenu.hide();
                signIn.show();
                break;

            case 'button-register':
                inputMenu.hide();
                signUp.show();
                break;
        }
    });

    let backButtonCollection = signIn.getBackButton();
    const backButtonArray = Array.from(backButtonCollection);

    backButtonArray.forEach(button => {
        button.addEventListener('click', (event) => {
            const elemId = event.target.getAttribute('id');
            switch (elemId) {
                case 'back-sign-in':
                    signIn.hide();
                    inputMenu.show();
                    break;

                case 'back-sign-up':
                    signUp.hide();
                    inputMenu.show();
                    break;
            }
        });
    });

}


function isRegisteredUser(userLogin) {

    inputMenu.hide();
    signIn.hide();
    signUp.hide();

    const mainPage = CreateRegMenu(userLogin);
    app.append(mainPage.getMenu());

    mainPage.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'start-game':
                console.log('i am start');
                break;

            case 'logout':
                mainPage.hide();
                userService.exit();
                isUnregisteredUser();
                break;
        }
    });
}


userService.isAuthUser(function (err, userLogin) {
    if (err) {
        return;
    }
    if (!userLogin) {
        console.log('Hello ', userLogin, 'is null');
        isUnregisteredUser();
    } else {
        isRegisteredUser(userLogin);
    }
}, true);


signIn.onSubmitSignInForm(function (formdata, isValid) {
    userService.login(formdata.login, formdata.password, function (err, resp) {
        if (err) {
            alert(`Some error ${err.status}: ${err.responseText}`);
            return;
        }
        if (resp.success === 'yes') {
            signIn.reset();
            isRegisteredUser(resp.user);
        } else {
            console.log('no user');
        }

    });
});


signUp.onSubmitSignUpForm(function (formdata, isValid) {
    if (isValid) {
        userService.auth(formdata.login, formdata.email, formdata.password, (err, resp) => {
            if (err) {
                return alert(`AUTH Error: ${err.status}`);
            }

            if (resp.response === 200) {
                userService.isAuthUser(function (err, userLogin) {
                    if (err) {
                        return;
                    }
                    isRegisteredUser(userLogin);
                }, true);
            }
            signUp.reset();
        });
    }
});

