"use strict";

function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectLogin(login) {
    return login.match(/^[a-z0-9_-]{3,16}$/);
}

function isCorrectPassword(pswd) {
    return pswd.match(/^[a-z0-9_-]{6,18}$/);
}

function createErrorElement(msg) {
    let errorElement = document.createElement('p');
    errorElement.textContent = msg;
    errorElement.classList.add('error-msg');

    return errorElement;
}

export default class ValidLoginForm {
    constructor(login, password, form) {
        this.login = login;
        this.password = password;
        this.currentForm = form;
    }

    validForm() {
        console.log('form: ' ,this.currentForm);

        hideError(this.currentForm);

        let flag = true;
        const loginField = this.currentForm.children[0],
            passwordField = this.currentForm.children[1];

        if (!isCorrectLogin(this.login)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid login'), loginField);
        }

        if (!isCorrectPassword(this.password)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid password'), passwordField);
        }

        return flag;
    }
}



