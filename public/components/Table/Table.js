import Block from '../Block/BlockComponents';
import TableTemp from '../template/Table.pug';

export default class Header extends Block {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getTable() {
        this.setHTML(TableTemp(this.getData()));
        return this.getElement();
    }
}
