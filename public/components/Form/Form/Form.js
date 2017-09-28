'use strict';

import Block from '../../Block/BlockComponents';
import FormTemp from '../../template/Form.pug';
import ValidSignInForm from '../ValidForm/ValidSignInForm';
import ValidSignUpForm from '../ValidForm/ValidSignUpForm';

/**
 * Класс формы
 * @module Form
 */
export default class Form extends Block {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    /**
     * Получить форму
     */
    getForm() {
        this.setHTML(FormTemp(this.getData()));
        return this.getElement();
    }

    /**
     * Получить кнопку назад из страницы с формы
     */
    static getBackButton() {
        return document.getElementsByClassName('back-button');
    }

    /**
     * Позволяет подписаться на событие формы входа
     * @return {Promise}
     */
    onSubmitSignInForm(callback) {
        let signInForm = document.getElementById('login-form');

        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signInForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
            }

            const isValid = new ValidSignInForm(formdata.email, formdata.password, signInForm);

            if(isValid.validForm()) {
                callback(formdata);
            }
        });
    }

    /**
     * Позволяет подписаться на событие формы регистрации
     * @return {Promise}
     */
    onSubmitSignUpForm(callback) {
        let signUpForm = document.getElementById('registry-form');

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signUpForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
            }

            const isValid = new ValidSignUpForm(formdata.username, formdata.email,
                formdata.password, formdata.repeatPassword, signUpForm);

            if(isValid.validForm()) {
                callback(formdata);
            }
        }, false);
    }

    /**
     * Показываем ошибки к форме
     * @param {string}  msg - сообщение
     * @param {HTMLElement} form
     * @return {Promise}
     */
    static showFormMessage(msg, form) {
        let currentForm = form.getElement().getElementsByTagName('form')[0];
        currentForm.insertBefore(ValidSignUpForm.createErrorElement(msg), currentForm.children[0]);
    }

    /**
     * Очищаем поля форм
     */
    static reset() {
        Array.from(document.getElementsByTagName('form')).forEach(form => {
            form.reset();
        });
    }
}
