'use strict';

import PageConstruct from '../../constructs/PageConstruct/PageConstruct';
import FormConsruct from '../../constructs/FormConstruct/FormConstruct';
import Block from '../../constructs/BlockConstruct/BlockConstruct';
import pugSignIn from './SignIn.pug';

const TITLE = "Sign in";

const LOGIN_FIELD = {
    id: "SignIn_loginInput",
    type: "text",
    required: "true",
    placeholder: "Enter login",
};
const PASSWORD_FIELD = {
    id: "SignIn_passwordInput",
    type: "password",
    required: "true",
    placeholder: "Enter password",
};

const SIGN_IN_BUTTON = {
    id: "SignIn_signInBtn",
    type: "submit",
    text: "Войти",
};
const SIGN_UP_BUTTON = {
    id: "SignIn_signUpBtn",
    type: "reset",
    text: "Регистрация",
};

const SignIn = function () {
    let block = Block.Create('div', {}, ['logo', 'input_form']);

    block.setHTML(pugSignIn({
                    form: {
                        title: TITLE,
                        fields: [
                            LOGIN_FIELD,
                            PASSWORD_FIELD,
                        ],
                        buttons: [
                            SIGN_IN_BUTTON,
                            SIGN_UP_BUTTON,
                        ],
                    }
                })
                );

    return block;
};

export default SignIn;