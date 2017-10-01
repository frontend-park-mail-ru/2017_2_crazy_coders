'use strict';

import Controller from "./Controller";
import Form from '../components/Form/Form/Form'

class SignUpController extends Controller {

    constructor(opt = {}) {
        if(SignUpController.__instance) {
            return SignUpController.__instance;
        }

        super(opt);
        SignUpController.__instance = this;
        this.addListener();
    }

    addListener() {

        this.page_parts.get('SignUp').onSubmitSignUpForm(formdata => {
            return this.userService.signUp(formdata.username, formdata.email, formdata.password)
                .then(function () {
                    console.log("[onSubmitSignUpForm] Success sign up");
                    Form.reset();
                    this.router.go('/');
                })

                .catch((err) => {
                    console.log("[onSubmitSignUpForm] err: " + err);
                    Form.showFormMessage('server error', this.page_parts.get('SignUp'));
                });
        });

        document.getElementById('signUp-button-back').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/');
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