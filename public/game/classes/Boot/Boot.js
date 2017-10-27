import Phaser from '../../phaser.min'
import  Preloader from '../Preloader/Preloader'

class Boot extends Phaser.State {

    preload() {
        this.load.image('background', 'static/staticsGame/images/titlepage.jpg');
        this.load.image('preloadBar', 'static/staticsGame/images/loader.png');
    }

    create() {
         this.game.state.start('Preloader', true, false);
    }

}

export default Boot;