'use strict';

import PageConstruct from '../../constructs/PageConstruct/PageConstruct';
import FormConsruct from '../../constructs/FormConstruct/FormConstruct';
import pugSignUp from './SignUp.pug';

const TITLE = "Sign Up";

const EMAIL_FIELD = {
    id: "SignUp_emailInput",
    type: "email",
    required: "true",
    placeholder: "Enter e-mail",
};
const LOGIN_FIELD = {
    id: "SignUp_loginInput",
    type: "text",
    required: "true",
    placeholder: "Enter login",
};
const PASSRORD_FIELD = {
    id: "SignUp_passwordInput",
    type: "password",
    required: "true",
    placeholder: "Enter password",
};
const PASSRORD_REPEAT_FIELD = {
    id: "formSignUp_passwordRepeatInput",
    type: "password",
    required: "true",
    placeholder: "Enter password repeatedly",
};

const SIGN_UP_BUTTON = {
    id: "SignUp_signUpBtn",
    type: "submit",
    text: "Send",
};
const SIGN_IN_BUTTON = {
    id: "SignIn_signInBtn",
    type: "reset",
    text: "Authorization",
};

const SignUp = function () {
    let div = document.createElement('div');
    div.innerHTML = pugSignUp({
        form: {
            title: TITLE,
            fields: [
                EMAIL_FIELD,
                LOGIN_FIELD,
                PASSRORD_FIELD,
                PASSRORD_REPEAT_FIELD,
            ],
            buttons: [
                SIGN_UP_BUTTON,
                SIGN_IN_BUTTON,
            ],
        }
    });

    return PageConstruct({
        el: div
    });
};

export default SignUp;