
window.onload = function(){
    this.config = {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xB61731,
        scene: [Scene1, Scene2],
        pixelArt: true,
        fps: {
            target: 60,
            forceSetTimeOut: true
        }
      }
      const game = new Phaser.Game(this.config);
}
