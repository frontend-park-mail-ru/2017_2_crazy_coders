(function () {
    'use strict';

    const Form = window.Form;
    const Block = window.Block;

    const UserService = window.UserService;
    const userService = new UserService();

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
                        name: 'repeatPassword',
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

            // this.form.validatorRegisterForm();

            this.form.onSubmit(function (data) {

                console.log('55');
                console.log(data.login);

                let userLogin = data.login;
                let userEmail = data.email;
                let userPassword = data.password;
                let userRepeatPassword = data.repeatPassword;

                const isValid = new ValidRegisterForm(userLogin, userEmail, userPassword, userRepeatPassword, this.form);

                if (isValid.validRegisterForm()) {
                    userService.login(userLogin, userPassword, (err, resp) => {
                        if (err) {
                            return alert(`AUTH Error: ${err.status}`);
                        }

                        if (resp.success === 'yes') {

                            console.log('login is ok!');
                        }
                        this.form.reset();
                    });
                }
            }.bind(this));

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
