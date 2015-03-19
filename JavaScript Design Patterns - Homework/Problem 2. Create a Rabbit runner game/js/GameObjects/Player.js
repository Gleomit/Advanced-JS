var Player = (function(){
    function Player(x, y, width, height, playerImage){
        GameObject.call(this, x, y, width, height, true);

        this.virtualX = x;
        this.virtualY = y;

        this.lastX = x;
        this.lastY = y;

        if(!(playerImage instanceof Image)){
            throw new Error("Player expects image.");
        }

        this.image = playerImage;
        this.isAlive = true;

        this.velocityX = 0;

        this.isMoving = false;
    }

    Player.prototype = {
        update: function(){
            this.x += this.velocityX;

            if(this.x < 0){
                this.positionUndo();
            }

            if(this.velocityX === 0){
                this.isMoving = false;
            } else{
                this.isMoving = true;
            }
        },
        draw: function(){
            canvasContext.drawImage(this.image, this.x, this.y);
        },
        move: function(){
            this.lastX = this.x;
            this.lastY = this.y;
            this.x += this.velocityX;
            this.virtualX += this.velocityX;
        },
        positionUndo: function(){
            this.x = this.lastX;
            this.y = this.lastY;
        }
    };

    return Player;
})();