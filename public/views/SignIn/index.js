(function () {
    'use strict';

    const Form = window.Form;
    const Block = window.Block;

    class SignIn {
        constructor() {
            this.section = Block.Create('section', [], {id: 'login'});
            const divTitle = Block.Create('div', ['logo', 'logo_text'], {}, 'LOG IN');
            const divForm = Block.Create('div', ['logo', 'input_form']);
            const divButton = Block.Create('div', ['logo', 'logo_button']);
            const button =  Block.Create('button', ['button', 'a-button'], {id: 'back-login'}, 'BACK');

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

            this.section.append(divTitle);
            this.section.append(divForm.append(this.form));
            this.section.append(divButton.append(button));
        }

        getSignInForm() {
            return this.section;
        }
    }

    window.SignIn = SignIn;

})();
