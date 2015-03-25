var Player = (function(){
    function Player(x, y, width, height){
        GameObject.call(this, x, y, width, height, true);
        this.init();
    }

    Player.prototype.init = function(){
        this.virtualX = this.x;
        this.virtualY = this.y;

        this.lastX = this.x;
        this.lastY = this.y;

        this.isAlive = true;

        this.velocityX = 0;

        this.isMoving = false;
        this.canJump = true;
        this.isFalling = false;
    };

    Player.prototype.update = function(){
        this.move();

        if(this.x < 0){
            this.positionUndoX();
        }

        if(this.isFalling === true){
            this.lastY = this.y;
            this.y += 3;
            if(this.y + this.height >= 410){
                this.canJump = true;
                this.isFalling = false;
                this.y = 410 - this.height;
            }
        }

        if(this.velocityX === 0){
            this.isMoving = false;
        } else{
            this.isMoving = true;
        }
    };

    Player.prototype.draw = function(){
        canvasContext.drawImage(this.image, this.x, this.y);
    };

    Player.prototype.move = function(){
        this.lastX = this.x;
        this.lastY = this.y;

        this.x += this.velocityX;
        this.virtualX += this.velocityX;
    };

    Player.prototype.positionUndo = function(){
        this.x = this.lastX;
        this.y = this.lastY;
    };

    Player.prototype.positionUndoX = function(){
        this.x = this.lastX;
    };

    Player.prototype.positionUndoY = function(){
        this.y = this.lastY;
    };

    Player.prototype.jump = function(){
        this.lastY = this.y;
        this.y -= 96;
        this.canJump = false;
        this.isFalling = true;
    };

    return Player;
})();