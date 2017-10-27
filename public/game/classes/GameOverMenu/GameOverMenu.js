import Phaser from '../../phaser.min'

class GameOverMenu extends Phaser.State {
    constructor(){
        super();
        this.background = Phaser.Sprite;
        this.logo =  Phaser.Sprite;
    }

    preload(){
        this.load.image('background', 'static/staticsGame/images/white_background.jpg');
        this.load.spritesheet('game_over', 'static/staticsGame/images/gameover_logo.png');
        this.load.spritesheet('try_again', 'static/staticsGame/images/try_again_button.png');
        this.load.spritesheet('exit', 'static/staticsGame/images/exit_button.png');
    }

    create(){

        this.background = this.add.sprite(0, 0, 'background');

        this.logo = this.add.sprite(this.world.centerX, -300, 'game_over');
        this.logo.anchor.setTo(0.5, 0.5);

        this.continueButton = this.game.add.button(this.world.centerX, this.world.centerY, "try_again", this.continueGame, this);
        this.continueButton.anchor.setTo(0.5);
        this.continueButton.scale.setTo(0.5);
        this.continueButton.frame = 1;
        this.continueButton.clicked = false;
        this.continueButton.alpha = 0;

        this.exitButton = this.game.add.button(this.world.centerX, this.world.centerY + 100, "exit", this.exitGame, this);
        this.exitButton.anchor.setTo(0.5);
        this.exitButton.scale.setTo(0.5);
        this.exitButton.frame = 1;
        this.exitButton.clicked = false;
        this.exitButton.alpha = 0;

        this.add.tween(this.background).to({ alpha: 1}, 100, Phaser.Easing.Bounce.InOut, true);
        this.add.tween(this.logo).to({ y: 100 }, 2000, Phaser.Easing.Elastic.Out, true, 200);
        this.add.tween(this.continueButton).to({ alpha: 1}, 1000, Phaser.Easing.Bounce.InOut, true);
        this.add.tween(this.exitButton).to({ alpha: 1}, 1000, Phaser.Easing.Bounce.InOut, true);
    }

    continueGame() {
        this.add.tween(this.background).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true);
        this.game.state.start('World', true, false);
    }

    exitGame() {
        this.add.tween(this.background).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true);
        window.open("/", "_self");
    }
}

export default GameOverMenu;