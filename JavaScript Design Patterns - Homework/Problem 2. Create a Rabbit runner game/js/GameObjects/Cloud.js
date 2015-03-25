var Cloud = (function(){
    function Cloud(x, y, cloudImage){
        this.image = cloudImage;
        GameObject.call(this, x, y, this.image.width, this.image.height);
    }

    Cloud.prototype.draw = function () {
        GameObject.prototype.draw.call(this);
    };

    return Cloud;
})();