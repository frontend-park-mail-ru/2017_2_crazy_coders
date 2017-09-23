'use strict';

import Block from '../../Block/BlockComponents';
import FormTemp from '../../template/Form.pug';
import ValidLoginForm from '../ValidForm/ValidLoginForm';
import ValidRegisterForm from '../ValidForm/ValidRegisterForm';

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
            console.log(signInForm);
            e.preventDefault();

            const formdata = {};
            const elements = signInForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
                console.log(name + " : " + formdata[name]);
            }

            const isValid = new ValidLoginForm(formdata.login, formdata.password, signInForm);

            callback(formdata, isValid.validForm());
        }.bind(this));
    }

    onSubmitSignUpForm(callback) {
        let signUpForm = document.getElementById('registry-form');

        signUpForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formdata = {};
            const elements = signUpForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
                console.log(name + " : " + formdata[name]);
            }

            const isValid = new ValidRegisterForm(formdata.login,formdata.email, formdata.password,formdata.repeatPassword, signUpForm);

            callback(formdata, isValid.validForm());
        }.bind(this), false);
    }

    reset() {
        Array.from(document.getElementsByTagName('form')).forEach( form => {
            form.reset();
        });
    }
}