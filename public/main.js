'use strict';


import Block from './components/Block/BlockComponents';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import CreateHeader from './views/Header/Header';
import CreateUnRegMenu from './views/UnRegMenu/UnRegMenu';
import UserService from './services/UserService';
import createRegMenu from './views/RegMenu/RegMenu';

let body = document.getElementsByTagName('body')[0];
const app = new Block('div', {id: 'application'});
body.appendChild(app.getElement());


const userService = new UserService();
const header = CreateHeader();
const inputMenu = CreateUnRegMenu();
const signIn = SignIn();
const signUp = SignUp();


app.append(header.getHeader())
    .append(inputMenu.getMenu())
    .append(signIn.getForm())
    .append(signUp.getForm());

inputMenu.hide();
signIn.hide();
signUp.hide();


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

    const mainPage = createRegMenu(userLogin);
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

        signIn.reset();

        userService.isAuthUser(function (err,  userLogin) {
            if (err) {
                return;
            }
            isRegisteredUser(userLogin);
        }, true);

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

