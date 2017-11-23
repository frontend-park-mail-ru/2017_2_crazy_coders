'use strict';

import Controller from "./Controller";
import OfflineGame from '../game/classes/Game/Game';
import Game from '../game/classes/index';

class PlayGameController extends Controller {

	constructor(opt = {}) {
		if (PlayGameController.__instance) {
			return PlayGameController.__instance;
		}

		super(opt);
		PlayGameController.__instance = this;

	}

	show() {
		this.userService
			.getProfile()
			.then((resp) => {
				console.log("[userService.getProfile] response: " + resp);
				this.userService.user.set(resp);
				let game = new Game();
			})
			.catch((err) => {
				console.log("[userService.getProfile] err: " + err);
				let game = new OfflineGame();
			});
	}

	hide() {

	}

}

export default PlayGameController;