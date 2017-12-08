'use strict';
/** Imports */
import State from './state';
import Tank from '../Tank/Tank';
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
const tankLandingArea = require('../../../static/staticsGame/images/HelicopterLandingArea.png');

export default class WorldState extends State {
    music: Phaser.Sound;
    land: any;
    tank: Tank;
    enemy: Tank;
    treeBoxes: TreeBox;
    pause: Phaser.Button;
    enemies: Enemies;
    tankBullets: TankBullets;
    enemyBullets: EnemyBullets;
    enemyArray: number[];
    client: any;

    create(): void {
        this.load.image('bullet', 'static/staticsGame/images/bullet.png');
        this.load.spritesheet('kaboom', 'static/staticsGame/images/explosion.png', 64, 64, 23);

        this.music = this.game.add.audio('startAudio', 1, false);
        this.music.play();

        this.land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this.land.fixedToCamera = true;

        // create box map
        this.treeBoxes = new TreeBox(this.game);

        // create a new group of enemies;
        this.enemies = new Enemies(this.game);

        // create our tank with own username
        this.tank = new Tank(this.game, this.game.user.id, this.game.user.username);
        this.enemyArray = [];
        this.client = new Client();
        this.client.socket.onmessage = ( (event) => {
            let message = JSON.parse(event.data);

            if (message.class === "ServerSnap") {
                this.onServerSnapArrived(message);
            }

            if (message.class === "WorldSnap") {
                this.onServerWorldArrived(message);
            }

        });

        // declaration bullets for out tamk and enemy tank
        this.tankBullets = new TankBullets(this.game);
        this.enemyBullets = new EnemyBullets(this.game);

        this.pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this.pause.scale.setTo(0.2, 0.2);
        this.pause.frame = 1;
        this.pause['clicked'] = false;

        this.game.camera.follow(this.tank);
        this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
        this.game.camera.focusOnXY(0, 0);

    }

    update(): void {
        this.game.physics.arcade.collide(this.tank._tank._body, this.treeBoxes._treeBoxes);

        let enemies = this.enemies.enemyTanks.children;
        for (let i = 0; i < enemies.length; i++) {
            this.game.physics.arcade.collide(this.tank._tank._body, enemies[i]._tank._body);
        }

        if(this.enemy) {
            this.game.physics.arcade.collide(this.enemy._tank._body, this.treeBoxes._treeBoxes);
            this.enemy.update();
        }

        this.land.tilePosition.x = -this.camera.x;
        this.land.tilePosition.y = -this.camera.y;
        this.tank.update();

        // click mouse button
        if (this.game.input.activePointer.isDown) {
            this.fire();
        }

        if(this.client.socket.readyState !== 0) { // websocket connecting, message can't be sending
            this.client.message.sendClientSnap(
                (new Snap(this.game.user.id,
                    this.game.user.username,
                    this.tank._tank.currentPosition.xCoordinate,
                    this.tank._tank.currentPosition.yCoordinate,
                    this.tank._tank._body.angle,
                    this.tank._turret._turret.angle,
                    this.tank.isShoot,
                    this.tank.health)).playerSnap);
        }

        this.game.physics.arcade.overlap(this.tankBullets.tankBullets, this.treeBoxes._treeBoxes, this.tankBullets.bulletHitBox.bind(this.tankBullets), null, this);
        this.game.physics.arcade.overlap(this.enemyBullets.enemyBullets, this.treeBoxes._treeBoxes, this.enemyBullets.bulletHitBox.bind(this.enemyBullets), null, this);

        this.tank.isShoot = false;
    }

    fire() {

        if (this.game.time.now > this.tank._nextFire && this.tankBullets.tankBullets.countDead() > 0) {
            this.tank._nextFire = this.time.now + this.tank._fireRate;

            let bullet = this.tankBullets.tankBullets.getFirstExists(false);
            bullet.reset(this.tank._turret._turret.x, this.tank._turret._turret.y);
            bullet.rotation = this.physics.arcade.moveToPointer(bullet, 5000, this.game.input.activePointer, 50);

            this.tank.isShoot = true;
        }
    }

