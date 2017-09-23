'use strict';

import Form from '../../components/Form/Form/Form';

let data = {
    title: 'LOG IN',
    idForm: 'login-form',
    fields: [
        {
            attrs: {
                type: 'text',
                name: 'login',
                placeholder: 'Enter login',
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
                id: 'login-button',
            },
        },
        {
            attrs: {
                class: 'button a-button back-button',
                value: 'BACK',
                id: 'back-sign-in',
            },
        },
    ]
};

export default function SignIn() {
    return new Form('section', {id: 'login'}, [], {data});
}

