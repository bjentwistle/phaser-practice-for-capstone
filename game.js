window.onload = function(){
    let config = {
        width: 1200,
        height: 600,
        backgroundColor: 0xB61736,
        scene: [Scene1, Scene2],
        pixelArt: true,
        fps: {
            target: 60,
            forceSetTimeOut: true
        }
      }
      
    let game = new Phaser.Game(config);
}