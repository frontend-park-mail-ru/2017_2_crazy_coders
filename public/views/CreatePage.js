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

        this.addParts("Header", Header());
        this.addParts("SignIn", SignIn());
        this.addParts("SignUp", SignUp());
        this.addParts("UnRegMenu", UnRegMenu());
        this.addParts("RegMenu", RegMenu());
        this.addParts("AboutUs", AboutUs());
        this.addParts("Scoreboard", Scoreboard());
        this.addParts("Footer", Footer());
    }


    addParts(name, elem, parent=this.body) {
        this.parts.delete(name);
        this.parts.set(name, elem);
        elem.hide();
        parent.appendChild(elem.getClassElement());
    }

    getParts() {
        return this.parts;
    }
}

export default CreatePage;