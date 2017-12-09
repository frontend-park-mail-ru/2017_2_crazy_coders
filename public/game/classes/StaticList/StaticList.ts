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
        this.list.add(this.game.make.text(this.game.width - 400, 10, 'here is a colored line of text',  {font: "bold 26px Arial", fill: '#9370DB',
                                                                                                                            boundsAlignH: "center", boundsAlignV: "middle" } ))
    }

    addLine(dataString: string, yPosition: number): void {
        this.list.add(this.game.make.text(this.game.width - 200, yPosition, dataString,  {font: "bold 26px Arial", fill: '#9370DB',
                                                                                                                                    boundsAlignH: "center", boundsAlignV: "middle" } ))
    }

    updateList(statistics: Array<any>): void {
        this._statisticList = statistics[:3];
        let userData = null;
        let userPosition = null;

        for(let i = 0; i < statistics.length; i++) {
            if(statistics[i].uId == i) {
                userData = statistics[i];
                userPosition = i;
            }
        }

        this._statisticList.forEach((elem, position) => {
            this.addLine(`${position + 1} name: ${elem.username} kills: ${elem.kills}`, (position + 1) * 10);
        });

        if(userPosition > 3) {
            this.addLine("...", 40);
            this.addLine(`${userPosition + 1} name: ${userData.username} kills: ${userData.kills}`, 50);
        }

    }

}