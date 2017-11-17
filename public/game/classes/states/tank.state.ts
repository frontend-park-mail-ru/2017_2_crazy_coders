'use strict';
/** Imports */
import State from './state';

export default class TankState extends Phaser.Sprite {
  _game: Phaser.Game;
  _tank: Phaser.Sprite;
  _turret: Phaser.Sprite;
  _health: number;
  _fireRate: number;
  _nextFire: number;
  _xPosition: number;
  _yPosition: number;
  _currentSpeed: number;
  _alive: boolean;
  _cursor: Phaser.CursorKeys;

  constructor(game: Phaser.Game, index: string) {
    super(game, 0, 0);
    this._game = game;
    this._xPosition = Math.random() * this.game.world.width;
    this._yPosition = Math.random() * this.game.world.height;
    this._health = 3;
    this._fireRate = 1000; // скорострельность
    this._nextFire = 0;  //следующий выстрел
    this._alive = true;
    this.create();
  }

  create(): void {

    this._tank = this._game.add.sprite(50, 400, 'tank', 'tank1');
    this._tank.anchor.setTo(0.5, 0.5);
    this._game.physics.enable(this._tank, Phaser.Physics.ARCADE);
    this._tank.body.maxVelocity.setTo(100, 100);
    this._tank.body.collideWorldBounds = true;
    this._turret = this._game.add.sprite(50, 400, 'tank', 'turret');
    this._turret.anchor.setTo(0.5, 0.5);

    this._cursor = this._game.input.keyboard.createCursorKeys();

  }

  update(): void {
    // величина угла поворота
    if (this._cursor.left.isDown) {
      this._tank.angle -= 5;
    }
    else if (this._cursor.right.isDown) {
      this._tank.angle += 5;
    }

    // скорость
    if (this._cursor.up.isDown) {
      this._currentSpeed = 210;
    } else {
      if (this._currentSpeed > 0) {
        this._currentSpeed -= 100; // скорость торможения
      }
    }

    // движение и поворотами
    if (this._currentSpeed > 0) {
      this._game.physics.arcade.velocityFromRotation(this._tank.rotation, this._currentSpeed, this._tank.body.velocity);
    }

    // привязываем башню к танку
    this._turret.x = this._tank.x;
    this._turret.y = this._tank.y;

    this._turret.rotation = this._game.physics.arcade.angleToPointer(this._turret);
  }
}
