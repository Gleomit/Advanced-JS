var Brick = (function(){
    function Brick(x, y, width, height){
        GameObject.call(this, x, y, width, height, true);
        this.image = createImage("resources/brick.png");
    }

    Brick.prototype = {
        draw: function(){
            GameObject.prototype.draw.call(this);
        }
    };

    return Brick;
})();