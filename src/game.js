'use strict';
var shimGdAncien = shimGdAncien || {};

shimGdAncien.GameEngine = function (){
  this.mouseX = 0;
  this.mouseY = 0;
  this.status = 0
  this.decalageX = 0;
  this.decalageY = 0;
  this.stepDecalage = 3;
  this.tickBirth = 0;
}

shimGdAncien.GameEngine.prototype ={
  gameLoop: function (){
    shimGdAncien.localMap.gameLoop();
    shimGdAncien.localMap.render();
  },

  init : function(){
    shimGdAncien.canvas = new shimGdAncien.Canvas();
    shimGdAncien.canvas.init();
    shimGdAncien.canvas.setCanvasSize(window.innerWidth,window.innerHeight);
    shimGdAncien.canvas.canvasMouse.addEventListener("click",shimGdAncien.gameEngine.clickEvent);
    shimGdAncien.canvas.canvasMouse.addEventListener("mousemove",shimGdAncien.gameEngine.mouseMove);
    shimGdAncien.tileset = new shimGdAncien.Tileset();

    shimGdAncien.localMap = new shimGdAncien.LocalMap();
    shimGdAncien.localMap.init();

  }

}

shimGdAncien.gameEngine = new shimGdAncien.GameEngine();
shimGdAncien.gameEngine.init();

setInterval(shimGdAncien.gameEngine.gameLoop,1000/60)