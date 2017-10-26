import Phaser from '../../phaser.min'

class Timer extends Phaser.State {
    constructor(){
        super();
        this.timer = this.game.time.create(false);
    }


}