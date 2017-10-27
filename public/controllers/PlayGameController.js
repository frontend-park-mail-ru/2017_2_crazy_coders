'use strict';

import Controller from "./Controller";
import Game from '../game/classes/Game/Game';

class PlayGameController extends Controller {

	constructor(opt = {}) {
		if (PlayGameController.__instance) {
			return PlayGameController.__instance;
		}

		super(opt);
		PlayGameController.__instance = this;

	}

	show() {
		if (this.userService.isAuthorized()) {
			let game = new Game();
		}
	}

}

export default PlayGameController;