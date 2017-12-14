export default class Box extends Phaser.Sprite {
    _game: Phaser.Game;
    _box: Phaser.Sprite;
    _height: number;
    _width: number;
    _xCoordinate: number;
    _yCoordinate: number;
    _name: string;

    constructor(game: Phaser.Game, xCoord: number, yCoord: number) {
        super(game, 0, 0);
        this._game = game;
        this._height = 100;
        this._width = 100;
        this._xCoordinate = xCoord;
        this._yCoordinate = yCoord;
        this.create();
    }

    create(): void {};

    public get currentPosition() {
        return {
            xCoordinate: this._box.x,
            yCoordinate: this._box.y,
        }
    }

    public set currentPosition(coordinate) {
        this._box.x = coordinate.xCoordinate;
        this._box.y = coordinate.yCoordinate;
    }
}