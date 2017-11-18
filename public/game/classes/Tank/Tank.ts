import TankBody from './TankBody/TankBody';
import Turret from './TankTurret/TankTurret';


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

        this._cursor = this._game.input.keyboard.createCursorKeys();
        this._tank = new TankBody(this._game, this._cursor);
        this._turret = new Turret(this._game, this._cursor);


    }

    update(): void {
        this._tank.update();
        this._turret.turretCoordinate = this._tank.currentPosition;
        this._turret.update();
    }
}