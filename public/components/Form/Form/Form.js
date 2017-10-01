'use strict';

import Block from '../../Block/BlockComponents';
import FormTemp from './Form.pug';
import ValidSignInForm from '../ValidForm/ValidSignInForm';
import ValidSignUpForm from '../ValidForm/ValidSignUpForm';
import './Form.css';

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
    getClassElement() {
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
