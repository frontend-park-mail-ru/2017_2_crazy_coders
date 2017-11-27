export default abstract class Bullet extends Phaser.Sprite {
    game: Phaser.Game;
    bullet: Phaser.Sprite;
    xCoordinate: number;
    yCoordinate: number;

    constructor(game: Phaser.Game, xCoord: number, yCoord: number) {
        super(game, 0, 0);
        this.game = game;
        this.xCoordinate = xCoord;
        this.yCoordinate = yCoord;
        this.create();
    }

    abstract create(): void;

    public get currentPosition() {
        return {
            xCoordinate: this.bullet.x,
            yCoordinate: this.bullet.y,
        }
    }

    public set currentPosition(coordinate) {
        this.bullet.x = coordinate.xCoordinate;
        this.bullet.y = coordinate.yCoordinate;
    }
}