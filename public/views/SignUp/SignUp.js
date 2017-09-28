'use strict';

import Form from '../../components/Form/Form/Form';

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
    return new Form('section', {id: 'registry'}, [], {data});
}

