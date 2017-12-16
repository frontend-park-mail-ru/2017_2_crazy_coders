"use strict";
import Notify from './Notify/Notify';

/**
 * Проверяем корректность email
 * @param {string} email
 */
function isCorrectEmail(email) {
    return email.match(new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'));
}

/**
 * Проверяем корректность поля формы
 * @param {string} text
 * @param {int} minLenField
 * @param {int} maxLenField
 */
function isCorrectTextField(text, minLenField, maxLenField) {
    return text.match(new RegExp('^[a-zA-Z0-9_-]{' + minLenField + ','+ maxLenField +'}$'));
}

/**
 * Класс валидации формы входа
 * @module ValidSignInForm
 */
export default class ValidSignInForm {
    /**
     * @param {string} email
     * @param {string} password
     * @constructor
     */
    constructor(email, password) {
        this.email = email;
        this.password = password;
        // this.currentForm = form;

		this.notify = new Notify();
	}

    /**
     * Валидируем форму
     * @returns {boolean}
     */
    validForm() {
        let flag = true;

        const minLenPassword = 6,
            maxLenPassword = 18;

        if (!isCorrectEmail(this.email)) {
            flag = false;
			this.notify.notify('invalid email');
		}


        if (!isCorrectTextField(this.password, minLenPassword, maxLenPassword)) {
            flag = false;
			this.notify.notify('invalid password');
		}

        return flag;
    }
}



