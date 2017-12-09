'use strict';

import Controller from "./Controller";
import Theme from '../static/css/style';

class ScoreListController extends Controller {

	constructor(opt = {}) {
		if (ScoreListController.__instance) {
			return ScoreListController.__instance;
		}

		super(opt);
		ScoreListController.__instance = this;
		this.theme = new Theme();
		this.addListener();
	}

	addListener() {
		document.getElementsByClassName('theme')[0].addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

		document.getElementById('score-button-back').addEventListener('click', event => {
			event.preventDefault();
			this._router.go('/');
		});
	}

	resume() {
		this.show();
	}

	show() {
		this.page_parts.get("Header").show();
		this.userService
			.getScorelist(1)
			.then((resp) => {
				console.log('good answer');
				console.log(resp);
				console.log(this.page_parts.get("Scoreboard").data);
			})
			.catch((err) => {
				console.log('bad answer');
			});

		console.log(this.userService.user.getScore());

		this.page_parts.get("Scoreboard").data.userScore = this.userService.user.getScore();
		this.page_parts.get("Scoreboard").getClassElement().hidden=false;
		this.addListener();

	}

	hide() {
		this.page_parts.get("Header").hide();
		this.page_parts.get("Scoreboard").hide();
	}
}

export default ScoreListController;
