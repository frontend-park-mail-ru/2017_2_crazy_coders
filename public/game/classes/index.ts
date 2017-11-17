'use strict';
/** Imports */

// require('pixi');
// require('p2');
// require('phaser');

// import 'styles/style.styl'; // Registering styles for the page; They will automatically inject.

import BootState        from './states/boot.state';
import PreloaderState   from './states/preloader.state';
import MainState        from './states/main.state';
import WorldState        from './states/world.state';


// The main class of our application
export default class App extends Phaser.Game {
  constructor() {
    super(document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'content', null);

    this.state.add('boot', BootState);
    this.state.add('preloader', PreloaderState);
    this.state.add('main', MainState);
    this.state.add('world', WorldState);

    debugger;
    this.state.start('boot'); // Initialize and start `boot` state
  }
}



// Like python's `__name__ == "__main__"` checks whether the module is part
// of another program or it is executable.
// if (!module.parent) {
//   window.onload = () => {
//     const config: Phaser.IGameConfig = {
//       width:           800, // width of canvas
//       height:          600, // height of canvas
//       renderer:        Phaser.AUTO, // rendering context. The recommended parameter is Phaser.AUTO
//       parent:          '',
//       resolution:      1,
//       // forceSetTimeOut: false
//     };
//
//     new App(config); // Initialize the application. It will automatically inject <canvas /> into <body />
//   };
// }
