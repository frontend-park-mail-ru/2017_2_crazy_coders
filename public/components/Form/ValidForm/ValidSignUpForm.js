"use strict";

/**
 * Скрываем ошибки формы
 * @param {HTMLElement} form
 */
function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

/**
 * Проверяем корректность поля формы
 * @param {string} text
 * @param {int} minLenField
 */
function isCorrectTextField(text, minLenField) {
    return text.match(new RegExp('^[a-z0-9_-]{' + minLenField + ',18}$'));
}

/**
 * Проверяем корректность email
 * @param {string} email
 */
function isCorrectEmail(email) {
    return email.match(new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'));
}

/**
 * Проверяем пароль на совпадение
 * @param {string} pswd
 * @param {string} pswdRepeat
 */
function isSamePasswords(pswd, pswdRepeat) {
    return pswd === pswdRepeat;
}

/**
 * Класс валидации формы регистрации
 * @module ValidSignUpForm
 */
export default class ValidSignUpForm {
    /**
     * @param {string} login
     * @param {string} email
     * @param {string} password
     * @param {string} repeatPassword
     * @param {HTMLElement} form
     * @constructor
     */
    constructor(login, email, password, repeatPassword, form) {
        this.username = login;
        this.email = email;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.currentForm = form;
    }

    /**
     * Создаём html элемент ошибки
     * @param {string} msg - сообщение ошибки
     * @returns {HTMLElement}
     */
    static createErrorElement(msg) {
        let errorElement = document.createElement('p');
        errorElement.textContent = msg;
        errorElement.classList.add('error-msg');

        return errorElement;
    }

    /**
     * Валидируем форму
     * @returns {boolean}
     */
    validForm() {

        hideError(this.currentForm);

        let flag = true;
        const usernameField = this.currentForm.children[0],
            emailField = this.currentForm.children[1],
            passwordField = this.currentForm.children[2],
            repeatPasswordField = this.currentForm.children[3];

        if (!isCorrectTextField(this.username, 4)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignUpForm.createErrorElement('invalid username'), usernameField);
        }

        if (!isCorrectEmail(this.email)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignUpForm.createErrorElement('invalid email'), emailField);
        }

        if (!isCorrectTextField(this.password, 6)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignUpForm.createErrorElement('invalid password'), passwordField);
        }

        if (!isSamePasswords(this.password, this.repeatPassword)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignUpForm.createErrorElement('the values of entered passwords do not match'),
                repeatPasswordField);
        }

        return flag;
    }
}

