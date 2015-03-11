var Shape = (function () {
    function Shape(hexColor) {
        this.color = hexColor;
    }

    Shape.prototype = {
        get color(){
            return this._color;
        },
        set color(val){
            if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val) == false) {
                throw new Error("Color must be valid hexadecimal string!");
            }

            this._color = val;
        }
    };

    Shape.prototype.toString = function(){
        var result = "Color - "
            + this.color;
        return result;
    };

    return Shape;
}());

var GeometryModule = (function(){
    var Rectangle = (function () {
        function Rectangle(color, topLeft, width, height) {
            Shape.call(this, color);

            this._topLeft = topLeft;
            this._width = width;
            this._height = height;
        }

        Rectangle.prototype = Object.create(Shape.prototype); // - supported in newest browsers
        Rectangle.prototype.constructor = Rectangle; // return constructor back to Student

        Rectangle.prototype.toString = function(){
            var result = "Shape type: " + "Rectangle, " + Shape.prototype.toString.call(this) + ", Top left - "
                + this._topLeft + ", width - " + this._width + ", height - " + this._height;
            return result;
        };

        return Rectangle;
    }());

    var Triangle = (function () {
        function Triangle(color, a, b, c) {
            Shape.call(this, color);

            this._a = a;
            this._b = b;
            this._c = c;
        }

        Triangle.prototype = Object.create(Shape.prototype); // - supported in newest browsers
        Triangle.prototype.constructor = Triangle; // return constructor back to Student

        Triangle.prototype.toString = function(){
            var result = "Shape type: " + "Triangle, " + Shape.prototype.toString.call(this) + ", A - "
                + this._a + ", B - " + this._b + ", C - " + this._c;
            return result;
        };

        return Triangle;
    }());

    var Circle = (function () {
        function Circle(color, center, radius) {
            Shape.call(this, color);

            this._center = center;
            this.radius = radius;
        }



        Circle.prototype = Object.create(Shape.prototype); // - supported in newest browsers
        Circle.prototype.constructor = Circle; // return constructor back to Student

        Circle.prototype.toString = function(){
            var result = "Shape type: " + "Circle, " + Shape.prototype.toString.call(this) + ", Center - "
                + this._center + ", Radius - " + this._radius;
            return result;
        };

        Circle.prototype.__defineSetter__("radius", function(val){
            if(val < 0) {
                throw new Error("Circle radius must be positive number.");
            }

            this._radius = val;
        });

        Circle.prototype.__defineGetter__("radius", function(){
            return this._radius;;
        });

        return Circle;
    }());

    var Line = (function () {
        function Line(color, a, b) {
            Shape.call(this, color);

            this._a = a;
            this._b = b;
        }

        Line.prototype = Object.create(Shape.prototype); // - supported in newest browsers
        Line.prototype.constructor = Line; // return constructor back to Student

        Line.prototype.toString = function(){
            var result = "Shape type: " + "Line, " + Shape.prototype.toString.call(this) + ", A - "
                + this._a + ", B - " + this._b;
            return result;
        };

        return Line;
    }());

    var Segment = (function () {
        function Segment(color, a, b) {
            Shape.call(this, color);

            this._a = a;
            this._b = b;
        }

        Segment.prototype = Object.create(Shape.prototype); // - supported in newest browsers
        Segment.prototype.constructor = Segment; // return constructor back to Student

        Segment.prototype.toString = function(){
            var result = "Shape type: " + "Segment, " + Shape.prototype.toString.call(this) + ", A - " + this._a + ", B - " + this._b;
            return result;
        };

        return Segment;
    }());

    return{
        Rectangle: Rectangle,
        Triangle: Triangle,
        Circle: Circle,
        Segment: Segment,
        Line: Line
    }
})();



var Point = (function Point(){
    function Point(x , y){
        this._x = x;
        this._y = y;
    }

    Point.prototype.toString = function(){
        var result = "(" + this._x + ", " + this._y + ")";
        return result;
    };

    return Point;
})();

var shapes = [];
shapes.push(new GeometryModule.Circle("#ffa", new Point(10, 0), 1));
shapes.push(new GeometryModule.Triangle("#ffb", new Point(10, 0), new Point(10, 10), new Point(5, 5)));
shapes.push(new GeometryModule.Rectangle("#fffaaa", new Point(0, 0), 10, 30));
shapes.push(new GeometryModule.Segment("#fffeee", new Point(10, 0), new Point(10, 10)));
shapes.push(new GeometryModule.Line("#fffbbb", new Point(10, 0), new Point(10, 10)));

console.log(shapes.join("\n"));