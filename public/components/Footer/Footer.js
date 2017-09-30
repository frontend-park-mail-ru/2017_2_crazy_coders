import Block from '../Block/BlockComponents';
import FooterTemp from './Footer.pug';
import './Footer.css';

/**
 * Класс footer-а
 * @module Footer
 */
export default class Footer extends Block {
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
     * Получить footer
     */
    getFooter() {
        this.setHTML(FooterTemp(this.getData()));
        return this.getElement();
    }
}
