(function () {
    'use strict';

    const Block = window.Block;
    const ValidLoginFrom = window.ValidLoginForm;
    const UserService = window.UserService;
    const userService = new UserService();

    class Form extends Block {
        constructor(fields = []) {
            const el = document.createElement('form');
            super(el);

            fields.forEach(function (field) {
                const f = Block.Create('input', field.classes || [], field.attrs || {});
                this.append(f);
            }.bind(this));

        }

        validatorLoginForm() {
            this.el.addEventListener('submit', function (event) {
                event.preventDefault();
                let userLogin = this.el.elements['login'].value;
                let userPassword = this.el.elements['password'].value;


                const isValid = new ValidLoginForm(userLogin, userPassword, this.el);

                if (isValid.validLoginForm()) {
                    userService.login(userLogin, userPassword, (err, resp) => {
                        if (err) {
                            return alert(`AUTH Error: ${err.status}`);
                        }

                        if (resp.success === 'yes') {

                            console.log('login is ok!');

                            // loginPage.hidden = true;
                            // helloPage.hidden = true;
                            // isRegisteredUser();
                        }
                        this.el.reset();
                    });
                }
            }.bind(this));
        }

        validatorRegisterForm() {
            this.el.addEventListener('submit', (event) => {
                event.preventDefault();

                let userLogin = this.el.elements['login'].value;
                let userEmail = this.el.elements['email'].value;
                let userPassword = this.el.elements['password'].value;
                let userRepeatPassword = this.el.elements['repeat-password'].value;

                const isValid = new ValidRegisterForm(userLogin, userEmail, userPassword, userRepeatPassword, this.el);

                if (isValid.validRegisterForm()) {
                    userService.auth(userLogin, userEmail, userPassword, (err, resp) => {
                        if (err) {
                            return alert(`AUTH Error: ${err.status}`);
                        }
                        if (resp.response === 200) {
                            console.log('i am registry');
                            // registryPage.hidden = true;
                            // helloPage.hidden = true;
                            // isRegisteredUser();
                        }
                        this.el.reset();
                    });
                }
            });
        }

        reset() {
            this.el.reset();
        }
    }

    window.Form = Form;

})();
