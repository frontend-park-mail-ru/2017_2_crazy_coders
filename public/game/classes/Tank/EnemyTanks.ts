import Tank from './Tank';

export default class EnemyTanks {
    enemyTanks: Phaser.Group;
    game: Phaser.Game;
    enemy: Tank;

    constructor(game: Phaser.Game) {
        this.game = game;
        this.create();
    }

    create() {
        this.enemyTanks = this.game.add.group();
        this.enemyTanks.enableBody = true;
        this.game.physics.arcade.enable(this.enemyTanks);
    }

    createEnemyTank(xCoord: number, yCoord: number, id: number): void {
        this.enemy = new Tank(this.game, id.toString());
        this.enemy._tank.currentPosition = {
                                    xCoordinate: xCoord,
                                    yCoordinate: yCoord
                                };
        this.enemy = this.enemyTanks.add(this.enemy);
        this.enemy["name"] = id.toString();
    }
}