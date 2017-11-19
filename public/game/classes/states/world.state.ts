'use strict';
/** Imports */
import State from './state';
import Tank from '../Tank/Tank';
import TreeBox from '../Box/TreeBox/TreeBox';

const earth       = require('../../../static/staticsGame/images/ground.jpg');
const pause       = require('../../../static/staticsGame/images/pause_button.png');
const box_tree    = require('../../../static/staticsGame/images/box_tree.png');
const tanks       = require('../../../static/staticsGame/images/tanks.png');
const tanksJSON   = require('../../../static/staticsGame/images/tanks.json');


export default class WorldState extends State {
    _music: Phaser.Sound;
    _land: any;
    _tank: Tank;
    _box: TreeBox;
    _pause: Phaser.Button;
    tank: Phaser.Sprite;
    turret: Phaser.Sprite;
    box: Phaser.Sprite;
    _cursor: Phaser.CursorKeys;
    currentSpeed: number;

    create(): void {

        this._music = this.game.add.audio('startAudio', 1, false);
        this._music.play();

        this._land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this._land.fixedToCamera = true;

        // this._tank = new Tank(this.game, "hello");
        // this._box = new TreeBox(this.game, 100, 100);

        this._cursor = this.game.input.keyboard.createCursorKeys();
        debugger;
        this.tank = this.game.add.sprite(50, 400, 'tank', 'tank1');
        this.tank.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enable(this.tank);
        this.tank.body.maxVelocity.setTo(100, 100);
        this.tank.body.collideWorldBounds = true;

        this.turret = this.game.add.sprite(0, 0, 'tank', 'turret');
        this.turret.anchor.setTo(0.5, 0.5);

        this.game.debug.spriteBounds(this.tank);

        this.box = this.game.add.sprite(400, 400, 'box_tree');
        this.box.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enable(this.box);
        this.box.body.immovable = true;


        this._pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this._pause.scale.setTo(0.2, 0.2);
        this._pause.frame = 1;
        this._pause['clicked'] = false;

        this.game.camera.follow(this._tank);
        this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
        this.game.camera.focusOnXY(0, 0);

    }

    update(): void {
        // this.game.physics.arcade.collide(this._tank._tank._body.body, this._box._box.body);
        this.game.physics.arcade.collide(this.tank, this.box);

        // величина угла поворота
        if (this._cursor.left.isDown) {
            this.tank.angle -= 5;
        }
        else if (this._cursor.right.isDown) {
            this.tank.angle += 5;
        }

        // скорость
        if (this._cursor.up.isDown) {
            this.currentSpeed = 210;
        } else {
            if (this.currentSpeed > 0) {
                this.currentSpeed -= 100; // скорость торможения
            }
        }

        // движение и поворотами
        if (this.currentSpeed > 0) {
            this.physics.arcade.velocityFromRotation(this.tank.rotation, this.currentSpeed, this.tank.body.velocity);
        }
        this._land.tilePosition.x = -this.camera.x;
        this._land.tilePosition.y = -this.camera.y;

        // привязываем башню к танку
        this.turret.x = this.tank.x;
        this.turret.y = this.tank.y;

        this.turret.rotation = this.physics.arcade.angleToPointer(this.turret);

        // this._land.tilePosition.x = -this.camera.x;
        // this._land.tilePosition.y = -this.camera.y;
        // this._tank.update();
    }

    collisionHandler(): void {
        console.log("collision");
    }

    startPause(): void {

    };
}


