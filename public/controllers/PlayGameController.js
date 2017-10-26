'use strict';

import Controller from "./Controller";
import Theme from '../static/css/style';

class PlayGameController extends Controller {

	constructor(opt = {}) {
		if(PlayGameController.__instance) {
			return PlayGameController.__instance;
		}

		super(opt);
		PlayGameController.__instance = this;
		this.theme = new Theme();
		this.addListener();
	}

	addListener() {
		document.getElementById('menu-theme-switch').addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});
	}
}

export default PlayGameController;