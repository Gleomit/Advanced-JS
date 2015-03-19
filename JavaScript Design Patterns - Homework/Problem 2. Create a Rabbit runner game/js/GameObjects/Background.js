var Background = (function(){
    function GenerateClouds(){
        var tempClouds = [];
        var i = 0;

        var temp = null;

        for(i = 0;i < 5; i += 1){
            var randomPositionX = Math.floor((Math.random() * 49) + 1);
            var randomPositionY = Math.floor((Math.random() * 3) + 0);
            var randomCloudImage = Math.floor((Math.random() * 4) + 1);

            temp = new GameObject(randomPositionX * TILE_SIZE, randomPositionY * TILE_SIZE, 1, 1, false);
            temp.image = clouds[randomCloudImage];

            tempClouds.push(temp);
        }

        return tempClouds;
    }

    function Background(x, y, width, height){
        GameObject.call(this, x, y, width, height, false);
        this.image = createImage("resources/background.png");

        this.platform = new GameObject(0, 410, 720, 70, false);
        this.platform.image = createImage("resources/platform.png");

        this.objects = GenerateClouds();
    }

    Background.prototype = {
        update: function(player){
            if(player.isMoving === true){
                this.move(player.velocityX * -1);
            }
        },
        draw: function(){
            canvasContext.drawImage(this.image, 0, 0);

            var i = 0;
            for(i = 0; i < this.objects.length; i += 1){
                canvasContext.drawImage(this.objects[i].image, this.objects[i].x, this.objects[i].y);
            }
        },
        move: function(speed){
            var i = 0;
            for(i = 0; i < this.objects.length; i += 1){
                this.objects[i].x += speed;
            }
        }
    };

    return Background;
})();