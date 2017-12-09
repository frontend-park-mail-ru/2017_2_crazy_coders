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

				resp = [
					{
						name: 'PeterS',
						position: '1000',

					},
					{
						name: 'LoisS',
						position: '1500',

					},
					{
						name: 'JoeS',
						position: '3000',

					},
					{
						name: 'ClevelandS',
						position: '2500'
					}
				];

				this.page_parts.get("Scoreboard").data.users = resp;

				if (this.userService.isAuthorized()) {
					// this.page_parts.get("Scoreboard").data.userScore = this.userService.user.getScore();
					this.page_parts.get("Scoreboard").data.userScore = 10000;
				} else {
					this.page_parts.get("Scoreboard").data.userScore = 0;
				}
				// this.userService.getProfile().then( (ans) => {
				// 		// this.page_parts.get("Scoreboard").data.userScore = this.userService.user.getScore();
				// 	console.log('1000');
				// 	this.page_parts.get("Scoreboard").data.userScore = 10000;
				// }).catch( (badAns) => {
				// 	console.log('err_1000');
				// 	this.page_parts.get("Scoreboard").data.userScore = 0;
				// });

				this.page_parts.get("Scoreboard").getClassElement().hidden = false;
				this.addListener();
			})
			.catch((err) => {
				console.log('bad answer');
			});

	}

	hide() {
		this.page_parts.get("Header").hide();
		this.page_parts.get("Scoreboard").hide();
	}
}

export default ScoreListController;
