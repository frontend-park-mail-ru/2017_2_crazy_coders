import Phaser from '../../phaser'
import MainMenu from '../MainMenu/MainMenu';

class Preloader extends Phaser.State {

    constructor(){
        super();
        this.preloadBar = Phaser.Sprite;
        this.background = Phaser.Sprite;
    }

    preload() {
        this.load.image('titlepage', 'static/staticsGame/images/titlepage.jpg');
        this.load.image('logo', 'static/staticsGame/images/logo.png');
        this.load.audio('music', 'static/staticsGame/music/boom.mp3', true);
    }

    create() {

        this.background = this.add.sprite(0, 0, 'background');
        this.background.alpha = 0;
        this.add.tween(this.background).to({ alpha: 1 }, 10, Phaser.Easing.Linear.None, true);
        let tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.startMainMenu, this);

    }

    startMainMenu() {

        this.add.tween(this.background).to({ alpha: 0 }, 10, Phaser.Easing.Linear.None, true);
        this.game.state.start('MainMenu', true, false);

    }

}

export default Preloader;