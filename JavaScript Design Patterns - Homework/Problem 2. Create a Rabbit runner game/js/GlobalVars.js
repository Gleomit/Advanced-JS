var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

var cloudSprites = [];

(function(){
    var i = 0;

    for(i = 0; i <= 4; i += 1){
        cloudSprites[i] = createImage("resources/clouds/cloud" + i.toString() + ".png");
    }
})();

//constants
var CANVAS_WIDTH = canvas.width;
var CANVAS_HEIGHT = canvas.height;


var TILE_SIZE = 32;
var MAP_WIDTH = 50 * TILE_SIZE;


//Player constants
var PLAYER_SPRITE_WIDTH = 64;
var PLAYER_SPRITE_HEIGHT = 96;
var PLAYER_SPEED = 3;

