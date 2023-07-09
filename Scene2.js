
class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame")
        
    }
    
    create() {
        this.config = this.sys.game.config;
        //this.background = this.add.image(0, 0, "background");
        //this.background = this.add.tileSprite(0, 0, this.config.width, this.config.height, "background");
        //this.background.setOrigin(0, 0);
  
        this.ship1 = this.add.image(this.config.width / 2 - 150, this.config.height / 2, "ship");
        this.ship2 = this.add.image(this.config.width / 2, this.config.height / 2, "ship2");
        this.ship3 = this.add.image(this.config.width / 2 + 150, this.config.height / 2, "ship3");
        this.ship1.setScale(2);
        this.ship1.setOrigin(0.5);
        this.ship1.flipY = true;
        this.ship1.angle = 90;

        this.ship3.setScale(2);
        this.ship3.setOrigin(0.5);
        this.ship3.flipY = true;
        this.ship3.angle = 270;

        this.ship2.setScale(2);
        this.ship2.setOrigin(0.5);

        this.add.text(20, 20, "Playing game!", {
          font: "30px Arial",
          fill: "black"
        });
    }

    update(){
        // to call a function to move the ships vertically
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.ship3, 3);

    // to scroll the background image
    //this.background.tilePositionY -= 0.5;

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

}//END BRACKET 

