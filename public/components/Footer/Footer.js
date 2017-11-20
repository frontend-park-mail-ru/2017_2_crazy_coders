import Block from '../Block/BlockComponents';
import FooterTemp from './Footer.pug';
// import './Footer.scss';

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
    getClassElement() {
		let data = this.getData();
        this.setHTML(FooterTemp({data}));
        return this.getElement();
    }
}
