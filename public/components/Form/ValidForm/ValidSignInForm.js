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
 * Проверяем корректность email
 * @param {string} email
 */
function isCorrectEmail(email) {
    return email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
}

/**
 * Проверяем корректность парооля
 * @param {string} pswd
 */
function isCorrectPassword(pswd) {
    return pswd.match(/^[a-z0-9_-]{6,18}$/);
}

/**
 * Класс валидации формы входа
 * @module ValidSignInForm
 */
export default class ValidSignInForm {
    /**
     * @param {string} email
     * @param {string} password
     * @param {HTMLElement} form
     * @constructor
     */
    constructor(email, password, form) {
        this.email = email;
        this.password = password;
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



