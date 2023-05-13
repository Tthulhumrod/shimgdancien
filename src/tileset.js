'use strict';
var shimGdAncien = shimGdAncien || {};

shimGdAncien.Tileset = function (){
  this.tilesets = {};
};

shimGdAncien.Tileset.prototype = {
  get : function(name){
    if (!(name in this.tilesets)){
      var tileset = new Image();
      tileset.src = name;
      this.tilesets[name] = tileset;
    }
    return this.tilesets[name];
  }
};
