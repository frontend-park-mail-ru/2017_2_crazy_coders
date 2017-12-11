'use strict';

import Controller from "./Controller";
// import Game from '../game/classes/Game/Game';
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

				this.game = new Game(this.userService.user);
			})
			.catch((err) => {
				console.log("[userService.getProfile] err: " + err);
				this._router.go('/');
			});
	}

	hide() {
		this.game.exit();
	}

}

export default PlayGameController;