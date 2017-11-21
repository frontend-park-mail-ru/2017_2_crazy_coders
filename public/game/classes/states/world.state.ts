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
    _treeBoxes: TreeBox;
    _pause: Phaser.Button;
    _bullets: Phaser.Group;
    _explosions: Phaser.Group;

    create(): void {
        this.load.image('bullet', 'static/staticsGame/images/bullet.png');
        this.load.spritesheet('kaboom', 'static/staticsGame/images/explosion.png', 64, 64, 23);

        this._music = this.game.add.audio('startAudio', 1, false);
        this._music.play();

        this._land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this._land.fixedToCamera = true;

        this._tank = new Tank(this.game, "Tiger");
        this._treeBoxes = new TreeBox(this.game);

        for (let i = 0; i < 10; i++) {
            let coord = this.randomInteger(0, 500);
            this._treeBoxes.createBox(coord, coord);
        }

        this._bullets = this.game.add.group();
        this._bullets.enableBody = true;
        this.game.physics.arcade.enable(this._bullets);
        this._bullets.createMultiple(30, 'bullet');
        this._bullets.setAll('anchor.x', 0.5);
        this._bullets.setAll('anchor.y', 0.5);
        this._bullets.setAll('outOfBoundsKill', true);
        this._bullets.setAll('checkWorldBounds', true);

        this._explosions = this.add.group();

        for (let i = 0; i < 10; i++) {
            let explosionAnimation = this._explosions.create(0, 0, 'kaboom', 0, false);
            explosionAnimation.anchor.setTo(0.5, 0.5);
            explosionAnimation.animations.add('kaboom');
        }

        this._pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this._pause.scale.setTo(0.2, 0.2);
        this._pause.frame = 1;
        this._pause['clicked'] = false;

        this.game.camera.follow(this._tank);
        this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
        this.game.camera.focusOnXY(0, 0);

    }

    update(): void {
        this.game.physics.arcade.collide(this._tank._tank._body, this._treeBoxes._treeBoxes);

        this._land.tilePosition.x = -this.camera.x;
        this._land.tilePosition.y = -this.camera.y;
        this._tank.update();

        // нажали кнокпу мыши
        if (this.game.input.activePointer.isDown) {
            debugger;
            this.fire();
        }
    }

    fire() {
        debugger;
        if (this.game.time.now > this._tank._nextFire && this._bullets.countDead() > 0) {
            this._tank._nextFire = this.time.now + this._tank._fireRate;

            let bullet = this._bullets.getFirstExists(false);
            bullet.reset(this._tank._turret._turret.x, this._tank._turret._turret.y);
            debugger;
            //bullet.setPosition(this._tank._tank.x, this._tank._tank.y);
            bullet.rotation = this.physics.arcade.moveToPointer(bullet, 1000, this.game.input.activePointer, 500);
        }
    }

    startPause(): void {

    };


    randomInteger(min: number, max: number): number {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
}


