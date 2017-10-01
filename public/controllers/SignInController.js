'use strict';

import Controller from "./Controller";
import Form from '../components/Form/Form/Form'

class SignInController extends Controller {

    constructor(opt = {}) {
        if(SignInController.__instance) {
            return SignInController.__instance;
        }

        super(opt);
        SignInController.__instance = this;
        this.addListener();
    }

    addListener() {

        this.page_parts.get('SignIn').onSubmitSignInForm(formdata => {
            this.userService
                .signIn(formdata.email, formdata.password)
                .then(function () {
                    console.log("[onSubmitSignInForm] Success sign in");
                    Form.reset();
                    this.router.go('/');
                })
                .catch((err) => {
                    console.log("[onSubmitSignInForm] err: " + err);
                    Form.showFormMessage('server error', this.page_parts.get('SignIn'));
                });
        });

        document.getElementById('signIn-button-back').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/');
        });
    }

    resume() {
        this.show();
    }

    show() {
        //this.page_parts.get("Header").show();
        this.page_parts.get("SignIn").show();
    }

    hide() {
        //this.page_parts.get("Header").hide();
        this.page_parts.get("SignIn").hide();
    }
}

export default SignInController;