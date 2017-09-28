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
 * Проверяем корректность имени пользователя
 * @param {string} username
 */
function isCorrectUsername(username) {
    return username.match(/^[a-z0-9_-]{3,16}$/);
}

/**
 * Проверяем корректность парооля
 * @param {string} pswd
 */
function isCorrectPassword(pswd) {
    return pswd.match(/^[a-z0-9_-]{6,18}$/);
}

/**
 * Проверяем корректность email
 * @param {string} email
 */
function isCorrectEmail(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
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

        if (!isCorrectUsername(this.username)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignUpForm.createErrorElement('invalid username'), usernameField);
        }

        if (!isCorrectEmail(this.email)) {
            flag = false;
            this.currentForm.insertBefore(ValidSignUpForm.createErrorElement('invalid email'), emailField);
        }

        if (!isCorrectPassword(this.password)) {
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

