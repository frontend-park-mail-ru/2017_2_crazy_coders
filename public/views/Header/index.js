(function () {

    const Block = window.Block;

    class Header {
        constructor() {
            this.head = Block.Create('div', ['logo']);
            const p = Block.Create('p', ['rotateit'], {}, 'TANKS');
            const img = Block.Create('img', ['logo_img'], {src: 'static/img/logo.png'});
            this.head.append(p);
            this.head.append(img);
        }

        getHeader() {
            return this.head;
        }
    }

    window.Header = Header;

})();
