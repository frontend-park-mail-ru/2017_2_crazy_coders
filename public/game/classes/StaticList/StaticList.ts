export default class StaticList {
    list: Phaser.Group;
    game: Phaser.Game;
    _statisticList: Array<any>;
    _uid: number;

    constructor(game: Phaser.Game, ownerId: number) {
        this.game = game;
        this.list = this.game.add.group();
        this._uid = ownerId;
        this._statisticList = [];
        this.create();
    }

    create() {
        this.list.add(this.game.make.text(this.game.width - 300, 10, '   STATISTICS',  {font: "bold 26px Courier New", fill: '#db0e59',
                                                                                                                            boundsAlignH: "center", boundsAlignV: "middle" } ))
        this.list.add(this.game.make.text(this.game.width - 300, 40, '№  USERNAME  KILLS',  {font: "bold 22px Courier New", fill: '#d566db',
            boundsAlignH: "center", boundsAlignV: "middle" } ))

    }

    addLine(dataString: string, yPosition: number): void {
        this.list.add(this.game.make.text(this.game.width - 300, yPosition, dataString,  {font: "bold 22px Courier New", fill: '#9370DB',
                                                                                                                                    boundsAlignH: "center", boundsAlignV: "middle" } ))
    }

    updateList(statistics: Array<any>, kills: number): void {

        if(kills === null) {
            kills = 0;
        }

        for(let i = 0; i < this.list.children.length; i++) {
            this.list.children[i].kill();
        }

        this.create();

        for(let i = 0; i < statistics.length; i++) {
            let name = statistics[i].username;

            if(name.length > 10) {
                name = name.slice(0, 3) + '...' + name.slice(name.length - 3, name.length);
            } else if (name.length < 10) {
                name += Array(10 - name.length). join(' ');
            }
            this.addLine(`${i + 1}. ${name}  ${statistics[i].kills}`, ((i + 1) + 2) * 20);
        }
        this.addLine(`     KILLS: ${kills}`, this.game.height - 30);

        this.list.fixedToCamera = true;

    }

    // updatePosition(x: number, y: number): void {
    //     let i = 0;
    //     let width = 0;
    //     let height = 0;
    //
    //     debugger;
    //
    //     if( (x + document.documentElement.clientWidth) >= this.game.world.width || (x - document.documentElement.clientWidth) < 0 ) {
    //         width = document.documentElement.clientWidth - 200;
    //     } else {
    //         width = x + document.documentElement.clientWidth - 200;
    //     }
    //
    //     if ( (y - document.documentElement.clientHeight/2) <= 0 ) {
    //         height = 10;
    //     } else {
    //         height = y - document.documentElement.clientHeight/2 - 10;
    //     }
    //
    //     for (let line of this.list.children) {
    //         i++;
    //         line.position.set(width, y);
    //         // line.position.set(x, y);
    //     }
    // }

}