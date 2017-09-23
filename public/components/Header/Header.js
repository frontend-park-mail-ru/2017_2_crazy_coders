import Block from '../Block/BlockComponents';
import HeaderTemp from '../template/Header.pug';

export default class Header extends Block {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        console.log(data);
        super(tagName, attrs, classes, data);
    }

    getHeader() {
        this.setHTML(HeaderTemp(this.getData()));
        return this.getElement();
    }
}
