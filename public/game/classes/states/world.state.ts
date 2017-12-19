'use strict';
/** Imports */
import State from './state';
import Tank from '../Tank/Tank';
import TreeBox from '../Box/TreeBox/TreeBox';
import Client from '../Client/Client';
import Snap from '../Snap/Snap';
import SpawnRequest from '../Snap/SpawnRequest';
import TankBullets from '../Bullet/TankBullet/TankBullet';
import EnemyBullets from '../Bullet/EnemyBullet/EnemyBullet';
import Enemies from '../Tank/EnemyTanks';
import TankLandings from '../TankLanding/TankLanding';
import StaticList from '../StaticList/StaticList';


const earth       = require('../../../static/staticsGame/images/ground.jpg');
const pause       = require('../../../static/staticsGame/images/pause_button.png');
const box_tree    = require('../../../static/staticsGame/images/box_tree.png');
const tanks       = require('../../../static/staticsGame/images/tanks.png');
const tankLandingArea = require('../../../static/staticsGame/images/HelicopterLandingArea.png');
import ControllSettings from '../../../modules/ControllSettings.js';

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
    isSendSpawnRequest: boolean;
    tankLandings: TankLandings;
    statistics: StaticList;
    _controlSettings: ControllSettings;

    create(): void {

        this.game.world.setBounds(0, 0, 1920, 1080);

        this.isSendSpawnRequest = false;
        this.load.image('bullet', 'static/staticsGame/images/bullet.png');
        this.load.spritesheet('kaboom', 'static/staticsGame/images/explosion.png', 64, 64, 23);

        this.music = this.game.add.audio('startAudio', 1, false);
        this.music.play();

        this.land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this.land.fixedToCamera = true;

        // create landing group
        this.tankLandings = new TankLandings(this.game);

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

            if (message.class === "StatisticsSnap") {
                console.log(`statistics snap is comming`);
                this.onServerStatisticsSnap(message);
            }

            if (message.class === "SpawnSnap" ) {
                this.isSendSpawnRequest = false;
                this.onServerSpawnArrived(message);
            }
        });

        // declaration bullets for out tamk and enemy tank
        this.tankBullets = new TankBullets(this.game);
        this.enemyBullets = new EnemyBullets(this.game);

        this.pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this.pause.scale.setTo(0.2, 0.2);
        this.pause.frame = 1;
        this.pause['clicked'] = false;

        this.statistics = new StaticList(this.game, this.game.user.id);

        this._controlSettings = new ControllSettings();
        this.game.camera.follow(this.tank._tank._body);
        // this.game.camera.deadzone = new Phaser.Rectangle(15, 15, 50, 30);
        // this.game.camera.focusOnXY(0, 0);

    }

    update(): void {
        // this.game.camera.focusOnXY(this.tank._tank.currentPosition.xCoordinate, this.tank._tank.currentPosition.yCoordinate);
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

        // fire then click right mouse button or space
        if (this._controlSettings.mouseControll) {
            if (this.game.input.activePointer.isDown) {
                this.fire();
            }
        } else {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.fire();
            }
        }

        if(this.client.socket.readyState !== 0) { // websocket connecting, message can't be sending

            if (this.tank.isKilled === true && this.isSendSpawnRequest == false) {
                this.isSendSpawnRequest = true;
                this.client.message.sendClientSnap(
                    (new SpawnRequest(this.game.user.id, this.game.user.username)).spawnSnap);

            } else if (this.isSendSpawnRequest == false) {

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
        }


        this.game.physics.arcade.overlap(this.tankBullets.tankBullets, this.treeBoxes._treeBoxes, this.tankBullets.bulletHitBox.bind(this.tankBullets), null, this);
        this.game.physics.arcade.overlap(this.enemyBullets.enemyBullets, this.treeBoxes._treeBoxes, this.enemyBullets.bulletHitBox.bind(this.enemyBullets), null, this);

        for (let  i = 0; i < this.enemies.enemyTanks.children.length; i++) {
            this.game.physics.arcade.overlap(this.tankBullets.tankBullets, this.enemies.enemyTanks.children[i]._tank._body, this.tankBullets.bulletHitEnemy.bind(this.tankBullets), null, this);
        }


        if (this.tank._tank._body) {
            this.game.physics.arcade.overlap(this.enemyBullets.enemyBullets, this.tank._tank._body, this.enemyBullets.bulletHitTank.bind(this.enemyBullets), null, this);
        }

        // this.statistics.updatePosition(this.tank._tank.currentPosition.xCoordinate, this.tank._tank.currentPosition.yCoordinate);
        this.tank.isShoot = false;
    }

    fire() {

        if (this.game.time.now > this.tank._nextFire && this.tankBullets.tankBullets.countDead() > 0) {
            this.tank._nextFire = this.time.now + this.tank._fireRate;

            let bullet = this.tankBullets.tankBullets.getFirstExists(false);
            bullet.reset(this.tank._turret._turret.x, this.tank._turret._turret.y);

            if (this._controlSettings.mouseControll) {
                bullet.rotation = this.physics.arcade.moveToPointer(bullet, 3500, this.game.input.activePointer);
            } else {
                let degToRad = function(deg) { return deg / 180 * Math.PI; };
                let directX = this.tank._tank.currentPosition.xCoordinate - 1000*Math.cos(degToRad(180 - this.tank._turret._turret.angle));
                let directY = this.tank._tank.currentPosition.yCoordinate + 1000*Math.sin(degToRad(this.tank._turret._turret.angle));

                bullet.rotation = this.physics.arcade.moveToXY(bullet, directX, directY,3500);
            }

            this.tank.isShoot = true;
        }
    }

    startPause(): void {

    };

    onServerStatisticsSnap(message) {
        if(message.leaders) {
            this.statistics.updateList(message.leaders);
        }
    }

    onServerSpawnArrived(message) {
        this.tank = new Tank(this.game, this.game.user.id, this.game.user.username);
        let position = message.position;
        this.tank._tank.currentPosition = {
            xCoordinate: position.valX,
            yCoordinate: position.valY
        };

        this.game.camera.follow(this.tank._tank._body);
        this.tank.isShoot = false;

    }

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

        for (let i = 0; i < tanksLandingPositions.length; i++) {
            this.tankLandings.createLanding(tanksLandingPositions[i].valX, tanksLandingPositions[i].valY, i);
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

        let removingEnemyFromArray = [];


        for(let i = 0; i < enemiesOnClient.length; i++) {
            let enemyOnClient = enemiesOnClient[i];
            if(!~playersOnServer.indexOf(enemyOnClient._uid)){
                console.log(`try remove from group`);
                this.enemies.enemyTanks.remove(enemyOnClient, true);
                console.log(`try kill enemyClient`);
                enemyOnClient.kill();
                removingEnemyFromArray.push(enemyOnClient._uid)
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
                        // because on backend we remove current userId from available players on server
                        // on it case above in checking not available players current userId is pushing into 'removingEnemyFromArray'
                        // so taking action here does not make sense
                        continue;
                    }

                    if (tankSnapshot.isShoot) {
                        let directX = null;
                        let directY = null;

                        let degToRad = function(deg) { return deg / 180 * Math.PI; };

                        directX = tankSnapshot.platform.valX - 1000*Math.cos(degToRad(180 - tankSnapshot.turretAngle));
                        directY = tankSnapshot.platform.valY + 1000*Math.sin(degToRad(tankSnapshot.turretAngle));

                        let bullet = this.enemyBullets.enemyBullets.getFirstExists(false);
                        bullet.reset(tankSnapshot.platform.valX, tankSnapshot.platform.valY);
                        bullet.rotation = this.physics.arcade.moveToXY(bullet, directX, directY,3500);
                    }

                    enemyOnClient.tankBody.currentPosition = {
                        xCoordinate: tankSnapshot.platform.valX,
                        yCoordinate: tankSnapshot.platform.valY
                    };

                    enemyOnClient.tankBody.currentPlatformAngle = tankSnapshot.platformAngle;
                    enemyOnClient._turret.turretAngle = tankSnapshot.turretAngle;
                }
            }
        }


        for (let k = 0; k < removingEnemyFromArray.length; k++) {

            let enemyId = removingEnemyFromArray[k];
            console.log('try remove from enemyArray enemyId' + enemyId.toString())
            let enemyIdx = this.enemyArray.indexOf(enemyId);
            console.log('try remove from enemyArray by idx = ' + enemyIdx.toString())
            if (enemyIdx > -1) {
                this.enemyArray.splice(enemyIdx, 1);
            }
        }
    }
}


