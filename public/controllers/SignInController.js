'use strict';

import Controller from "./Controller";
import Form from '../components/Form/Form/Form'
import Theme from '../static/css/style';
import Notify from '../components/Form/ValidForm/Notify/Notify';
import ControllSettings from '../modules/ControllSettings';


class SignInController extends Controller {

	constructor(opt = {}) {
		if (SignInController.__instance) {
			return SignInController.__instance;
		}

		super(opt);
		SignInController.__instance = this;
		this.theme = new Theme();
		this.addListener();
		this.controllSettings = new ControllSettings();
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
                    console.log(`[onSubmitSignInForm] data.mouseControlEnabled current = ${this.controllSettings.mouseControll}`);
                    console.log(`[onSubmitSignInForm] data.mouseControlEnabled = ${data.mouseControlEnabled}`);
                    this.controllSettings.mouseControll = data.mouseControlEnabled;
					console.log('signIn: ' + this.userService.user.getUsername());
					Form.reset();
					this._router.go('/');
				})
				.catch((err) => {
                    let notify = new Notify();
					if(err.status === 403) {
                        notify.notify('User name or password is incorrect', 'orange');
                    } else {
                        notify.notify('NetworkError.');
					}
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