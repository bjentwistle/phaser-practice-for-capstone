class Scene1 extends Phaser.Scene {
    constructor () {
        super("bootGame")
    }

    preload(){
        this.load.image("background", "assets/images/background.png");
        //this.load.image("cell", "assets/images/BloodCell.png");
        // this.load.image("redVirus", "assets/images/Red_Virus.png");
        // this.load.image("greenVirus", "assets/images/Green_virus.png");
        // this.load.image("blueVirus", "assets/images/Blue.png");
        // this.load.image("yellowVirus", "assets/images/Yellow_Virus.png");
        // this.load.image("pinkVirus", "assets/images/Pink_Virus.png");
        
        this.load.spritesheet("cell1", "assets/spritesheets/bloodcells.png",{
            frameWidth: 41,
            frameHeight: 40
        });

        this.load.spritesheet("cell2", "assets/spritesheets/bloodcells.png",{
            frameWidth: 41,
            frameHeight: 40
        });
        this.load.spritesheet("cell3", "assets/spritesheets/bloodcells.png",{
            frameWidth: 41,
            frameHeight: 40
        });
        // this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
        //     frameWidth: 16,
        //     frameHeight: 16
        // });
    }

    create() {
        this.add.text(20, 20, "Loading Game ...");
        this.scene.start("playGame");
    }
    
}