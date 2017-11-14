"use strict";
import Notify from './Notify/Notify';
/**
 * Скрываем ошибки формы
 * @param {HTMLElement} form
 */
// function hideError(form) {
//     let removeErrorCollection = form.getElementsByClassName('form__error');
//     const removeErrorArray = Array.from(removeErrorCollection);
//     removeErrorArray.forEach(elem => {
//         elem.remove();
//     });
// }

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
     * @param {HTMLElement} form
     * @constructor
     */
    constructor(email, password) {
        this.email = email;
        this.password = password;
        // this.currentForm = form;

		this.notify = new Notify();
	}

    /**
     * Создаём html элемент ошибки
     * @param {string} msg - сообщение ошибки
     * @returns {HTMLElement}
     */
    // static createErrorElement(msg) {
    //     let errorElement = document.createElement('p');
    //     errorElement.textContent = msg;
    //     errorElement.classList.add('form__error');
	//
    //     return errorElement;
    // }

    /**
     * Валидируем форму
     * @returns {boolean}
     */
    validForm() {
        // hideError(this.currentForm);

        let flag = true;
        // const [loginField, passwordField] = this.currentForm.children;

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



