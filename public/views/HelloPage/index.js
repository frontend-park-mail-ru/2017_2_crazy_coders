(function () {

    const Block = window.Block;

    class HelloPage {
        constructor() {
                this.menu =  Block.Create('div', ['logo', 'logo_button']);
                const log = Block.Create('button', ['button'], {id: 'button-log'});
                const reg = Block.Create('button', ['button'], {id: 'button-register'});
                log.setText('LOG IN');
                reg.setText('REGISTER');
                console.log(this.menu, log, reg);

                this.menu.append(log);
                this.menu.append(reg);
            }

        getHelloPage() {
            return this.menu;
        }
    }

    window.HelloPage = HelloPage;

})();