'use strict';

import Controller from "./Controller";
import Form from '../components/Form/Form/Form'
import Theme from '../static/css/style';
import Notify from '../components/Form/ValidForm/Notify/Notify';

class SignInController extends Controller {

	constructor(opt = {}) {
		if (SignInController.__instance) {
			return SignInController.__instance;
		}

		super(opt);
		SignInController.__instance = this;
		this.theme = new Theme();
		this.addListener();
	}

	addListener() {
		document.getElementsByClassName('theme')[0].addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

		this.page_parts.get('SignIn').onSubmitSignInForm(formdata => {
			this.userService
				.signIn(formdata.email, formdata.password)
				.then((data) => {
					this.userService.user.set(data);
					console.log("[onSubmitSignInForm] Success sign in");
					console.log('signIn: ' + this.userService.user.getUsername());
					Form.reset();
					this._router.go('/');
				})
				.catch((err) => {
					console.log("[onSubmitSignInForm] err: " + err);
					// Form.showFormMessage('server error', this.page_parts.get('SignIn'));
					let notify = new Notify();
					notify.notify('server error');
				});
		});
	}

	resume() {
		this.show();
	}

	show() {
		this.page_parts.get("Header").show();
		this.page_parts.get("SignIn").show();
	}

	hide() {
		this.page_parts.get("Header").hide();
		this.page_parts.get("SignIn").hide();
	}
}

export default SignInController;