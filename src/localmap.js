'use strict';
var shimGdAncien = shimGdAncien || {};

shimGdAncien.LocalMap = function (){
    this.sizeX = 100;
    this.sizeY = 100;
    this.tileset = "./assets/tileset/tileherbe.png";
    this.tileGrassX = 0;
    this.tileGrassY = 0;
    this.spriteset = undefined;
    this.ctx = undefined;
}

shimGdAncien.LocalMap.prototype ={
    init : function(){
        this.spriteset = shimGdAncien.tileset.get(this.tileset);
        this.ctx = shimGdAncien.canvas.canvasTile.getContext("2d");

    },


    gameLoop : function(){
    },


    render : function(){
        for (let i = 0 ; i < this.sizeX ; i++){
            for (let j = 0 ; j < this.sizeY ; j++){
                if (i*32 < (window.innerWidth - shimGdAncien.gameEngine.decalageX)
                && i*32 >= (-shimGdAncien.gameEngine.decalageX-32) 
                && j*32 < (window.innerHeight - shimGdAncien.gameEngine.decalageY)
                && j*32 >= (-shimGdAncien.gameEngine.decalageY-32)){
                    this.ctx.drawImage(
                        this.spriteset,
                        this.tileGrassX,
                        this.tileGrassY,
                        32,
                        32,
                        i*32 + shimGdAncien.gameEngine.decalageX,
                        j*32 + shimGdAncien.gameEngine.decalageY,
                        32,
                        32);
                    }
            }
        }
    }
}
