import Block from '../Block/BlockComponents';
import HeaderTemp from './Header.pug';

/**
 * Класс Header-а
 * @module Header
 */
export default class Header extends Block {
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
     * Получить Header
     */
    getClassElement() {

        let data = this.getData();

        this.setHTML(HeaderTemp({data}));
        return this.getElement();
    }
}
