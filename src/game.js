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

  },

  init : function(){
    ageofshimrod.canvas = new ageofshimrod.Canvas();
    ageofshimrod.canvas.init();
    ageofshimrod.canvas.setCanvasSize(window.innerWidth,window.innerHeight);
    ageofshimrod.canvas.canvasMouse.addEventListener("click",ageofshimrod.gameEngine.clickEvent);
    ageofshimrod.canvas.canvasMouse.addEventListener("mousemove",ageofshimrod.gameEngine.mouseMove);
    ageofshimrod.tileset = new ageofshimrod.Tileset();
  }

}

shimGdAncien.gameEngine = new shimGdAncien.GameEngine();
shimGdAncien.gameEngine.init();

setInterval(shimGdAncien.gameEngine.gameLoop,1000/60)