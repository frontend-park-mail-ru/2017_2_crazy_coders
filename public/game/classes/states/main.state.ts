'use strict';
/** Imports */
import State from './state';


// The main state of the game
export default class MainState extends State {
  // _background: Phaser.Sprite;
  // _logo: Phaser.Sprite;

  create(): void {
    // this.game.physics.startSystem(Phaser.Physics.MATTERJS);

    // this._background = this.game.add.sprite(0, 0, 'titlepage');
    // this._background.alpha = 0;
    // this._logo = this.game.add.sprite(this.world.centerX, -300, 'logo');
    // this._logo.anchor.setTo(0.5, 0.5);
    //
    // this.add.tween(this._background).to({ alpha: 1}, 2000, Phaser.Easing.Bounce.InOut, true);
    // this.add.tween(this._logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
    //
    // this.input.onDown.addOnce(this.fadeOut, this);
  }

  fadeOut(): void {

    // this.add.tween(this._background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    // let tween = this.add.tween(this._logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

    // tween.onComplete.add(this.startGame, this);

  }

  startGame(): void {

    this.game.state.start('world', true, false);

  }
}
