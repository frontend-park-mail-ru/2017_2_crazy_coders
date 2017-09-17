(function () {
    'use strict';

    const Form = window.Form;

    class SignUp {
        constructor() {
            this.section = Block.Create('section', [], {id: 'registry'});
            const divTitle = Block.Create('div', ['logo', 'logo_text'], {}, 'REGISTER');
            const divForm = Block.Create('div', ['logo', 'input_form']);
            const divButton = Block.Create('div', ['logo', 'logo_button']);
            const button =  Block.Create('button', ['button'], {id: 'back-signup'}, 'BACK');

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

            this.section.append(divTitle);
            this.section.append(divForm.append(this.form));
            this.section.append(divButton.append(button));
        }

        getSignUpForm() {
            return this.section;
        }
    }

    window.SignUp = SignUp;

})();
