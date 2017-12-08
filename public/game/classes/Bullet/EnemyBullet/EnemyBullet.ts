import Bullet from '../Bullet';
import Tank from '../../Tank/Tank';
import EnemyBullet from '../EnemyBullet/EnemyBullet'

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

    bulletHitTank(bullet: EnemyBullet, tank: Tank): void {
        bullet.kill();
        let explosionAnimation = this.explosions.getFirstExists(false);
        // explosionAnimation.reset(800, 500);
        explosionAnimation.reset(tank._tank._body.x, tank._tank._body.y);
        explosionAnimation.play('kaboom', 30, false, true);
    }
}