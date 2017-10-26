'use strict';

import Controller from "./Controller";
import Form from '../components/Form/Form/Form'
import Theme from '../static/css/style';

class SignInController extends Controller {

    constructor(opt = {}) {
        if(SignInController.__instance) {
            return SignInController.__instance;
        }

        super(opt);
        SignInController.__instance = this;
		this.theme = new Theme();
        this.addListener();
    }

    addListener() {
		document.getElementsByClassName('button-theme-switch')[0].addEventListener('click', event => {
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
                    Form.showFormMessage('server error', this.page_parts.get('SignIn'));
                });
        });

        document.getElementById('signIn-button-back').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/');
        });
    }

    resume() {
        this.show();
    }

    show() {  // здесь нужно передавать параметры во вьюху
        this.page_parts.get("Header").show();
        this.page_parts.get("SignIn").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("SignIn").hide();
    }
}

export default SignInController;