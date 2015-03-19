var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

var CANVAS_WIDTH = canvas.width;
var CANVAS_HEIGHT = canvas.height;

var playerSpeed = 3;

var TILE_SIZE = 32;

var MAP_WIDTH = 50 * TILE_SIZE;

var clouds = [];

(function(){
    var i = 0;

    for(i = 0; i <= 4; i += 1){
        clouds[i] = createImage("resources/clouds/cloud" + i.toString() + ".png");
    }
})();