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
    super(Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
          Math.max(document.documentElement.clientHeight, window.innerHeight || 0), 
          Phaser.AUTO, 'content', null);
    // super(1890, 1000, Phaser.AUTO, 'content', null);
    // super(800, 600, Phaser.AUTO, 'content', null);

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


  static exit() {
    window.open("/", "_self");
  }
}
