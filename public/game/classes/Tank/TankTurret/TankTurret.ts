export default class TankTurret extends Phaser.Sprite {
    _game: Phaser.Game;
    _turret: Phaser.Sprite;
    _cursor: Phaser.CursorKeys;


    constructor(game: Phaser.Game, cursor: Phaser.CursorKeys) {
        super(game, 0, 0);
        this._game = game;
        this._cursor = cursor;
        this.create();
    }

    create(): void {
        this._turret = this._game.add.sprite(50, 400, 'tank', 'turret');
        this._turret.anchor.setTo(0.5, 0.5);
    }

    update(): void {
        this._turret.rotation = this._game.physics.arcade.angleToPointer(this._turret);

    }

    public set turretCoordinate(coordinate) {
        this._turret.x = coordinate.xCoordinate;
        this._turret.y = coordinate.yCoordinate;
    }

    public set turretAngle(angle: number) {
        this._turret.angle = angle;
    }

    kill() {
        this._turret.kill();
    }
}