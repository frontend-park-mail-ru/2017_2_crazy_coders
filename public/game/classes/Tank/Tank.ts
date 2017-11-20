import TankBody from './TankBody/TankBody';
import Turret from './TankTurret/TankTurret';
import Lable from '../Lable/Lable';
const HealthBar = require('../HealthBar/HealthBar');


export default class TankState extends Phaser.Sprite {
    _game: Phaser.Game;
    _tank: TankBody;
    _turret: Turret;
    _health: number;
    _fireRate: number;
    _nextFire: number;
    _xPosition: number;
    _yPosition: number;
    _alive: boolean;
    _cursor: Phaser.CursorKeys;
    _tankLable: Lable;
    _tankName:string;
    _healthBar: any;

    constructor(game: Phaser.Game, index: string) {
        super(game, 0, 0);
        this._game = game;
        this._xPosition = Math.random() * this.game.world.width;
        this._yPosition = Math.random() * this.game.world.height;
        this._health = 3;
        this._fireRate = 1000; // скорострельность
        this._nextFire = 0;  //следующий выстрел
        this._alive = true;
        this._tankName = index;
        this.create();
    }

    create(): void {
        this._cursor = this._game.input.keyboard.createCursorKeys();
        this._tank = new TankBody(this._game, this._cursor);
        this._turret = new Turret(this._game, this._cursor);
        this._tankLable = new Lable(this._game, this._tank.currentPosition, this._tankName, 1);
        this._healthBar = new HealthBar(this._game, {x: this._tank.currentPosition.xCoordinate, y: this._tank.currentPosition.yCoordinate, width: 100, height: 10})
        this._healthBar.setPosition(this._tank.currentPosition.xCoordinate, this._tank.currentPosition.yCoordinate)
    }

    update(): void {
        this._tank.update();
        this._turret.turretCoordinate = this._tank.currentPosition;
        this._turret.update();
        this._tankLable.currentPosition = this._tank.currentPosition;
        this._healthBar.setPosition(this._tank.currentPosition.xCoordinate, this._tank.currentPosition.yCoordinate - 50)
    }
}