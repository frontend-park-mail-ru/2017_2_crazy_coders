import Bullet from '../Bullet';

export default class EnemyBullet extends Bullet {
    enemyBullets: Phaser.Group;
    game: Phaser.Game;

    constructor(game: Phaser.Game) {
        super(game, 0, 0);
        this.game = game;
        this.create();
    }

    create() {
        this.enemyBullets = this.game.add.group();
        this.enemyBullets.enableBody = true;
        this.game.physics.arcade.enable(this.enemyBullets);
        this.enemyBullets.createMultiple(30, 'bullet');
        this.enemyBullets.setAll('anchor.x', 0.5);
        this.enemyBullets.setAll('anchor.y', 0.5);
        this.enemyBullets.setAll('outOfBoundsKill', true);
        this.enemyBullets.setAll('checkWorldBounds', true);
    }

    createBullet(xCoord: number, yCoord: number, id: number): void {
        this.bullet = this.enemyBullets.create(xCoord, yCoord, 'box_tree');
        this.bullet.name = id.toString();
        this.bullet.body.immovable = true;
    }
}