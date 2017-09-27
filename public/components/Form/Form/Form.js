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

    onSubmitSignInForm(callback) {
        let signInForm = document.getElementById('login-form');

        signInForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formdata = {};
            const elements = signInForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
            }

            const isValid = new ValidSignInForm(formdata.email, formdata.password, signInForm);

            callback(formdata, isValid.validForm());
        }.bind(this));
    }

    onSubmitSignUpForm(callback) {
        let signUpForm = document.getElementById('registry-form');

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signUpForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
            }

            const isValid = new ValidSignUpForm(formdata.username, formdata.email,
                formdata.password, formdata.repeatPassword, signUpForm);

            callback(formdata, isValid.validForm());
        }, false);
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
