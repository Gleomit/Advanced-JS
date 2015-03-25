var Game = (function(){
    var playerStartPositionX = 0;
    var playerStartPositionY = 314;

    var obstacles = [];
    var enemies = [];
    var background = null;
    var player = null;
    var platform = null;

    function init(){
        document.addEventListener('keydown', keyDown, false);
        document.addEventListener('keyup', keyUp, false);

        player = new Player(playerStartPositionX, playerStartPositionY, PLAYER_SPRITE_WIDTH, PLAYER_SPRITE_HEIGHT);
        player.init();
        player.image = createImage("resources/player.png");

        platform = new GameObject(0, 410, 720, 70, true);
        platform.image = createImage("resources/platform.png");

        obstacles = GenerateMapElements();

        enemies = [];

        background = new Background(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };

    function start(){
        gameLoop();
    };

    function gameLoop() {
        update();
        handleCollisions();
        draw();

        var theThis = this;
        window.requestAnimationFrame(function () {
            gameLoop();
        });
    };

    function update() {
        //this.background.update();
        player.update();
    };

    function draw() {
        var i = 0;

        canvasContext.fillStyle = "#gfd";
        canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

       // this.background.draw();
        platform.draw();

        for (i = 0; i < obstacles.length; i += 1) {
            obstacles[i].draw();
        }

        for (i = 0; i < enemies.length; i += 1) {
            enemies[i].draw();
        }

        player.draw();
    };

    function handleCollisions() {
        var i = 0;

        for (i = 0; i < obstacles.length; i += 1) {
            if (areColliding(obstacles[i], player) === true) {
                if(player.lastX + player.width < obstacles[i].x || player.lastX > obstacles[i].x + obstacles[i].width){
                    player.positionUndoX();
                } else if(player.lastY + player.height < obstacles[i].y || player.lastY > obstacles[i].y + obstacles[i].height){
                    player.canJump = true;
                    player.isFalling = false;
                    player.positionUndoY();
                }
            } else{
                player.isFalling = true;
            }

        }

        for (i = 0; i < enemies.length; i += 1) {
            if (areColliding(enemies[i], player) === true) {

            }
        }
    };

    function GenerateMapElements() {
        var result = [];
        var numberOfCols = Math.floor((Math.random() * 5) + 2);

        for (var i = 0; i < numberOfCols; i++) {
            var tempNum = Math.floor((Math.random() * 15) + 6);
            var colBricksNum = Math.floor((Math.random() * 3) + 1);

            var j = 0;
            for (j = 0; j < colBricksNum; j++) {
                result.push(new Brick(tempNum * 32, 410 - ((colBricksNum - j) * 32), 32, 32));
            }
        }

        return result;
    };

    function keyDown(event) {
        if (event.keyCode == 39) {
            event.preventDefault();
            player.velocityX = PLAYER_SPEED;
        }
        else if (event.keyCode == 37) {
            event.preventDefault();
            player.velocityX = -PLAYER_SPEED;
        }
        if (event.keyCode == 88) {
            event.preventDefault();
            if(player.canJump === true && player.isFalling === false){
                player.jump();
            }
        }
    };

    function keyUp(event) {
        if (event.keyCode == 39) {
            player.velocityX = 0;
        }
        else if (event.keyCode == 37) {
            player.velocityX = 0;
        }
    };

    return {
        start: start,
        init: init
    }
})();