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

function validRegisterForm(login, email, password, repeatPassword, form) {

    hideError(form);

    let flag = true;
    const loginField = form.children[0],
        emailField = form.children[1],
        passwordField = form.children[2],
        repeatPasswordField = form.children[3];

    if (!isCorrectLogin(login)) {
        flag = false;
        form.insertBefore(createErrorElement('invalid login (<4 symbol)'), loginField);
    }

    if(!isCorrectEmail(email)) {
        flag = false;
        form.insertBefore(createErrorElement('invalid email'), emailField);
    }

    if (!isCorrectPassword(password)) {
        flag = false;
        form.insertBefore(createErrorElement('invalid password (<6 symbol)'), passwordField);
    }

    if (!isSamePasswords(password, repeatPassword)) {
        flag = false;
        form.insertBefore(createErrorElement('the values of entered passwords do not match'), repeatPasswordField);
    }

    return flag;
}

