(function () {
    'use strict';

    class Block {
        constructor(el) {
            this.el = el;
        }

        static Create(tagName = 'div', classes = [], attrs = {}) {
            const el = document.createElement(tagName);
            classes.forEach( className => {
                el.classList.add(className);
            });
            for (let name in attrs) {
                el.setAttribute(name, attrs[name]);
            }
            return new Block(el);
        }

        setText(text) {
            this.el.textContent = text;
        }

        hide() {
            this.el.setAttribute('hidden', true);
        }

        show() {
            this.el.removeAttribute('hidden');
        }

        append(block) {
            this.el.appendChild(block.el);
            return this;
        }

        on(event, callback) {
            this.el.addEventListener(event, callback);
        }
    }

    window.Block = Block;

})();