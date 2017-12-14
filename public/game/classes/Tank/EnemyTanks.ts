import EnemyTank from './Enemy';

export default class EnemyTanks {
    enemyTanks: Phaser.Group;
    game: Phaser.Game;
    enemy: EnemyTank;

    constructor(game: Phaser.Game) {
        this.game = game;
        this.create();
    }

    create() {
        this.enemyTanks = this.game.add.group();
        this.enemyTanks.enableBody = true;
        this.game.physics.arcade.enable(this.enemyTanks);
    }

    createEnemyTank(xCoord: number, yCoord: number, id: number, title: string): void {
        this.enemy = new EnemyTank(this.game, id, title);
        this.enemy._tank.currentPosition = {
                                    xCoordinate: xCoord,
                                    yCoordinate: yCoord
                                };
        this.enemy = this.enemyTanks.add(this.enemy);
        // this.enemy["name"] = id.toString();
    }
}