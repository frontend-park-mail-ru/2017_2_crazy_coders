import Block from '../Block/BlockComponents';
import MenuTemp from './Menu.pug';
import './Menu.css';

/**
 * Класс Menu-а
 * @module Menu
 */
export default class Menu extends Block {
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
     * Получить Menu
     */
    getClassElement() {
        this.setHTML(MenuTemp(this.getData()));
        return this.getElement();
    }
}
