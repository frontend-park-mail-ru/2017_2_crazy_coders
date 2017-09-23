import Block from '../Block/BlockComponents';
import MenuTemp from '../template/Menu.pug';

export default class Header extends Block {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        console.log(data);
        super(tagName, attrs, classes, data);
    }

    getMenu() {
        this.setHTML(MenuTemp(this.getData()));
        return this.getElement();
    }
}
