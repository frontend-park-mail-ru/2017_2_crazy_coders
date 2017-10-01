'use strict';

import SignInForm from '../../components/Form/Form/SignInForm';
import ValidSignInForm from '../../components/Form/ValidForm/ValidSignInForm';

let data = {
    title: 'SIGN IN',
    idForm: 'login-form',
    fields: [
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
        }],
    buttons: [
        {
            attrs: {
                type: 'submit',
                class: 'button',
                value: 'SIGN IN',
                id: 'signIn-button-signIn',
            },
        },
        {
            attrs: {
                class: 'button a-button back-button',
                value: 'BACK',
                id: 'signIn-button-back',
            },
        },
    ]
};

/**
 * Получаем страницу входа
 */
export default function SignIn() {
    return new SignInForm('section', {id: 'section-signIn'}, [], {data}, ValidSignInForm);
}

