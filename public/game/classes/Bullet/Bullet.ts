export default class Bullet extends Phaser.Sprite {
    game: Phaser.Game;
    bullet: Phaser.Sprite;
    xCoordinate: number;
    yCoordinate: number;
    explosions: Phaser.Group;

    constructor(game: Phaser.Game, xCoord: number, yCoord: number) {
        super(game, 0, 0);
        this.game = game;
        this.xCoordinate = xCoord;
        this.yCoordinate = yCoord;
        this.explosions = this.game.add.group();

        this.makeExposition();
        this.create();
    }

     create(): void {};

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

    makeExposition() {
        for (let i = 0; i < 10; i++) {
            let explosionAnimation = this.explosions.create(0, 0, 'kaboom', 0, false);
            explosionAnimation.anchor.setTo(0.5, 0.5);
            explosionAnimation.animations.add('kaboom');
        }
    }

    bulletHitBox(bullet, box) {
        bullet.kill();
        let explosionAnimation = this.explosions.getFirstExists(false);
        explosionAnimation.reset(box.x, box.y);
        explosionAnimation.play('kaboom', 30, false, true);
        // box.kill();
    }


}