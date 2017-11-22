import Block from '../Block/BlockComponents';
import TableTemp from './Table.pug';
// import './Table.scss';

/**
 * Класс Table
 * @module Table
 */
export default class Table extends Block {
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
     * Получить Table
     */
    getClassElement() {
        let data = this.getData();

        this.setHTML(TableTemp({data}));
        return this.getElement();
    }
}
