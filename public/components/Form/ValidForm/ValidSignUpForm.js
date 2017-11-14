"use strict";

import Notify from './Notify/Notify';

/**
 * Проверяем корректность поля формы
 * @param {string} text
 * @param {int} minLenField
 * @param {int} maxLenField
 */
function isCorrectTextField(text, minLenField, maxLenField) {
	return text.match(new RegExp('^[a-zA-Z0-9_-]{' + minLenField + ',' + maxLenField + '}$'));
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
	return pswd === pswdRepeat && pswd !== '' && pswdRepeat !== '';
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
	 * @constructor
	 */
	constructor(login, email, password, repeatPassword) {
		this.username = login;
		this.email = email;
		this.password = password;
		this.repeatPassword = repeatPassword;
		// this.currentForm = form;

		this.notify = new Notify();
	}

	/**
	 * Валидируем форму
	 * @returns {boolean}
	 */
	validForm() {
		let flag = true;

		const minLenUsername = 4,
			maxLenUsername = 15,
			minLenPassword = 6,
			maxLenPassword = 18;

		if (!isCorrectTextField(this.username, minLenUsername, maxLenUsername)) {
			flag = false;
			this.notify.notify('invalid username');
		}

		if (!isCorrectEmail(this.email)) {
			flag = false;
			this.notify.notify('invalid email');
		}

		if (!isCorrectTextField(this.password, minLenPassword, maxLenPassword)) {
			flag = false;
			this.notify.notify('invalid password');
		}

		if (!isSamePasswords(this.password, this.repeatPassword)) {
			flag = false;
			this.notify.notify('error repeat password');
		}

		return flag;
	}
}

