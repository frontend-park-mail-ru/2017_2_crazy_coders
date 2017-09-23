"use strict";

function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectLogin(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
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
    constructor(email, password, form) {
        this.email = email;
        this.password = password;
        this.currentForm = form;
    }

    validForm() {
        console.log('form: ' ,this.currentForm);

        hideError(this.currentForm);

        let flag = true;
        const loginField = this.currentForm.children[0],
            passwordField = this.currentForm.children[1];

        if (!isCorrectLogin(this.email)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid email'), loginField);
        }

        if (!isCorrectPassword(this.password)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid password'), passwordField);
        }

        return flag;
    }
}



