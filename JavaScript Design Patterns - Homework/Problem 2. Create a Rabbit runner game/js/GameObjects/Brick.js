var Brick = (function(){
    function Brick(x, y){
        this.image = createImage("resources/brick.png");
        GameObject.call(this, x, y, TILE_SIZE, TILE_SIZE, true);
    }

    Brick.prototype.draw = function () {
        GameObject.prototype.draw.call(this);
    };

    return Brick;
})();