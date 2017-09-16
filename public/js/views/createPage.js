'use strict';

import AboutUs from './parts/AboutUs/AboutUs';
import FormSignIn from './parts/FormSignIn/FormSignIn';
import FormSignUp from './parts/FormSignUp/FormSignUp';
import MenuStart from './parts/MenuStart/MenuStart';
import MenuGame from './parts/MenuGame/MenuGame';
import ScoreList from './parts/ScoreList/ScoreList';

import User from '../models/user';

class CreatePage{

    constructor() {

        this.body = document.getElementsByTagName('body')[0];
        this.parts = new Map();

        this.addParts(this.body, "MenuStart", MenuStart);
        this.addParts(this.body, "MenuGame", MenuGame);
        this.addParts(this.body, "FormSignIn", FormSignIn);
        this.addParts(this.body, "FormSignUp", FormSignUp);
        this.addParts(this.body, "AboutUs", AboutUs);
        this.addParts(this.body, "ScoreList", ScoreList);


    }

    addParts(parent, name, element) {
        this.parts.set(name, element);
        element.hidden = true;
        parent.appendChild(name, element);
    }

    getParts() {
        return this.parts;
    }
}

export default CreatePage;