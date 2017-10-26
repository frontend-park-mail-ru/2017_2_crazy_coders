import Phaser from '../../phaser.min'
import Player from '../Player/Player'

class Level1 extends Phaser.State {

    constructor(){
        super();
        this.background = Phaser.Sprite;
        this.music = Phaser.Sound;
        this.player = Phaser.Sprite;
    }

    create() {

        this.background = this.add.sprite(0, 0, 'level1');

        this.music = this.add.audio('music', 1, false);
        this.music.play();

        this.player = new Player(this.game, 130, 284);

    }

}

export default Level1;