(function () {

    "use strict";

    function hideError(form) {
        let removeErrorCollection = form.getElementsByClassName('error-msg');
        const removeErrorArray = Array.from(removeErrorCollection);
        removeErrorArray.forEach(elem => {
            elem.remove();
        });
    }

    function isCorrectLogin(login) {
        return login.trim().length > 4;
    }

    function isCorrectPassword(pswd) {
        return pswd.trim().length >= 6;
    }

    function createErrorElement(msg) {
        let errorElement = document.createElement('p');
        errorElement.textContent = msg;
        errorElement.classList.add('error-msg');

        return errorElement;
    }

    class ValidLoginForm {
        constructor(login, password, form) {
            this.login = login;
            this.password = password;
            this.currentForm = form.el;
        }

        validLoginForm() {
            console.log('form:' ,this.currentForm);

            hideError(this.currentForm);

            let flag = true;
            const loginField = this.currentForm.children[0],
                passwordField = this.currentForm.children[1];

            if (!isCorrectLogin(this.login)) {
                flag = false;
                this.currentForm.insertBefore(createErrorElement('invalid login (<=4 symbol)'), loginField);
            }

            if (!isCorrectPassword(this.password)) {
                flag = false;
                this.currentForm.insertBefore(createErrorElement('invalid password (<6 symbol)'), passwordField);
            }

            return flag;
        }


    }

    window.ValidLoginForm = ValidLoginForm;

})();