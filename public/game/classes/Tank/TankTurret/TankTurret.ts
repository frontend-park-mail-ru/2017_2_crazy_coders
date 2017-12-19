import ControllSettings from '../../../../modules/ControllSettings.js';


export default class TankTurret extends Phaser.Sprite {
    _game: Phaser.Game;
    _turret: Phaser.Sprite;
    _cursor: Phaser.CursorKeys;
    _controlSettings: ControllSettings;
    _dPhi: number;

    constructor(game: Phaser.Game, cursor: Phaser.CursorKeys) {
        super(game, 0, 0);
        this._game = game;
        this._cursor = cursor;
        this._controlSettings = new ControllSettings();

        this._dPhi = 0.07;

        this.create();
    }

    create(): void {
        this._turret = this._game.add.sprite(50, 400, 'tank', 'turret');
        this._turret.anchor.setTo(0.5, 0.5);
    }

    update(): void {
        if (this._controlSettings.mouseControll === true) {
            this._turret.rotation = this._game.physics.arcade.angleToPointer(this._turret);
        } else {

            let angle = this._turret.rotation;

            if (this._cursor.left.isDown) {

                let newAngle = angle - this._dPhi;

                if (newAngle < -180) {
                    let delta = -180 - newAngle;
                    this._turret.rotation = 180 - delta;
                } else {
                    this._turret.rotation = newAngle;
                }

            } else if (this._cursor.right.isDown) {

                let newAngle = angle + this._dPhi;

                if (newAngle >= 180) {
                    let delta = newAngle - 180;
                    this._turret.rotation = -180 + delta;
                } else {
                    this._turret.rotation = newAngle
                }
            }
        }
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