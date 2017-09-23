import Block from '../Block/BlockComponents';
import FooterTemp from '../template/Footer.pug';

export default class Header extends Block {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getFooter() {
        this.setHTML(FooterTemp(this.getData()));
        return this.getElement();
    }
}
