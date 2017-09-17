(function () {
    'use strict';

    const Form = window.Form;

    class SignUp {
        constructor() {
            this.form = new Form([
                {
                    classes: ['input'],
                    attrs: {
                        type: 'text',
                        name: 'login',
                        placeholder: 'Login',
                    },
                },
                {
                    classes: ['input'],
                    attrs: {
                        type: 'text',
                        name: 'email',
                        placeholder: 'Email',
                    },
                },
                {
                    classes: ['input'],
                    attrs: {
                        type: 'password',
                        name: 'password',
                        placeholder: 'Password',
                    },
                },
                {
                    classes: ['input'],
                    attrs: {
                        type: 'password',
                        name: 'repeat-password',
                        placeholder: 'Repeat Password',
                    },
                },
                {
                    classes: ['button', 'submitData'],
                    attrs: {
                        type: 'submit',
                        id: 'signup-button',
                        value: 'SIGN UP',
                    },
                },
            ]);

            this.form.validatorRegisterForm();
        }

        getSingUpForm() {
            return this.form;
        }
    }

    window.SignUp = SignUp;

})();
