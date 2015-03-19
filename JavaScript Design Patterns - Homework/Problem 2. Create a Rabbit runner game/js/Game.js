var Game = (function(){
    var playerStartPositionX = 0;
    var playerStartPositionY = 0;
    var reachedLevelOfMap = 0;

    function Game(){
        this.player = new Player(playerStartPositionX, playerStartPositionY, 64, 96, createImage("resources/player.png"));
        this.platform = new GameObject(0, 410, 1, 1, true);
        this.platform.image = createImage("resources/platform.png");
        this.obstacles = [];
        //this.obstacles.push(new Brick(128, 0, 32, 32));
        this.enemies = [];
        this.background = new Background(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    Game.prototype.start = function () {
        this.gameLoop();
    };

    Game.prototype.gameLoop = function() {
        this.handleCollisions();
        this.update();
        this.draw();

        var theThis = this;
        window.requestAnimationFrame(function(){
            theThis.gameLoop();
        });
    };

    Game.prototype.update = function() {
        this.background.update(this.player);
        this.player.update();
    };

    Game.prototype.draw = function () {
        var i = 0;

        canvasContext.fillStyle = "#gfd";
        canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        this.background.draw();
        canvasContext.drawImage(this.platform.image, this.platform.x, this.platform.y);


        for (i = 0; i < this.obstacles.length; i += 1) {
            this.obstacles[i].draw();
        }

        for (i = 0; i < this.enemies.length; i += 1) {
            this.enemies[i].draw();
        }

        this.player.draw();
    };

    Game.prototype.handleCollisions = function() {
        var i = 0;

        for (i = 0; i < this.obstacles.length; i += 1) {
            if (areColliding(this.obstacles[i], this.player) === true) {
                this.player.positionUndo();
            }
        }

        for (i = 0; i < this.enemies.length; i += 1) {
            if (areColliding(this.enemies[i], this.player) === true) {
                this.player.positionUndo();
            }
        }
    };

    function GenerateMapElements(){
        var numberOfCols = Math.floor((Math.random() * 5) + 2);

        for(var i = 0; i < numberOfCols; i++){
            var tempNum = Math.floor((Math.random() * 15) + 6);
            var colBricksNum = Math.floor((Math.random() * 3) + 1);

        }
    }

    return Game;
})();