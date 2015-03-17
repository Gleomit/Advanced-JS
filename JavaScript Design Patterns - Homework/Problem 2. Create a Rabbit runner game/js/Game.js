var Game = (function(){
    var playerStartPositionX = 0;
    var playerStartPositionY = 0;

    function Game(){
        this.init();
    }

    Game.prototype = {
        init: function () {
            this.player = new Player(playerStartPositionX, playerStartPositionY, 30, 30, true, createImage("resources/player.jpg"));
            this.obstacles = [];
            this.enemies = [];
            this.background = new Background(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, false)
        },
        start: function () {
            while(this.player.isAlive === true){
                window.requestAnimationFrame(this.gameLoop);

                this.gameLoop();
            }
        },
        gameLoop: function(){
            this.handleCollisions();
            this.update();
            this.draw();
        },
        update: function(){
            this.background.update();
            this.player.update();
        },
        draw: function () {
            var canvas = document.getElementById("canvas");
            var canvasContext = canvas.getContext("2d");

            var i = 0;

            canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            //this.background.draw(            );

            for(i = 0; i < this.obstacles.length; i += 1){
                this.obstacles[i].draw();
            }

            for(i = 0; i < this.enemies.length; i += 1){
                this.enemies[i].draw();
            }

            this.player.draw();
        },
        handleCollisions: function () {
            for(i = 0; i < this.obstacles.length; i += 1){
                if(areColliding(this.obstacles[i], this.player) === true){

                }
            }

            for(i = 0; i < this.enemies.length; i += 1){
                if(areColliding(this.enemies[i], this.player) === true){

                }
            }
        }
    };

    return Game;
})();