'use strict';

import Block from '../../Block/BlockComponents';
import FormTemp from '../../template/Form.pug';
import ValidSignInForm from '../ValidForm/ValidSignInForm';
import ValidSignUpForm from '../ValidForm/ValidSignUpForm';

export default class Form extends Block {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getForm() {
        this.setHTML(FormTemp(this.getData()));
        return this.getElement();
    }

    getBackButton() {
        return document.getElementsByClassName('back-button');
    }

    onSubmitSignInForm() {
        let signInForm = document.getElementById('login-form');

        return new Promise((resolve) => {
            signInForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const formdata = {};
                const elements = signInForm.elements;

                for (let name in elements) {
                    formdata[name] = elements[name].value;
                }

                const isValid = new ValidSignInForm(formdata.email, formdata.password, signInForm);

                if(isValid.validForm()) {
                    resolve(formdata);
                }
            });
        });
    }

    onSubmitSignUpForm(callback) {
        let signUpForm = document.getElementById('registry-form');

        return new Promise((resolve) => {
            signUpForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const formdata = {};
                const elements = signUpForm.elements;

                for (let name in elements) {
                    formdata[name] = elements[name].value;
                }

                const isValid = new ValidSignUpForm(formdata.username, formdata.email,
                    formdata.password, formdata.repeatPassword, signUpForm);

                if(isValid.validForm()) {
                    resolve(formdata);
                }
            }, false);
        });
    }

    static showFormMessage(msg, form) {
        let currentForm = form.getElement().getElementsByTagName('form')[0];
        currentForm.insertBefore(ValidSignUpForm.createErrorElement(msg), currentForm.children[0]);
        }

    reset() {
        Array.from(document.getElementsByTagName('form')).forEach(form => {
            form.reset();
        });
    }
}
