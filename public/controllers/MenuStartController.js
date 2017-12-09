'use strict';

import Controller from "./Controller";
import Theme from '../static/css/style';


class MenuStartController extends Controller {

	constructor(opt = {}) {
		if (MenuStartController.__instance) {
			return MenuStartController.__instance;
		}

		super(opt);
		MenuStartController.__instance = this;
		this.theme = new Theme();
		this.flag = true;
		this.addListener();
	}

	addListener() {


		document.getElementById('menu-button-logout').addEventListener('click', event => {
			event.preventDefault();
			this.userService.logout()
				.then((response) => {
					console.log(response);
					this.userService.user.id = 0;
				    this.page_parts.get("Scoreboard").data.userScore = 0;
					this.show();
					this.page_parts.get("RegMenu").hide();
					this._router.go('/');
				})
				.catch(e => {
					alert(e);
				});
		});

		document.getElementById('menu-button-playOfflineGame').addEventListener('click', event => {
			event.preventDefault();
			this._router.go('/play');
		});

		document.getElementById('menu-button-playGame').addEventListener('click', event => {
			event.preventDefault();
			this._router.go('/play');
		});

		if (this.flag) {
			document.getElementsByClassName('theme')[0].addEventListener('click', event => {
				event.preventDefault();
				this.theme.changeTheme();
			});

			document.getElementById('menu-button-music').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/');
			});

			document.getElementById('menu-button-score').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/score');
			});

			document.getElementById('menu-button-about').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/about');
			});

			document.getElementById('menu-button-signIn').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/signin');
			});

			document.getElementById('menu-button-signUp').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/signup');
			});

			this.flag = false;
		}

	}

	resume() {
		this.show();
	}

	show() {
		this.page_parts.get("Header").show();
		console.log("[MenuStartController] in show");

		this.userService
			.getProfile()
			.then((resp) => {
				console.log("[userService.getProfile] response: " + resp);
				this.userService.user.set(resp);
				this.page_parts.get("RegMenu").data.user = this.userService.user.getUsername();
				this.page_parts.get("RegMenu").getClassElement().hidden=false;
				this.addListener();
				// this.page_parts.get("RegMenu").show();
			})
			.catch((err) => {
				console.log("[userService.getProfile] err: " + err);
				this.page_parts.get("UnRegMenu").show();
			});

		this.page_parts.get("Footer").show();
	}

	hide() {
		this.page_parts.get("Header").hide();
		this.page_parts.get("UnRegMenu").hide();
		this.page_parts.get("RegMenu").hide();
		this.page_parts.get("Footer").hide();
	}
}

export default MenuStartController;
