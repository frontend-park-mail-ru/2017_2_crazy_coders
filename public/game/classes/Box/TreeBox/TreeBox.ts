import Box from '../Box';


export default class TreeBox extends Box {
    _treeBoxes: Phaser.Group;
    _game: Phaser.Game;
    // _box = Phaser.Sprite;

    constructor(game: Phaser.Game) {
        super(game, 0, 0);
        this._game = game;
        this.create();
    }

    create() {
        this._treeBoxes = this._game.add.group();
        this._treeBoxes.enableBody = true;
        this._game.physics.arcade.enable(this._treeBoxes);
        this._treeBoxes.createMultiple(30, 'bullet');
        this._treeBoxes.setAll('anchor.x', 0.5);
        this._treeBoxes.setAll('anchor.y', 0.5);
        this._treeBoxes.setAll('outOfBoundsKill', true);
        this._treeBoxes.setAll('checkWorldBounds', true);
    }

    createBox(xCoord: number, yCoord: number, id: number): void {
        this._box = this._treeBoxes.create(xCoord, yCoord, 'box_tree');
        this._box.anchor.setTo(0.5, 0.5);
        this._box.name = id.toString();
        this._box.body.immovable = true;
    }


}