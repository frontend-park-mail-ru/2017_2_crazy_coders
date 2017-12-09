
export default class TankLanding {
    playses: Phaser.Group;
    game: Phaser.Game;
    land: Phaser.Sprite;

    constructor(game: Phaser.Game) {
        this.game = game;
        this.create();
    }

    create() {
        this.playses = this.game.add.group();
        this.playses.setAll('anchor.x', 0.5);
        this.playses.setAll('anchor.y', 0.5);
    }

    createLanding(xCoord: number, yCoord: number, id: number): void {
        this.land = this.playses.create(xCoord, yCoord, 'tankLandingArea');
        this.land.anchor.setTo(0.5, 0.5);
        this.land.name = id.toString();
    }
}