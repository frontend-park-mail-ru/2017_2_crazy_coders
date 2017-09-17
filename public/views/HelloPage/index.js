(function () {

    const Block = window.Block;

    class HelloPage {
        constructor() {
            this.menu =  Block.Create('div', ['logo', 'logo_button']);

            const loginButton = Block.Create('button', ['button'], {id: 'button-log'}, 'LOG IN');
            const registerButton = Block.Create('button', ['button'], {id: 'button-register'}, 'REGISTER');

            this.menu.append(loginButton);
            this.menu.append(registerButton);
        }

        getHelloPage() {
            return this.menu;
        }
    }

    window.HelloPage = HelloPage;

})();