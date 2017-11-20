import Box from '../Box';


export default class TreeBox extends Box {

    constructor(game: Phaser.Game, xCoord: number, yCoord: number) {
        super(game, xCoord, yCoord);
        this.create();
    }

    create() {
        this._box = this._game.add.sprite(this._xCoordinate, this._yCoordinate, 'box_tree');
        this._box.anchor.setTo(0.5, 0.5);

        this._game.physics.arcade.enable(this._box);
        this._box.body.immovable = true;
        this._box.body.bounce.setTo(1, 1);
    }
}