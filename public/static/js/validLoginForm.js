"use strict";

function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach( elem => {
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

function validLoginForm(login, password, form) {

    hideError(form);

    let flag = true;
    const loginField = form.children[0],
        passwordField = form.children[1];

    if (!isCorrectLogin(login)) {
        flag = false;
        form.insertBefore(createErrorElement('invalid login (<4 symbol)'), loginField);
    }

    if (!isCorrectPassword(password)) {
        flag = false;
        form.insertBefore(createErrorElement('invalid password (<6 symbol)'), passwordField);
    }

    return flag;
}

