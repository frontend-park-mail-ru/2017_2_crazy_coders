(function () {

    const Block = window.Block;

    class MainPage {
        constructor() {
            this.menu =  Block.Create('div', ['logo', 'logo_button']);

            const startButton = Block.Create('button', ['button'], {id: 'button-log'}, 'START');
            const logoutButton = Block.Create('button', ['button'], {id: 'button-register'}, 'LOGOUT');

            this.menu.append(startButton);
            this.menu.append(logoutButton);
        }

        getHelloPage() {
            return this.menu;
        }
    }

    window.MainPage = MainPage;

})();