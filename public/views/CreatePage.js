import Block from '../components/Block/BlockComponents';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Header from './Header/Header';
import UnRegMenu from './UnRegMenu/UnRegMenu';
import RegMenu from './RegMenu/RegMenu';
import AboutUs from './AboutUs/AboutUs';
import Scoreboard from './Scoreboard/Scoreboard';
import Footer from './Footer/Footer';

class CreatePage {
    constructor() {
        this.body = document.getElementsByTagName('body')[0];
        this.parts = new Map();

        this.addParts(this.body, "Header", Header());
        this.addParts(this.body, "SignIn", SignIn());
        this.addParts(this.body, "SignUp", SignUp());
        this.addParts(this.body, "UnRegMenu", UnRegMenu());
        this.addParts(this.body, "RegMenu", RegMenu());
        this.addParts(this.body, "AboutUs", AboutUs());
        this.addParts(this.body, "Scoreboard", Scoreboard());
        this.addParts(this.body, "Footer", Footer());
    }


    addParts(parent, name, elem) {
        this.parts.set(name, elem);
        elem.hide();
        parent.appendChild(elem.getClassElement());
    }

    getParts() {
        return this.parts;
    }
}

export default CreatePage;