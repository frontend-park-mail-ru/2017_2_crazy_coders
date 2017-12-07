export default class TankBody extends Phaser.Sprite {
    _game: Phaser.Game;
    _body: Phaser.Sprite;
    _currentSpeed: number;
    _cursor: Phaser.CursorKeys;

    constructor(game: Phaser.Game, cursor: Phaser.CursorKeys) {
        super(game, 0, 0);
        this._game = game;
        this._cursor = cursor;
        this.create();
    }

    create(): void {
        this._body = this._game.add.sprite(50, 400, 'tank', 'tank1');
        console.log(`body height = ${this._body.height} body width = ${this._body.width}`);
        this._body.anchor.setTo(0.5, 0.5);
        this._game.physics.arcade.enable(this._body);
        this._body.body.maxVelocity.setTo(100, 100);
        this._body.body.collideWorldBounds = true;
    }

    update(): void {
        // величина угла поворота
        if (this._cursor.left.isDown) {
            this._body.angle -= 5;
        }
        else if (this._cursor.right.isDown) {
            this._body.angle += 5;
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
            this._game.physics.arcade.velocityFromRotation(this._body.rotation, this._currentSpeed, this._body.body.velocity);
        }

    }

    public get currentPosition() {
        return {
            xCoordinate: this._body.x,
            yCoordinate: this._body.y,
        }
    }

    public set currentPosition(coordinate) {
        this._body.x = coordinate.xCoordinate;
        this._body.y = coordinate.yCoordinate;
    }

    public setPlatformAngle(angle: number) {
        this._body.angle = angle;
    }

    kill() {
        this._body.kill();
    }


}