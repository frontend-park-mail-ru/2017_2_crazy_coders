// import Phaser from '../../phaser.min';
import EnemyTank from '../Tank/EnemyTank';
import Constants from '../Constants/Constant';
import ControllSettings from "../../../modules/ControllSettings";


class World extends Phaser.State {

	constructor() {
		super();
		this.background = Phaser.Sprite;
		this.music = Phaser.Sound;
	}

	preload() {
		this.load.atlas('tank', 'static/staticsGame/images/tanks.png', 'static/staticsGame/images/tanks.json');
		this.load.atlas('enemy', 'static/staticsGame/images/enemy-tanks.png', 'static/staticsGame/images/tanks.json');
		this.load.image('logo', 'static/staticsGame/images/logo.png');
		this.load.image('bullet', 'static/staticsGame/images/bullet.png');
		this.load.image('earth', 'static/staticsGame/images/ground.jpg');
		this.load.spritesheet('kaboom', 'static/staticsGame/images/explosion.png', 64, 64, 23);

		this.load.image('pause', 'static/img/home.png');
		this.load.image('box_tree', 'static/staticsGame/images/box_tree.png');
	}


	create() {
		this.music = this.add.audio('music', 1, false);
		this.music.play();

		this.land = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'earth');
		this.land.fixedToCamera = true;

		this.currentSpeed = 0;
		this.nextFire = 0;  //следующий выстрел
		this.health = 100;

		this.tank = this.add.sprite(50, 400, 'tank', 'tank1');
		this.tank.anchor.setTo(Constants.anchor, Constants.anchor);

		// this.physics.enable(this.tank, Phaser.Physics.Arcade);
        this.physics.arcade.enable(this.tank);
		this.tank.body.maxVelocity.setTo(Constants.max_velocity, Constants.max_velocity);
		this.tank.body.collideWorldBounds = true;

		this.turret = this.add.sprite(0, 0, 'tank', 'turret');
		this.turret.anchor.setTo(Constants.anchor, Constants.anchor);


		//  пули врагов
		this.enemyBullets = this.add.group();
		this.enemyBullets.enableBody = true;
		// this.enemyBullets.physicsBodyType = Phaser.Physics.Arcade; //Phaser.Physics.ARCADE;
        this.physics.arcade.enable(this.enemyBullets);
        this.enemyBullets.createMultiple(5, 'bullet'); // создадим пули

		this.enemyBullets.setAll('anchor.x', 0.5);
		this.enemyBullets.setAll('anchor.y', 0.5);
		this.enemyBullets.setAll('outOfBoundsKill', true); // ??
		this.enemyBullets.setAll('checkWorldBounds', true); // ??

		//  создаём ботов
		this.enemies = [];

		this.enemiesTotal = 8; // всего
		this.enemiesAlive = 8; // живых
		this.fireRate = 100; // скорострельность

		for (let i = 0; i < this.enemiesTotal; i++) {
			this.enemies.push(new EnemyTank(i, this, this.tank, this.enemyBullets));
		}

		//  тень под танками
		this.shadow = this.add.sprite(0, 0, 'tank', 'shadow');
		this.shadow.anchor.setTo(Constants.anchor, Constants.anchor);

		//  наша группа снарядов
		this.bullets = this.add.group();
		this.bullets.enableBody = true;
		// this.bullets.physicsBodyType = Phaser.Physics.Arcade;
        this.physics.arcade.enable(this.bullets);
        this.bullets.createMultiple(30, 'bullet');
		this.bullets.setAll('anchor.x', 0.5);
		this.bullets.setAll('anchor.y', 0.5);
		this.bullets.setAll('outOfBoundsKill', true);
		this.bullets.setAll('checkWorldBounds', true);

		//  взрыв
		this.explosions = this.add.group();

		for (let i = 0; i < 10; i++) {
			let explosionAnimation = this.explosions.create(0, 0, 'kaboom', [0], false);
			explosionAnimation.anchor.setTo(Constants.anchor, Constants.anchor);
			explosionAnimation.animations.add('kaboom');
		}


		this.pauseButton = this.game.add.button(10, 10, "pause", this.startPause, this);
		this.pauseButton.scale.setTo(Constants.button_scale, Constants.button_scale);
		this.pauseButton.frame = 1;
		this.pauseButton.clicked = false;


		this.gameTime = 45;
		if (!this.timer) {
			this.timePause = 0;
			this.isPaused = false;
			this.total = 0;
			this.timer = this.game.time.create(false);
			this.timer.loop(1000, this.updateCounter, this);
			this.timer.start();
		}
		else {
			this.total = this.timePause;
			this.timer = this.game.time.create(false);
			this.timer.loop(1000, this.updateCounter, this);
			this.timer.start();
		}


		this.tank.bringToTop();
		this.turret.bringToTop();

		this.camera.follow(this.tank);
		this.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
		this.camera.focusOnXY(0, 0);

