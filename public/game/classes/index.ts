'use strict';

import BootState        from './states/boot.state';
import PreloaderState   from './states/preloader.state';
import MainState        from './states/main.state';
// import WorldState        from './states/world.state';
import WorldState        from './states/singPlayerWorld.state';



export default class App extends Phaser.Game {
  constructor() {
    super(document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'content', null);

    this.state.add('boot', BootState);
    this.state.add('preloader', PreloaderState);
    this.state.add('main', MainState);
    this.state.add('world', WorldState);

    this.state.start('boot'); // Initialize and start `boot` state
  }
}
