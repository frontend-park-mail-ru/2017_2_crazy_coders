(function () {
    'use strict';

    const Form = window.Form;
    const Block = window.Block;

    const UserService = window.UserService;
    const userService = new UserService();

    class SignIn {
        constructor() {

            const section = Block.Create('section', [], {id: 'login'});
            const divTitle = Block.Create('div', ['logo', 'logo_text'], {}, 'LOG IN');
            const divForm = Block.Create('div', ['logo', 'input_form']);
            const divButton = Block.Create('div', ['logo', 'logo_button']);
            const button =  Block.Create('button', ['button', 'a-button'], {id: 'back-login'}, 'BACK');

            const form = new Form([
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
                    classes: ['button'],
                    attrs: {
                        type: 'submit',
                        id: 'login-button',
                        value: 'LOG IN',
                    },
                },
            ]);
            console.log('5');

            form.onSubmit(function (data) {

                console.log('55');
                console.log(data.login);

                let userLogin = data.login;
                let userPassword = data.password;

                const isValid = new ValidLoginForm(userLogin, userPassword, form);

                if (isValid.validLoginForm()) {
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

            section.append(divTitle);
            section.append(divForm.append(form));
            section.append(divButton.append(button));

            this.loginPage = section;
        }

        getSignInForm() {
            return  this.loginPage;
        }
    }

    window.SignIn = SignIn;

})();
