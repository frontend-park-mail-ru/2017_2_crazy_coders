'use strict';

import pugMenuGame from './MenuGame.pug';
import MenuConstruct from '../../constructs/MenuConstruct/MenuConstruct';

const ITEMS = [
    {
        id: "menuGame_play",
        defaultImg: "images/Game.png",
        backImg: "images/Game_hold.png"
    },
    {
        id: "menuGame_score",
        defaultImg: "images/Score_btn.png",
        backImg: "images/Score_btn_hold.png"
    },
    {
        id: "menuGame_aboutUs",
        defaultImg: "images/About_us.png",
        backImg: "images/We_do_it.png"
    },
    {
        id: "menuGame_rules",
        defaultImg: "images/About_rules.png",
        backImg: "images/About_rules_2.png"
    }
];

const MenuGame = function MenuStart() {
    let div = document.createElement('div');
    div.innerHTML = pugMenuGame({
        items: ITEMS
    });
    return div;
};

export default MenuGame;