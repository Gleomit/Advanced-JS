var Background = (function(){
    function Background(x, y, width, height, collidable){
        GameObject.call(this, x, y, width, height, collidable);
        this.platform = new GameObject(0, 410, 720, 70, false);
        this.platform.image = createImage("resources/platform.png");
    }

    Background.prototype = {
        update: function(player){

        },
        draw: function(){
            var canvas = document.getElementById("canvas");
            var canvasContext = canvas.getContext("2d");

            canvasContext.drawImage(this.platform.image, this.platform.x, this.platform.y);
        }
    };

    return Background;
})();