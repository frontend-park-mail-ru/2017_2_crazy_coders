'use strict';

export default class Block {

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


    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setHTML(html) {
        this.el.innerHTML = html;
    }

    setText(text) {
        this.el.textContent = text;
    }


    clear() {
        this.el.innerHTML = '';
    }

    hide() {
        this.el.setAttribute('hidden', 'hidden');
    }

    show() {
        this.el.removeAttribute('hidden');
    }

    getElement() {
        return this.el;
    }

    append(block) {
        this.getElement().appendChild(block);
        return this;
    }

    on(event, callback) {
        this.el.addEventListener(event, callback);
        return function () {
            this.el.removeEventListener(event, callback);
        }.bind(this);
    }
}

