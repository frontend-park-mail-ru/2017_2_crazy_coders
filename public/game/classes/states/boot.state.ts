'use strict';
/** Imports */
import State from './state';

const titlepage          = require('../../../static/staticsGame/images/titlepage.jpg');
const loaderImage        = require('../../../static/staticsGame/images/loader.png');
const tankLandingArea    = require('../../../static/staticsGame/images/HelicopterLandingArea.png');
// const titlepage          = require('../../static/staticsGame/images/titlepage.jpg');
// const loaderImage        = require('../../static/staticsGame/images/loader.png');

export default class BootState extends State {

  preload(): void {

    this.game.load.image('background', titlepage);
    this.game.load.image('preloadBar', loaderImage);
    this.game.load.image('tankLandingArea', tankLandingArea);

  }

  create(): void {
    this.game.state.start('preloader', true, false);
  }
}
