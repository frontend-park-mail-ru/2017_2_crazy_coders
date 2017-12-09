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
        this.list.add(this.game.make.text(this.game.width - 400, 10, '         STATISTICS',  {font: "bold 26px Arial", fill: '#d566db',
                                                                                                                            boundsAlignH: "center", boundsAlignV: "middle" } ))
    }

    addLine(dataString: string, yPosition: number): void {
        this.list.add(this.game.make.text(this.game.width - 400, yPosition, dataString,  {font: "bold 26px PT Mono", fill: '#9370DB',
                                                                                                                                    boundsAlignH: "center", boundsAlignV: "middle" } ))
    }

    // updateList(statistics: Array<any>): void {
    //     debugger;
    //
    //     statistics.sort((a, b) => {
    //         return a.kills - b.kills;
    //     });
    //
    //     this._statisticList = statistics.slice(0,3);
    //
    //     let userData = null;
    //     let userPosition = null;
    //
    //     for(let i = 0; i < statistics.length; i++) {
    //         if(statistics[i].uId === i) {
    //             userData = statistics[i];
    //             userPosition = i;
    //         }
    //     }
    //
    //     this._statisticList.forEach((elem, position) => {
    //         this.addLine(`${position + 1} name: ${elem.username} kills: ${elem.kills}`, ((position + 1) + 1) * 20);
    //     });
    //
    //     if(userPosition > 3) {
    //         this.addLine("...", 70);
    //         this.addLine(`${userPosition + 1} name: ${userData.username} kills: ${userData.kills}`, 90);
    //     }
    //
    // }

    updateList(statistics: Array<any>): void {
        debugger;

        for(let i = 0; i < this.list.children.length; i++) {
            this.list.children[i].kill();
        }

        this.create();

        for(let i = 0; i < statistics.length; i++) {
            let name = statistics[i].username;

            if(name.length > 10) {
                name = name.slice(0, 3) + '...' + name.slice(name.length - 5, name.length);
            } else if (name.length < 10) {
                name += Array(10 - name.length). join(' ');
            }
            this.addLine(`${i + 1}. ${name} kills: ${statistics[i].kills}`, ((i + 1) + 1) * 20);
        }
    }

}