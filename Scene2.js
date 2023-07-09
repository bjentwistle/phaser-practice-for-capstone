
class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame")  
    }
    
    create() {
        this.config = this.sys.game.config; //makes sure that config is available in this scene
        
        //this.background = this.add.image(0, 0, "background");
        // this.background = this.add.tileSprite(0, 0, this.config.width, this.config.height, "background");
        // this.background.setOrigin(0, 0);
        
        // this.cell1 = this.add.image(this.config.width / 2 - 150, this.config.height / 2, "cell");
        // this.cell2 = this.add.image(this.config.width / 2, this.config.height / 2, "cell");
        // this.cell3 = this.add.image(this.config.width / 2 + 150, this.config.height / 2, "cell");
        // this.cell1.setScale(0.1);
        // this.cell2.setScale(0.2);
        // this.cell3.setScale(0.15);

        this.cell1 = this.add.sprite(this.config.width / 2 - 150, this.config.height / 2, "cell1");
        // console.log("Blood sprite -", cell1)
        // // this.cell2 = this.add.sprite(this.config.width / 2, this.config.height / 2, "cell2");
        // // this.cell3 = this.add.sprite(this.config.width / 2 + 150, this.config.height / 2, "cell3");
        
        // this.cell1.setScale(1);
        // this.cell1.setOrigin(0.5);
        // this.cell1.flipX = true;

        // // this.cell2.setScale(1);
        // // this.cell2.setOrigin(0.5);
        // // this.cell2.flipX = true;
       

        // // this.cell3.setScale(1);
        // // this.cell3.setOrigin(0.5);
        // // this.cell1.flipX = true;

         //create animations
         this.anims.create({
            key: "cell1_anim",
            frames: this.anims.generateFrameNumbers("cell1"),
            frameRate: 2,
            repeat: -1
         });

        // // this.anims.create({
        // //     key: "cell2_anim",
        // //     frames: this.anims.generateFrameNumbers("cell2"),
        // //     frameRate: 2,
        // //     repeat: -1
        // // });
        // // this.anims.create({
        // //     key: "cell3_anim",
        // //     frames: this.anims.generateFrameNumbers("cell3"),
        // //     frameRate: 2,
        // //     repeat: -1
        // // });

        // this.anims.create({
        //     key: "explode",
        //     frames: this.anims.generateFrameNumbers("explosion"),
        //     frameRate: 20,
        //     repeat: 0,
        //     hideOnComplete: true
        //   });

        // //play the animations
        this.cell1.play("cell1_anim");
        // // this.cell2.play("cell2_anim");
        // // this.cell3.play("cell3_anim");

        // //make the ships clickable to destroy them
        // this.cell1.setInteractive();
        // // this.cell2.setInteractive();
        // // this.cell3.setInteractive();
        // // this.ship2.setInteractive();
        // // this.ship3.setInteractive();

        // // object destroyed
        // this.input.on('gameobjectdown', this.destroyCell, this);

        this.add.text(20, 20, "Playing game!", {
          font: "30px Arial",
          fill: "black"
        });

    }

  //   update(){
  //       // to call a function to move the ships vertically
  //       this.moveCell(this.cell, 1);
  //       this.moveCell(this.cell2, 1.5);
  //       this.moveCell(this.cell3, 2);
  //       // this.moveShip(this.ship2, 1.5);
  //       // this.moveShip(this.ship3, 2);

  //   // to scroll the background image
  //   //this.background.tilePositionY -= 0.5;

  //   }

  //   // create the function to move the ships
  //   moveCell(cell, speed) {
      
  //       // increase the position of the ship on the vertical axis
  //       cell.y += speed;
  //       // if the ship hits the bottom of the screen call the reset function
  //       if (cell.y > this.config.height) {
  //       //call a reset position function
  //       this.resetCellPos(cell);
  //       }
  //   }

  // //create the reset position function
  // resetCellPos(cell){
  //   // put the ship on the top
  //   cell.y = 0;
  //   // put the ship on a random position on the x axis
  //   const randomX = Phaser.Math.Between(0, this.config.width);
  //   cell.x = randomX;
  // }

  // // destroy ships function
  // destroyCell(pointer, gameObject) {
  //   gameObject.setTexture("explosion");
  //   gameObject.play("explode");
  // }

  

}//END BRACKET 

