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

var Shape = {
    init: function init(color) {
        this.color = color;

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
        var result = "Color - " + this.color;
        return result;
    }
};

var Point = {
    init: function(x , y){
        this._x = x;
        this._y = y;

        return this;
    },
    toString: function(){
        var result = "(" + this._x + ", " + this._y + ")";
        return result;
    }
};

var GeometryModule = (function () {
    var Rectangle = Shape.extends({
        init: function (color, topLeft, width, height) {
            this._super.init.call(this, color);

            this._topLeft = topLeft;
            this._width = width;
            this._height = height;

            return this;
        },
        toString: function(){
            var result = "Shape type: " + "Rectangle, " + this._super.toString.call(this) + ", Top left - "
                + this._topLeft + ", width - " + this._width + ", height - " + this._height;
            return result;
        }
    });

    var Circle = Shape.extends({
        init: function(color, center, radius){
            this._super.init.call(this, color);

            this._center = center;
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
            var result = "Shape type: " + "Circle, " + this._super.toString.call(this) + ", Center - "
                + this._center + ", Radius - " + this._radius;
            return result;
        }
    });

    var Triangle = Shape.extends({
        init: function(color, a, b, c){
            this._super.init.call(this, color);

            this._a = a;
            this._b = b;
            this._c = c;

            return this;
        },
        toString: function(){
            var result = "Shape type: " + "Triangle, " + this._super.toString.call(this) + ", A - "
                + this._a + ", B - " + this._b + ", C - " + this._c;
            return result;
        }
    });

    var Segment = Shape.extends({
        init: function(color, a, b){
            this._super.init.call(this, color);

            this._a = a;
            this._b = b;

            return this;
        },
        toString: function(){
            var result = "Shape type: " + "Segment, " + this._super.toString.call(this) + ", A - " + this._a + ", B - " + this._b;
            return result;
        }
    });

    var Line = Shape.extends({
        init: function(color, a, b){
            this._super.init.call(this, color);

            this._a = a;
            this._b = b;

            return this;
        },
        toString: function(){
            var result = "Shape type: " + "Line, " + this._super.toString.call(this) + ", A - " + this._a + ", B - " + this._b;
            return result;
        }
    });

    return{
        Rectangle: Rectangle,
        Triangle: Triangle,
        Circle: Circle,
        Segment: Segment,
        Line: Line
    };
})();

var shapes = [];
shapes.push(Object.create(GeometryModule.Circle).init("#ffa", Object.create(Point).init(10, 0), 1));
shapes.push(Object.create(GeometryModule.Triangle).init("#ffb", Object.create(Point).init(10, 0),
    Object.create(Point).init(10, 10), Object.create(Point).init(5, 5)));
shapes.push(Object.create(GeometryModule.Rectangle).init("#fffaaa", Object.create(Point).init(0, 0), 10, 30));
shapes.push(Object.create(GeometryModule.Segment).init("#fffeee", Object.create(Point).init(10, 0),
    Object.create(Point).init(10, 10)));
shapes.push(Object.create(GeometryModule.Line).init("#fffbbb", Object.create(Point).init(10, 0),
    Object.create(Point).init(10, 10)));

console.log(shapes.join("\n"));