    startPause(): void {

    };

    onServerWorldArrived(message) {

        let boxes = message.boxes;
        let tanksLandingPositions = message.spawnPoints;
        let tankPosition = message.startTankPosition;
        this.tank._tank.currentPosition = {
            xCoordinate: tankPosition.valX,
            yCoordinate: tankPosition.valY
        };

        for (let i = 0; i < boxes.length; i++) {
            this.treeBoxes.createBox(boxes[i].position.valX, boxes[i].position.valY, i);
        }
        debugger;
        for (let i = 0; i < tanksLandingPositions.length; i++) {
            let landingPosition = this.game.add.sprite(tanksLandingPositions[i].valX, tanksLandingPositions[i].valY, 'tankLandingArea', 'tankLandingArea');
        }


    }

    onServerSnapArrived(message){
        let enemiesOnClient = this.enemies.enemyTanks.children;
        let playersOnServer = message.players;
        let tanksSnapshots = message.tanks;

        for(let j = 0; j < tanksSnapshots.length; j++) {
            let tankSnapshot = tanksSnapshots[j];

            if (tankSnapshot.userId === this.game.user.id) {

                if (this.tank.health !== tankSnapshot.health) {
                    this.tank.health = tankSnapshot.health;
                    this.tank._healthBar.setPercent(tankSnapshot.health);
                }

                if(tankSnapshot.health <= 0) {
                    this.tank.kill();
                }
            }

            if (tankSnapshot.userId !== this.game.user.id && !~this.enemyArray.indexOf(tankSnapshot.userId)) {
                // console.log(`try create new enemy`);
                this.enemyArray.push(tankSnapshot.userId);
                let platform = tankSnapshot.platform;
                this.enemies.createEnemyTank(platform.valX, platform.valY, tankSnapshot.userId, tankSnapshot.username);
            }
        }

        for(let i = 0; i < enemiesOnClient.length; i++) {
            let enemyOnClient = enemiesOnClient[i];
            if(!~playersOnServer.indexOf(enemyOnClient._uid)){
                console.log(`try remove enemy`);
                this.enemyArray.splice(i, 1);
                console.log(`try remove from group`);
                this.enemies.enemyTanks.remove(enemyOnClient, true);
                console.log(`try kill enemyClient`);
                enemyOnClient.kill();
                console.log(`kill success`);
                continue;
            }

            for(let j = 0; j < tanksSnapshots.length; j++) {
                let tankSnapshot = tanksSnapshots[j];

                if(enemyOnClient._uid === tankSnapshot.userId) {

                    if (enemyOnClient.health !== tankSnapshot.health) {
                        enemyOnClient.health = tankSnapshot.health;
                        enemyOnClient._healthBar.setPercent(tankSnapshot.health);
                    }

                    if (tankSnapshot.health <= 0) {
                        enemyOnClient.kill();
                    }

                    if (tankSnapshot.isShoot) {
                        let directX = null;
                        let directY = null;

                        let degToRad = function(deg) { return deg / 180 * Math.PI; };

                        directX = tankSnapshot.platform.valX - 1000*Math.cos(degToRad(180 - tankSnapshot.turretAngle));
                        directY = tankSnapshot.platform.valY + 1000*Math.sin(degToRad(tankSnapshot.turretAngle));

                        let bullet = this.enemyBullets.enemyBullets.getFirstExists(false);
                        bullet.reset(tankSnapshot.platform.valX, tankSnapshot.platform.valY);
                        bullet.rotation = this.physics.arcade.moveToXY(bullet, directX, directY,1000, 500);
                    }

                    debugger;

                    enemyOnClient.tankBody.currentPosition = {
                        xCoordinate: tankSnapshot.platform.valX,
                        yCoordinate: tankSnapshot.platform.valY
                    };

                    enemyOnClient.tankBody.currentPlatformAngle = tankSnapshot.platformAngle;
                    enemyOnClient._turret.turretAngle = tankSnapshot.turretAngle;
                }
            }
        }
    }
}


