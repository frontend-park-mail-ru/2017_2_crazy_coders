'use strict';
/** Imports */
import State from './state';
import Tank from '../Tank/Tank';
import EnemyTank from '../Tank/EnemyTank';
import TreeBox from '../Box/TreeBox/TreeBox';
import Client from '../Client/Client';
import Snap from '../Snap/Snap';
import TankBullets from '../Bullet/TankBullet/TankBullet';
import EnemyBullets from '../Bullet/EnemyBullet/EnemyBullet';
import Enemies from '../Tank/EnemyTanks';


const earth       = require('../../../static/staticsGame/images/ground.jpg');
const pause       = require('../../../static/staticsGame/images/pause_button.png');
const box_tree    = require('../../../static/staticsGame/images/box_tree.png');
const tanks       = require('../../../static/staticsGame/images/tanks.png');


export default class WorldState extends State {
    _music: Phaser.Sound;
    _land: any;
    _tank: Tank;
    _enemy: Tank;
    _treeBoxes: TreeBox;
    _pause: Phaser.Button;
    enemies: Enemies;
    tankBullets: TankBullets;
    enemyBullets: EnemyBullets;
    enemyArray: number[];

    _client: any;
    _clientId: number;

    create(): void {
        this.load.image('bullet', 'static/staticsGame/images/bullet.png');
        this.load.spritesheet('kaboom', 'static/staticsGame/images/explosion.png', 64, 64, 23);

        this._music = this.game.add.audio('startAudio', 1, false);
        this._music.play();

        this._land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this._land.fixedToCamera = true;

        // create a new group of enemies;
        this.enemies = new Enemies(this.game);
        // create our tank whith name "Tiger"
        this._tank = new Tank(this.game, "Tiger");
        this.enemyArray = [];
        this._client = new Client();
        this._client.socket.onmessage = ( (event) => {
            let message = JSON.parse(event.data);

            if (message.class === "ServerSnap") {
                this.onServerSnapArrived(message);
            }

        });

        this._treeBoxes = new TreeBox(this.game);

        for (let i = 0; i < 10; i++) {
            let coord = this.randomInteger(0, 500);
            this._treeBoxes.createBox(coord, coord, i);
        }

        // declaration bullets for out tamk and enemy tank
        this.tankBullets = new TankBullets(this.game);
        this.enemyBullets = new EnemyBullets(this.game);

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
        if(this._enemy) {
            this.game.physics.arcade.collide(this._enemy._tank._body, this._treeBoxes._treeBoxes);
            this._enemy.update();
        }

        this._land.tilePosition.x = -this.camera.x;
        this._land.tilePosition.y = -this.camera.y;
        this._tank.update();

        this._client.message.sendClientSnap(
            (new Snap(this.game.user.id,
                      this._tank._tank.currentPosition.xCoordinate,
                      this._tank._tank.currentPosition.yCoordinate,
                      this._tank._tank._body.angle,
                      this._tank._turret._turret.angle)).playerSnap);


        this.game.physics.arcade.overlap(this.tankBullets.tankBullets, this._treeBoxes._treeBoxes, this.tankBullets.bulletHitBox.bind(this.tankBullets), null, this);
        this.game.physics.arcade.overlap(this.enemyBullets.enemyBullets, this._treeBoxes._treeBoxes, this.enemyBullets.bulletHitBox.bind(this.enemyBullets), null, this);

        // click mouse button
        if (this.game.input.activePointer.isDown) {
            this.fire();
        }
    }

    fire() {
        if (this.game.time.now > this._tank._nextFire && this.tankBullets.tankBullets.countDead() > 0) {
            this._tank._nextFire = this.time.now + this._tank._fireRate;

            let bullet = this.tankBullets.tankBullets.getFirstExists(false);
            bullet.reset(this._tank._turret._turret.x, this._tank._turret._turret.y);
            bullet.rotation = this.physics.arcade.moveToPointer(bullet, 1000, this.game.input.activePointer, 500);
        }
    }

    startPause(): void {

    };

    onServerSnapArrived(message){
        debugger;
        for(let i = 0; i < message.tanks.length; i++) {
            let tank = message.tanks[i];
            debugger;
            if(tank.userId !== this.game.user.id) {
                // if new user in the game
                if(!~this.enemyArray.indexOf(tank.userId)) {
                    console.log(`the user with id = ${tank.userId} is new`);
                    this.enemyArray.push(tank.userId);
                    this.enemies.createEnemyTank(tank.platform.valX, tank.platform.valY, tank.userId);
                } else {
                    debugger;
                    let childrens = this.enemies.enemyTanks.children;
                    let tankName = tank.userId.toString();
                    for(let i = 0; i < childrens.length; i++) {
                        if(childrens[i].name === tankName) {
                            childrens[i]._tank.currentPosition = {
                                        xCoordinate: tank.platform.valX,
                                        yCoordinate: tank.platform.valY
                                    };
                            childrens[i]._tank.setPlatformAngle = tank.platformAngle;
                            childrens[i]._turret.turretAngle = tank.turretAngle;
                        }
                    }

                    console.log(`get enemy coordinates: userId = ${tank.userId}, xCoord = ${tank.platform.valX}, yCoord = ${tank.platform.valY}`);
                }

            }
            else {
                console.log(`you id = ${tank.userId}`);
            }
        }
    }

    randomInteger(min: number, max: number): number {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
}


