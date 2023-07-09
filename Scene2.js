
class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame")
        
    }
    
    create() {
        this.config = this.sys.game.config; //makes sure that config is available in this scene
        //this.background = this.add.image(0, 0, "background");
        this.background = this.add.tileSprite(0, 0, this.config.width, this.config.height, "background");
        this.background.setOrigin(0, 0);
  
        this.ship1 = this.add.sprite(this.config.width / 2 - 150, this.config.height / 2, "ship");
        this.ship2 = this.add.sprite(this.config.width / 2, this.config.height / 2, "ship2");
        this.ship3 = this.add.sprite(this.config.width / 2 + 150, this.config.height / 2, "ship3");
        this.ship1.setScale(2);
        // this.ship1.setOrigin(0.5);
        // this.ship1.flipY = true;
        // this.ship1.angle = 90;

        this.ship3.setScale(2);
        // this.ship3.setOrigin(0.5);
        // this.ship3.flipY = true;
        // this.ship3.angle = 270;

        this.ship2.setScale(2);
        // this.ship2.setOrigin(0.5);

         //create animations
         this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
         });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
          });

        //play the animations
        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        //make the ships clickable to destroy them
        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        // object destroyed
        this.input.on('gameobjectdown', this.destroyShip, this);

        this.add.text(20, 20, "Playing game!", {
          font: "30px Arial",
          fill: "black"
        });

    }

    update(){
        // to call a function to move the ships vertically
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 1.5);
        this.moveShip(this.ship3, 2);

    // to scroll the background image
    this.background.tilePositionY -= 0.5;

    }

    // create the function to move the ships
    moveShip(ship, speed) {
      
        // increase the position of the ship on the vertical axis
        ship.y += speed;
        // if the ship hits the bottom of the screen call the reset function
        if (ship.y > this.config.height) {
        //call a reset position function
        this.resetShipPos(ship);
        }
    }

  //create the reset position function
  resetShipPos(ship){
    // put the ship on the top
    ship.y = 0;
    // put the ship on a random position on the x axis
    const randomX = Phaser.Math.Between(0, this.config.width);
    ship.x = randomX;
  }

  // destroy ships function
  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }

  

}//END BRACKET 

