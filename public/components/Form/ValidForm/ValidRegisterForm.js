

"use strict";

function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectLogin(login) {
    return true;
    // return login.match(/^[a-z0-9_-]{3,16}$/);    // not working
}

function isCorrectPassword(pswd) {
    return pswd.match(/^[a-z0-9_-]{6,18}$/);
}

function isCorrectEmail(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function isSamePasswords(pswd, pswdRepeat, form) {
    return pswd === pswdRepeat;
}

function createErrorElement(msg) {
    let errorElement = document.createElement('p');
    errorElement.textContent = msg;
    errorElement.classList.add('error-msg');

    return errorElement;
}

export default class ValidRegisterForm {
    constructor(login, email, password, repeatPassword, form) {
        this.login = login;
        this.email = email;
        this.password = password;
        console.log(this.password);
        this.repeatPassword = repeatPassword;

        console.log(repeatPassword);
        this.currentForm = form;
    }

    validForm() {

        // console.log(this.currentForm);
        hideError(this.currentForm);

        let flag = true;
        const loginField = this.currentForm.children[0],
            emailField = this.currentForm.children[1],
            passwordField = this.currentForm.children[2],
            repeatPasswordField = this.currentForm.children[3];

        if (!isCorrectLogin(this.login)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid login'), loginField);
        }

        if (!isCorrectEmail(this.email)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid email'), emailField);
        }

        if (!isCorrectPassword(this.password)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid password'), passwordField);
        }

        if (!isSamePasswords(this.password, this.repeatPassword)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('the values of entered passwords do not match'), repeatPasswordField);
        }

        return flag;
    }

}

