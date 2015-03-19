function keyDown(event) {
    if (event.keyCode == 39) {
        event.preventDefault();
        theGame.player.velocityX = playerSpeed;
    }
    else if (event.keyCode == 37) {
        event.preventDefault();
        theGame.player.velocityX = -playerSpeed;
    }
    if (event.keyCode == 88) {
        event.preventDefault();
        //player.fire = true;
    }
};

function keyUp(event) {
    if (event.keyCode == 39) {
        theGame.player.velocityX = 0;
    }
    else if (event.keyCode == 37) {
        theGame.player.velocityX = 0;
    }
};

document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);