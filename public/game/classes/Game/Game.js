import Phaser from '../../phaser';
import Boot from '../Boot/Boot';
import Preloader from '../Preloader/Preloader';
import MainMenu from '../MainMenu/MainMenu';
import World from '../World/World';
import PauseMenu from '../PauseMenu/PauseMenu';
import GameOverMenu from '../GameOverMenu/GameOverMenu';

class Game extends Phaser.Game {

    constructor() {

        super(document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'content', null);

        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('World', World, false);
		this.state.add('PauseMenu', PauseMenu, false);
		this.state.add('GameOverMenu', GameOverMenu, false);

        this.state.start('Boot');

    }
}

export default Game;