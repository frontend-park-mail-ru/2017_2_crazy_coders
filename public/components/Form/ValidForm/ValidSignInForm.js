"use strict";

function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectEmail(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function isCorrectPassword(pswd) {
    return pswd.match(/^[a-z0-9_-]{6,18}$/);
}


export default class ValidSignInForm {
    constructor(email, password, form) {
        this.email = email;
        this.password = password;
        this.currentForm = form;
    }

    static createErrorElement(msg) {
        let errorElement = document.createElement('p');
        errorElement.textContent = msg;
        errorElement.classList.add('error-msg');

        return errorElement;
    }

    validForm() {
        console.log('form: ' ,this.currentForm);

        hideError(this.currentForm);

        let flag = true;
        const loginField = this.currentForm.children[0],
            passwordField = this.currentForm.children[1];

        if (!isCorrectEmail(this.email)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignInForm.createErrorElement('invalid email'), loginField);
        }

        if (!isCorrectPassword(this.password)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignInForm.createErrorElement('invalid password'), passwordField);
        }

        return flag;
    }
}



