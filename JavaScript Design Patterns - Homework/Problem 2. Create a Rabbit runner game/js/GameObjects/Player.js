var Player = (function(){
    function Player(x, y, width, height, collidable, playerImage){
        GameObject.call(this, x, y, width, height, collidable);

        this.virtualX = x;
        this.virtualY = y;

        if(!(playerImage instanceof Image)){
            throw new Error("Player expects image.");
        }

        this.playerImage = playerImage;
        this.isAlive = true;
    }

    Player.prototype = {
        update: function(){

        },
        draw: function(){
            var canvas = document.getElementById("canvas");
            var canvasContext = canvas.getContext("2d");

            canvasContext.drawImage(this.image, this.x, this.y);
        },
        handleInput: function(){

        }
    };

    return Player;
})();