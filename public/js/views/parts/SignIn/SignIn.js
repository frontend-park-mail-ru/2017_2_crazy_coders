'use strict';

import PageConstruct from '../../constructs/PageConstruct/PageConstruct';
import FormConsruct from '../../constructs/FormConstruct/FormConstruct';
import Block from '../../constructs/BlockConstruct/BlockConstruct';
import Form from '../../constructs/FormConstruct/FormConstruct';
import pugSignIn from './SignIn.pug';

const TITLE = "SIGNIN";

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
    text: "SIGNIN",
};
const SIGN_UP_BUTTON = {
    id: "SignIn_signUpBtn",
    type: "reset",
    text: "SIGNUP",
};

const SignIn = function () {

    let signinFields = [
        {
            attrs: {
                type: 'login',
                name: 'login',
                class: 'input',
                placeholder: 'Enter email',
                required: 'required',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'password',
                class: 'input',
                placeholder: 'Enter password',
                required: 'required',
            },
        },
        {
            attrs: {
                type: 'submit',
                class: 'button button_start',
                value: 'Sign In',
            },
        },
    ];

    let block = new Form(signinFields);
    block.getElement().classList.add('logo');
    block.getElement().classList.add('input_form');

/*    block.setHTML(pugSignIn({
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
                );*/

    return block;
};

export default SignIn;