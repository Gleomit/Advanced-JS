var Enemy = (function(){
    function Enemy(x, y, width, height){
        GameObject.call(this, x, y, width, height, true);
        this.speed = 1.2;
        this.isAlive = true;
    }

    Enemy.prototype = {
        update: function(){

        },
        draw: function(){
            var canvas = document.getElementById("canvas");
            var canvasContext = canvas.getContext("2d");

            canvasContext.drawImage(this.image, this.x, this.y);
        }
    };

    return Enemy;
})();