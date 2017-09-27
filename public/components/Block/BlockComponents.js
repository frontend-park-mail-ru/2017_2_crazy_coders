'use strict';

/**
 * Базовый класс блока
 * @module Block
 */
export default class Block {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data = {}) {
        this.el = document.createElement(tagName);

        classes.forEach(function (className) {
            this.el.classList.add(className);
        });

        for (let name in attrs) {
            this.el.setAttribute(name, attrs[name]);
        }

        this.setData(data);
    }

    /**
     * Установить новые данные блока
     * @param {string} data
     */
    setData(data) {
        this.data = data;
    }

    /**
     * Получить данные блока
     */
    getData() {
        return this.data;
    }

    /**
     * Установить HTML содержимое блока
     * @param {HTMLElement} html
     */
    setHTML(html) {
        this.el.innerHTML = html;
    }

    /**
     * Устанавливает новый текст для элемента
     * @param {string} text - устанавливаем текст
     */
    setText(text) {
        this.el.textContent = text;
    }

    /**
     * Очищаем содержимое элемента
     */
    clear() {
        this.el.innerHTML = '';
    }

    /**
     * Скрывает элемент
     */
    hide() {
        this.el.setAttribute('hidden', 'hidden');
    }

    /**
     * Отображает элемент
     */
    show() {
        this.el.removeAttribute('hidden');
    }

    /**
     * Возвращает элемент
     * @returns {HTMLElement}
     */
    getElement() {
        return this.el;
    }

    /**
     * Вставляет в себя элемент
     * @param {HTMLElement} block
     */
    append(block) {
        this.getElement().appendChild(block);
        return this;
    }

    /**
     * Позволяет подписаться на событие
     * @param {string} event
     * @param {EventListener} callback
     * @return {function(this:Block)} - функция отписки от события
     */
    on(event, callback) {
        this.el.addEventListener(event, callback);
        return function () {
            this.el.removeEventListener(event, callback);
        }.bind(this);
    }
}

