
export default class Button {
    _game: Phaser.Game;
    _buttonName: string;
    _button: Phaser.Button;

    constructor(game: Phaser.Game, x: number, y: number, name: string, callback: Function, callbackContext: any) {
        this._game = game;
        this._button = this._game.add.button(x, y, name, callback, callbackContext);
        this._buttonName = name;
        this.create();
    }

    create(){
        this._button.scale.setTo(0.2, 0.2);
        this._button.frame = 1;
        this._button['clicked'] = false;
    }
}