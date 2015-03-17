function keyDown(event) {
    if (Game.gameState === GAME_STATES.Playing) {
        if (event.keyCode == 39) {
            player.movingRight = true;
            player.playerImage.src = 'resources/player/forward.png';
        }
        else if (event.keyCode == 37) {
            player.movingLeft = true;
            player.playerImage.src = 'resources/player/back.png';
        }
        if (event.keyCode == 38) {
            player.movingUp = true;
            player.playerImage.src = 'resources/player/left.png';
        }
        else if (event.keyCode == 40) {
            player.movingDown = true;
            player.playerImage.src = 'resources/player/right.png';
        }
        if (event.keyCode == 88) {
            player.fire = true;
        }
    }
};

function keyUp(event) {
    if (Game.gameState === GAME_STATES.Playing) {
        if (event.keyCode == 39) {
            player.movingRight = false;
            player.playerImage.src = 'resources/player/main.png';
        }
        else if (event.keyCode == 37) {
            player.movingLeft = false;
            player.playerImage.src = 'resources/player/main.png';
        }
        if (event.keyCode == 38) {
            player.movingUp = false;
            player.playerImage.src = 'resources/player/main.png';
        }
        else if (event.keyCode == 40) {
            player.movingDown = false;
            player.playerImage.src = 'resources/player/main.png';
        }
    }
};