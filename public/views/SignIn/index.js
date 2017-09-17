(function () {
    'use strict';

    const Form = window.Form;

    class SignIn {
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
                        type: 'password',
                        name: 'password',
                        placeholder: 'Password',
                    },
                },
                {
                    classes: ['button', 'submitData'],
                    attrs: {
                        type: 'submit',
                        id: 'login-button',
                        value: 'LOG IN',
                    },
                },
            ]);

            this.form.validatorLoginForm();
        }

        getSingInForm() {
            return this.form;
        }
    }

    window.SignIn = SignIn;

})();
