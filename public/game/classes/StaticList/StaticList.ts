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

        let nameText = this.game.make.text(this.game.width - 300, 10, '   STATISTICS',
            {font: "bold 26px Courier New", fill: '#db0e59',boundsAlignH: "center", boundsAlignV: "middle" });
        nameText.stroke = '#000000';
        nameText.strokeThickness = 4;
        this.list.add(nameText);

        let headerText = this.game.make.text(this.game.width - 300, 40, '№  USERNAME  KILLS',
            {font: "bold 22px Courier New", fill: '#d566db', boundsAlignH: "center", boundsAlignV: "middle" });
        headerText.stroke = '#000000';
        headerText.strokeThickness = 3;
        this.list.add(headerText);

    }

    addLine(dataString: string, yPosition: number): void {
        let statistictext = this.game.make.text(this.game.width - 300, yPosition, dataString,
            {font: "bold 22px Courier New", fill: '#9370DB', boundsAlignH: "center", boundsAlignV: "middle" });
        statistictext.stroke = '#000000';
        statistictext.strokeThickness = 2;
        this.list.add(statistictext);
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
            this.addLine(`${i + 1}. ${name}  ${statistics[i].kills}`, ((i + 1) + 2) * 22);
        }

        this.addLine(`            KILLS: ${kills}`, this.game.height - 30);

        this.list.fixedToCamera = true;

    }
}