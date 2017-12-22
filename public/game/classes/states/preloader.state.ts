'use strict';
/** Imports */
import State from './state';

// Webpack will replace these imports with a URLs to images
const tanks       = require('../../../static/staticsGame/images/tanks.png');
const tanksJSON   = require('../../../static/staticsGame/images/tanks.json');
const enemy       = require('../../../static/staticsGame/images/enemy-tanks.png');
const bullet      = require('../../../static/staticsGame/images/bullet.png');
const kaboom      = require('../../../static/staticsGame/images/explosion.png');
const titlepage   = require('../../../static/staticsGame/images/titlepage.jpg');
const logo        = require('../../../static/staticsGame/images/logo.png');
// const startAudio      = require('../../../static/staticsGame/music/boom.mp3');
const earth       = require('../../../static/staticsGame/images/ground.jpg');
const pause       = require('../../../static/img/home.png');
const box_tree    = require('../../../static/staticsGame/images/box_tree.png');

// const tanks       = require('../../static/staticsGame/images/tanks.png');
// const tanksJSON   = require('../../static/staticsGame/images/tanks.json');
// const enemy       = require('../../static/staticsGame/images/enemy-tanks.png');
// const bullet      = require('../../static/staticsGame/images/bullet.png');
// const kaboom      = require('../../static/staticsGame/images/explosion.png');
// const titlepage   = require('../../static/staticsGame/images/titlepage.jpg');
// const logo        = require('../../static/staticsGame/images/logo.png');
// // const startAudio      = require('../../static/staticsGame/music/boom.mp3');
// const earth       = require('../../static/staticsGame/images/ground.jpg');
// const pause       = require('../../static/staticsGame/images/pause_button.png');
// const box_tree    = require('../../static/staticsGame/images/box_tree.png');

// The state for loading core resources for the game
export default class PreloaderState extends State {
    _background: Phaser.Sprite;
    _preloadBar: Phaser.Sprite;

    preload(): void {
        console.debug('Assets loading started');

        this.game.load.image('titlepage', titlepage);
        this.game.load.image('logo', logo);
        // this.game.load.audio('startAudio', startAudio, true);
        this.game.load.image('earth', earth);
        this.game.load.image('pause', pause);
        this.game.load.image('box_tree', box_tree);
        this.game.load.atlas('tank', 'static/staticsGame/images/tanks.png', 'static/staticsGame/images/tanks.json');
        this.game.load.atlas('enemy', 'static/staticsGame/images/enemy-tanks.png', 'static/staticsGame/images/tanks.json');
        this.game.load.image('bullet', bullet);
        this.game.load.spritesheet('kaboom', kaboom, 64, 64, 23);
    }

    create(): void {
        console.debug('Assets loading completed');
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this._background = this.game.add.sprite(0, 0,'titlepage');
        this._background.alpha = 0;
        let tween = this.game.add.tween(this._background).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.startMainMenu, this);
    }

    startMainMenu(): void {
        this.game.add.tween(this._background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        this.game.state.start('main', true, false);

    }
}
