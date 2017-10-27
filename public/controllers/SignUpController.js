'use strict';

import Controller from './Controller';
import Form from '../components/Form/Form/Form';
import Theme from '../static/css/style';

class SignUpController extends Controller {

    constructor(opt = {}) {
        if(SignUpController.__instance) {
            return SignUpController.__instance;
        }

        super(opt);
        SignUpController.__instance = this;
		this.theme = new Theme();
        this.addListener();
    }

    addListener() {

		document.getElementsByClassName('theme')[0].addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

        this.page_parts.get('SignUp').onSubmitSignUpForm(formdata => {
            this.userService
                .signUp(formdata.username, formdata.email, formdata.password)
                .then((data) => { this.userService.user.set(data);
                    console.log("[onSubmitSignUpForm] Success sign up");
                    Form.reset();
                    this._router.go('/');
                })

                .catch((err) => {
                    console.log("[onSubmitSignUpForm] err: " + err);
                    Form.showFormMessage('server error', this.page_parts.get('SignUp'));
                });
        });

        document.getElementById('signUp-button-back').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/');
        });
    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        this.page_parts.get("SignUp").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("SignUp").hide();
    }
}

export default SignUpController;