		this.cursors = this.input.keyboard.createCursorKeys();
        this._controlSettings = new ControllSettings();
        this._dPhi = 0.07;
	}

	update() {
		//убираем перекрытие объектов
		this.physics.arcade.overlap(this.enemyBullets, this.tank, this.bulletHitPlayer, null, this);
		// враги живые
		this.enemiesAlive = 0;

		for (let i = 0; i < this.enemies.length; i++) {
			if (this.enemies[i].alive) { // если жив
				this.enemiesAlive++;
				// проверяем колизии между нашим танком и другими танками
				this.physics.arcade.collide(this.tank, this.enemies[i].tank);
				// уничтожаем пулю в случае столкновения
				this.physics.arcade.overlap(this.bullets, this.enemies[i].tank, this.bulletHitEnemy, null, this);
				this.enemies[i].update();
			}
		}


        if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
            this.tank.angle -= 5;
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
            this.tank.angle += 5;
        }

        // скорость
        if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
            this.currentSpeed = 251;
        } else {
            if (this.currentSpeed > 0) {
                this.currentSpeed -= 25; // скорость торможения
            }
        }

        if (this._controlSettings.mouseControll === true) {
            this.turret.rotation = this.physics.arcade.angleToPointer(this.turret);
        } else {

            let angle = this.turret.rotation;

            if (this.cursors.left.isDown) {

                let newAngle = angle - this._dPhi;

                if (newAngle < -180) {
                    let delta = -180 - newAngle;
                    this.turret.rotation = 180 - delta;
                } else {
                    this.turret.rotation = newAngle;
                }

            } else if (this.cursors.right.isDown) {

                let newAngle = angle + this._dPhi;

                if (newAngle >= 180) {
                    let delta = newAngle - 180;
                    this.turret.rotation = -180 + delta;
                } else {
                    this.turret.rotation = newAngle
                }
            }
        }

        if (this._controlSettings.mouseControll) {
            if (this.input.activePointer.isDown) {
                this.fire();
            }
        } else {
            if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.fire();
            }
        }


        if (this.currentSpeed > 0) {
            this.physics.arcade.velocityFromRotation(this.tank.rotation, this.currentSpeed, this.tank.body.velocity);
        }


		this.land.tilePosition.x = -this.camera.x;
		this.land.tilePosition.y = -this.camera.y;

		//  привязываем тень к танку
		this.shadow.x = this.tank.x;
		this.shadow.y = this.tank.y;
		this.shadow.rotation = this.tank.rotation;

		// привязываем башню к танку
		this.turret.x = this.tank.x;
		this.turret.y = this.tank.y;


		if (this.gameTime - this.total < 0 || this.health <= 0 || this.enemiesAlive === 0) {
			this.score = (this.gameTime - this.total) * 50 + (this.enemiesTotal - this.enemiesAlive) * 50;

			if (this.health <= 0) {
				this.score = 0;
			}
			console.log(`score: ${this.score}`);
            this.total = 0;
            this.timePause = 0;

			this.game.state.start('GameOverMenu', true, false);
		}
	}

	bulletHitEnemy(tank, bullet) {
		bullet.kill();
		let destroyed = this.enemies[tank.name].damage();

		if (destroyed) {
			let explosionAnimation = this.explosions.getFirstExists(false);
			explosionAnimation.reset(tank.x, tank.y);
			explosionAnimation.play('kaboom', 30, false, true);
		}
	}

	fire() {
		if (this.time.now > this.nextFire && this.bullets.countDead() > 0) {
			this.nextFire = this.time.now + this.fireRate;

            let bullet = this.bullets.getFirstExists(false);
            bullet.reset(this.turret.x, this.turret.y);

			if (this._controlSettings.mouseControll) {
                bullet.rotation = this.physics.arcade.moveToPointer(bullet, 1000, this.input.activePointer);
            } else {
                let degToRad = function(deg) { return deg / 180 * Math.PI; };
                let directX = this.turret.x - 1000*Math.cos(degToRad(180 - this.turret.angle));
                let directY = this.turret.y + 1000*Math.sin(degToRad(this.turret.angle));

                bullet.rotation = this.physics.arcade.moveToXY(bullet, directX, directY,3500);
            }
		}
	}

	bulletHitPlayer(tank, bullet) {
		bullet.kill();
		this.health -= 5;
	}

	updateCounter() {
		this.total++;
		this.game.debug.text(this.formatTime(Math.round(this.gameTime - this.total)), this.world.centerX, 14, "#ff0");
		this.game.debug.text('Hp: ' + this.health + '     Count opponents:' + this.enemiesAlive, 84, 42, "#ff0");
	}

	formatTime(s) {
		let minutes = "0" + Math.floor(s / 60);
		let seconds = "0" + (s - minutes * 60);
		return minutes.substr(-2) + ":" + seconds.substr(-2);
	}

	startPause(button) {
		if (!button.clicked) {
			button.clicked = true;
		}
		this.timePause = this.total;
		this.game.state.start('PauseMenu', true, false);
	}

}

export default World;