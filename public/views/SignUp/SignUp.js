'use strict';

import SignUpForm from '../../components/Form/Form/SignUpForm';
import ValidSignUpForm from '../../components/Form/ValidForm/ValidSignUpForm';

let data = {
    title: 'SIGN UP',
    idForm: 'registry-form',
    fields: [
        {
            attrs: {
                type: 'text',
                name: 'username',
                placeholder: 'Enter username',
            },
        },
        {
            attrs: {
                type: 'text',
                name: 'email',
                placeholder: 'Enter email',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'password',
                placeholder: 'Enter password',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'repeatPassword',
                placeholder: 'Repeat password',
            },
        }],
    buttons: [
        {
            attrs: {
                type: 'submit',
                class: 'button submitData',
                value: 'SIGN UP',
                id: 'signup-button',
            },
        },
        {
            attrs: {
                class: 'button back-button',
                value: 'BACK',
                id: 'back-sign-up',
            },
        },
    ]
};

/**
 * Получаем страницу регистрации
 */
export default function SignUp() {
    return new SignUpForm('section', {id: 'registry'}, [], {data}, ValidSignUpForm);
}

