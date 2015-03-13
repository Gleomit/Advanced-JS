Object.prototype.extends = function (properties) {
    function f() {};
    var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
    };
    f.prototype._super = this;
    return new f();
}

var GeometryModule = (function () {
    function calc2DDistance(vertexOne, vertexTwo) {
        return Math.sqrt(Math.pow(vertexOne.x - vertexTwo.x, 2) + Math.pow(vertexOne.y - vertexTwo.y, 2));
    }

    var Shape = {
        init: function init(position, color) {
            this.color = color;
            this.position = position;

            return this;
        },
        get color(){
            return this._color;
        },
        set color(val){
            if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val) == false) {
                throw new Error("Color must be valid hexadecimal string!");
            }

            this._color = val;
        },
        toString: function(){
            var result = "X1: " + this.position.x + ", Y1: " + this.position.y + ", Color: " + this.color;
            return result;
        }
    };

    var Rectangle = Shape.extends({
        init: function (topLeft, width, height, color) {
            this._super.init.call(this, topLeft, color);

            this.width = width;
            this.height = height;

            return this;
        },
        get width(){
            return this._width;
        },
        set width(val){
            if(typeof val != "number"){
                throw new Error("Width must be number.");
            } else{
                if(val < 0){
                    throw new Error("Width must be positive number.");
                }

                this._width = val;
            }
        },
        get height(){
            return this._height;
        },
        set height(val){
            if(typeof val != "number"){
                throw new Error("Height must be number.");
            } else{
                if(val < 0){
                    throw new Error("Height must be positive number.");
                }

                this._height = val;
            }
        },
        toString: function(){
            var result = "Rectangle - " + this._super.toString.call(this) + ", Width: "
                + this.width + ", Height: " + this.height;
            return result;
        }
    });

    var Circle = Shape.extends({
        init: function(center, radius, color){
            this._super.init.call(this, center, color);

            this.radius = radius;

            return this;
        },
        get radius(){
            return this._radius;
        },
        set radius(val){
            if(val < 0) {
                throw new Error("Circle radius must be positive number.");
            }

            this._radius = val;
        },
        toString: function(){
            var result = "Circle - " + this._super.toString.call(this) + ", Radius: " + this.radius;
            return result;
        }
    });

    var Triangle = Shape.extends({
        init: function(a, b, c, color){
            this._super.init.call(this, a, color);

            this.b = b;
            this.c = c;

            if (!(calc2DDistance(this.position, this.b) + calc2DDistance(this.position, this.c) > calc2DDistance(this.b, this.c)
                && calc2DDistance(this.position, this.b) + calc2DDistance(this.b, this.c) > calc2DDistance(this.position, this.c)
                && calc2DDistance(this.c, this.b) + calc2DDistance(this.position, this.c) > calc2DDistance(this.position, this.b))) {
                throw new Error("The specified points does not form a valid triangle.");
            }

            return this;
        },
        toString: function(){
            var result = "Triangle - " + this._super.toString.call(this) + ", X2: " + this.b.x + ", Y2: " + this.b.y
                + ", X3: " + this.c.x + ", Y3: " + this.c.y;
            return result;
        }
    });

    var Segment = Shape.extends({
        init: function(a, b, color){
            this._super.init.call(this, a, color);

            this.b = b;

            return this;
        },
        toString: function(){
            var result = "Segment - " + this._super.toString.call(this) + ", X2: " + this.b.x + ", Y2: " + this.b.y;
            return result;
        }
    });

    var Line = Shape.extends({
        init: function(a, b, color){
            this._super.init.call(this, a, color);

            this.b = b;

            return this;
        },
        toString: function(){
            var result = "Line - " + this._super.toString.call(this) + ", X2: " + this.b.x + ", Y2: " + this.b.y;
            return result;
        }
    });

    var Point = Shape.extends({
        init: function(position, color){
            this._super.init.call(this, position, color);

            return this;
        },
        toString: function(){
            var result = "Point - " + this._super.toString.call(this);
            return result;
        }
    });

    var Vertex = {
        init: function(x, y){
            this.x = x;
            this.y = y;

            return this;
        },
        get x(){
            return this._x;
        },
        set x(val){
            if(typeof val === "number"){
                this._x = val;
            } else{
                throw new Error("x expects number.");
            }
        },
        get y(){
            return this._y;
        },
        set y(val){
            if(typeof val === "number"){
                this._y = val;
            } else{
                throw new Error("y expects number.");
            }
        },
        toString: function(){
            var result = "Shape type: " + "Line, " + this._super.toString.call(this) + ", A - " + this._a + ", B - " + this._b;
            return result;
        }
    };

    return{
        Rectangle: Rectangle,
        Triangle: Triangle,
        Circle: Circle,
        Segment: Segment,
        Line: Line,
        Point: Point,
        Vertex: Vertex
    };
})();

var shapes = [];
shapes.push(Object.create(GeometryModule.Circle).init(Object.create(GeometryModule.Vertex).init(10, 0), 1, "#ffa"));
shapes.push(Object.create(GeometryModule.Triangle).init(Object.create(GeometryModule.Vertex).init(10, 0),
    Object.create(GeometryModule.Vertex).init(10, 10), Object.create(GeometryModule.Vertex).init(5, 5), "#ffb"));
shapes.push(Object.create(GeometryModule.Rectangle).init(Object.create(GeometryModule.Vertex).init(0, 0), 10, 30, "#fffaaa"));
shapes.push(Object.create(GeometryModule.Segment).init(Object.create(GeometryModule.Vertex).init(10, 0),
    Object.create(GeometryModule.Vertex).init(10, 10), "#fffeee"));
shapes.push(Object.create(GeometryModule.Line).init(Object.create(GeometryModule.Vertex).init(10, 0),
    Object.create(GeometryModule.Vertex).init(10, 10), "#fffbbb"));

console.log(shapes.join("\n"));