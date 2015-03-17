var Brick = (function(){
    function Brick(x, y, width, height, collidable){
        GameObject.call(this, x, y, width, height, collidable);
        this.image = createImage("resources/brick.png");
    }

    Brick.prototype = {
        draw: function(){
            var canvas = document.getElementById("canvas");
            var canvasContext = canvas.getContext("2d");

            canvasContext.drawImage(this.image, this.x, this.y);
        }
    };

    return Brick;
})();