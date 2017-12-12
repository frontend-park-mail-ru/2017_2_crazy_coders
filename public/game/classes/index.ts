'use strict';

import BootState        from './states/boot.state';
import PreloaderState   from './states/preloader.state';
import MainState        from './states/main.state';
import WorldState       from './states/world.state';
// import WorldState        from './states/singPlayerWorld.state';
import PauseMenu from './PauseMenu/PauseMenu';
import GameOverMenu from './GameOverMenu/GameOverMenu';
import World from './World/World.js';
import strategy from './strategyControl';

export default class App extends Phaser.Game {
  user: any;

  constructor(User) {
    super(document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'content', null);

    this.user = User;
    this.state.add('boot', BootState);
    this.state.add('preloader', PreloaderState);
    this.state.add('main', MainState);

    switch (strategy.getStrategy()) {
      case 'multiplayer':
        this.state.add('world', WorldState);
        break;
      case "single-offline":
        this.state.add('world', World, false); 
        break;
    }

    this.state.add('PauseMenu', PauseMenu, false);
    this.state.add('GameOverMenu', GameOverMenu, false);

    this.state.start('boot'); // Initialize and start `boot` state
  }


  exit() {
    window.open("/", "_self");
  }
}
