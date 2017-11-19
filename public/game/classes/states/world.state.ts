'use strict';
/** Imports */
import State from './state';
import Tank from '../Tank/Tank';
import TreeBox from '../Box/TreeBox/TreeBox';

const earth       = require('../../../static/staticsGame/images/ground.jpg');
const pause       = require('../../../static/staticsGame/images/pause_button.png');
const box_tree    = require('../../../static/staticsGame/images/box_tree.png');
const tanks       = require('../../../static/staticsGame/images/tanks.png');


export default class WorldState extends State {
    _music: Phaser.Sound;
    _land: any;
    _tank: Tank;
    _box: TreeBox;
    _pause: Phaser.Button;

    create(): void {

        this._music = this.game.add.audio('startAudio', 1, false);
        this._music.play();

        this._land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this._land.fixedToCamera = true;

        this._tank = new Tank(this.game, "hello");
        this._box = new TreeBox(this.game, 100, 100);

        this._pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this._pause.scale.setTo(0.2, 0.2);
        this._pause.frame = 1;
        this._pause['clicked'] = false;

        this.game.camera.follow(this._tank);
        this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
        this.game.camera.focusOnXY(0, 0);

    }

    update(): void {
        this.game.physics.arcade.collide(this._tank._tank._body, this._box._box);

        this._land.tilePosition.x = -this.camera.x;
        this._land.tilePosition.y = -this.camera.y;
        this._tank.update();
    }

    startPause(): void {

    };
}


