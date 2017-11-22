import Box from '../Box';


export default class TreeBox extends Box {
    _treeBoxes: Phaser.Group;
    _game: Phaser.Game;
    _box = Phaser.Sprite;

    constructor(game: Phaser.Game) {
        super(game, 0, 0);
        this._game = game;
        this.create();
    }

    create() {
        this._treeBoxes = this._game.add.group();
        this._treeBoxes.enableBody = true;
        this._game.physics.arcade.enable(this._treeBoxes);
    }

    createBox(xCoord: number, yCoord: number, id: number): void {
        this._box = this._treeBoxes.create(xCoord, yCoord, 'box_tree');
        this._box.name = id;
        this._box.body.immovable = true;
    }
}