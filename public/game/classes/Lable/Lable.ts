export default class Lable {
    _game: Phaser.Game;
    _text: Phaser.Text;
    _scale: number;
    _textStyle: any;

    constructor(game: Phaser.Game, coordinate: any, content: string, scale: number) {
        this._game = game;
        this._textStyle = { font: "bold 32px Arial", fill: "#120dff", boundsAlignH: "center", boundsAlignV: "middle" };
        this._text =  this._game.add.text(coordinate.xCoordinate, coordinate.yCoordinate, content, this._textStyle);
        this._text.stroke = '#000000';
        this._text.strokeThickness = 1;
        this._text.anchor.set(0.5);
        this._scale = scale;
    }

    public set currentPosition(coordinate) {
        this._text.x = coordinate.xCoordinate;
        this._text.y = coordinate.yCoordinate - 70;
    }

    kill() {
        this._text.kill();
    }
}