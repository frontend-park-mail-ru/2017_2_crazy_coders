import Box from '../Box';


export default class TreeBox extends Box {
    _treeBoxes: Phaser.Group;
    _game: Phaser.Game;
    _xCoordinate: number;
    _yCoordinate: number;

    constructor(game: Phaser.Game) {
        super(game, 0, 0);
        this._game = game;
        // this._xCoordinate = xCoord;
        // this._yCoordinate = yCoord;
        this.create();
    }

    create() {
        // this._box = this._game.add.sprite(this._xCoordinate, this._yCoordinate, 'box_tree');
        // this._box.anchor.setTo(0.5, 0.5);
        // this._game.physics.arcade.enable(this._box);
        // this._box.body.immovable = true;
        // this._box.body.bounce.setTo(1, 1);
        this._treeBoxes = this._game.add.group();
        this._treeBoxes.enableBody = true;
        this._game.physics.arcade.enable(this._treeBoxes);
        this._treeBoxes.immovable = true;
    }

    createBox(xCoord: number, yCoord: number): void {
        this._treeBoxes = this._game.add.sprite(xCoord, yCoord, 'box_tree');
    }
}