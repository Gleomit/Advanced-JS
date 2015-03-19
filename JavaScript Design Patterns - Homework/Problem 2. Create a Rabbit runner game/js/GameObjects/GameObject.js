var GameObject = (function(){
    function GameObject(x, y, width, height, collidable){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.collidable = collidable;
    }

    GameObject.prototype = {
        get x(){
            return this._x;
        },
        set x(val){
            if(typeof val != "number"){
                throw new Error("GameObject parameters (x, y, width, height) must be numbers.");
            }

            this._x = val;
        },
        get collidable(){
            return this._collidable;
        },
        set collidable(val){
            if(typeof val != "boolean"){
                throw new Error("GameObject collidable parameter must be boolean.");
            }

            this._collidable = val;
        },
        get y(){
            return this._y;
        },
        set y(val){
            if(typeof val != "number"){
                throw new Error("GameObject parameters (x, y, width, height) must be numbers.");
            }

            this._y = val;
        },
        get width(){
            return this._width;
        },
        set width(val){
            if(typeof val != "number"){
                throw new Error("GameObject parameters (x, y, width, height) must be numbers.");
            }

            this._width = val;
        },
        get height(){
            return this._height;
        },
        set height(val){
            if(typeof val != "number"){
                throw new Error("GameObject parameters (x, y, width, height) must be numbers.");
            }

            this._height = val;
        },
        draw: function(){
            canvasContext.drawImage(this.image, this.x, this.y);
        }
    };

    return GameObject;
})();