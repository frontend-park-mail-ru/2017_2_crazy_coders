"use strict";

function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectLogin(login) {
    return login.trim().length > 4;
}

function isCorrectPassword(pswd) {
    return pswd.trim().length >= 6;
}

function createErrorElement(msg) {
    let errorElement = document.createElement('p');
    errorElement.textContent = msg;
    errorElement.classList.add('error-msg');

    return errorElement;
}

class ValidSigninForm {
    constructor() {
    }

    static validLoginForm(login, password, form) {

        let currentForm = form;

        console.log('form:' ,currentForm);
        hideError(currentForm);

        let flag = true;
        const loginField = currentForm.children[0],
            passwordField = currentForm.children[1];

        if (!isCorrectLogin(login)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('invalid login (<=4 symbol)'), loginField);
        }

        if (!isCorrectPassword(password)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('invalid password (<6 symbol)'), passwordField);
        }

        return flag;
    }

}

export default ValidSigninForm;