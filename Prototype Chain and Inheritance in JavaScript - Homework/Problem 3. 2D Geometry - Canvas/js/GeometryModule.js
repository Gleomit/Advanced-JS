var GeometryModule = (function () {
    function calc2DDistance(vertexOne, vertexTwo) {
        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            return Math.sqrt(Math.pow(vertexOne.x - vertexTwo.x, 2) + Math.pow(vertexOne.y - vertexTwo.y, 2));
        } else {
            throw new Error("calc2DDistance requires two paremeters of type Vertex.");
        }
    }

    var Shape = (function () {
        function Shape(position, hexColor) {
            this.color = hexColor;
            this.position = position;
        }

        Shape.prototype = {
            get color() {
                return this._color;
            },
            set color(val) {
                if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val) == false) {
                    throw new Error("Color must be valid hexadecimal string!");
                }

                this._color = val;
            }
        };

        Shape.prototype.toString = function () {
            var result = "X1: " + this.position.x + ", Y1: " + this.position.y + ", Color: " + this.color;
            return result;
        };

        return Shape;
    }());

    var Rectangle = (function () {
        function Rectangle(topLeft, width, height, color) {
            Shape.call(this, topLeft, color);

            this.width = width;
            this.height = height;
        }

        Rectangle.prototype = Object.create(Shape.prototype);
        Rectangle.prototype.constructor = Rectangle;

        Rectangle.prototype.toString = function () {
            var result = "Rectangle - " + Shape.prototype.toString.call(this) + ", Width - " + this.width + ", Height - " + this.height;
            return result;
        };

        Rectangle.prototype.__defineSetter__("width", function (val) {
            if (val < 0) {
                throw new Error("Rectangle width must be positive number.");
            }

            this._width = val;
        });

        Rectangle.prototype.__defineGetter__("width", function () {
            return this._width;
            ;
        });

        Rectangle.prototype.__defineSetter__("height", function (val) {
            if (val < 0) {
                throw new Error("Rectangle height must be positive number.");
            }

            this._height = val;
        });

        Rectangle.prototype.__defineGetter__("height", function () {
            return this._height;
        });

        Rectangle.prototype.draw = function () {
            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.fillStyle = this.color;
                ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            }
        };

        return Rectangle;
    }());

    var Triangle = (function () {
        function Triangle(a, b, c, color) {
            if (a instanceof Vertex && b instanceof Vertex && c instanceof Vertex) {
                Shape.call(this, a, color);

                this.b = b;
                this.c = c;

                if (!(calc2DDistance(this.position, this.b) + calc2DDistance(this.position, this.c) > calc2DDistance(this.b, this.c)
                    && calc2DDistance(this.position, this.b) + calc2DDistance(this.b, this.c) > calc2DDistance(this.position, this.c)
                    && calc2DDistance(this.c, this.b) + calc2DDistance(this.position, this.c) > calc2DDistance(this.position, this.b))) {
                    throw new Error("The specified points does not form a valid triangle.");
                }
            } else {
                throw new Error("You did not specified enough parameters.");
            }
        }

        Triangle.prototype = Object.create(Shape.prototype);
        Triangle.prototype.constructor = Triangle;

        Triangle.prototype.toString = function () {
            var result = "Triangle - " + Shape.prototype.toString.call(this) + ", X2: "
                + this.b.x + "Y2: " + this.b.y + ", X3: " + this.c.x + ", Y3: " + this.c.y;
            return result;
        };

        Triangle.prototype.draw = function () {
            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                ctx.lineTo(this.b.x, this.b.y);
                ctx.lineTo(this.c.x, this.c.y);
                ctx.fill();
            }
        };

        return Triangle;
    }());

    var Circle = (function () {
        function Circle(center, radius, color) {
            Shape.call(this, center, color);
            this.radius = radius;
        }

        Circle.prototype = Object.create(Shape.prototype);
        Circle.prototype.constructor = Circle;

        Circle.prototype.toString = function () {
            var result = "Circle - " + Shape.prototype.toString.call(this) + ", Radius: " + this.radius;
            return result;
        };

        Circle.prototype.__defineSetter__("radius", function (val) {
            if (val < 0) {
                throw new Error("Circle radius must be positive number.");
            }

            this._radius = val;
        });

        Circle.prototype.__defineGetter__("radius", function () {
            return this._radius;
        });

        Circle.prototype.draw = function () {
            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
                ctx.fill();
            }
        };

        return Circle;
    }());

    var Line = (function () {
        function Line(a, b, color) {
            Shape.call(this, a, color);

            this.b = b;
        }

        Line.prototype = Object.create(Shape.prototype);
        Line.prototype.constructor = Line;

        Line.prototype.toString = function () {
            var result = "Line - " + Shape.prototype.toString.call(this) + " X2: "
                + this.b.x + ", Y2: " + this.b.y;
            return result;
        };

        Line.prototype.draw = function () {
            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.fillStyle = this.color;

                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                ctx.lineTo(this.b.x, this.b.y);
                ctx.closePath();
                ctx.stroke();
            }
        };

        return Line;
    }());

    var Segment = (function () {
        function Segment(a, b, color) {
            Shape.call(this, a, color);

            this.b = b;
        }

        Segment.prototype = Object.create(Shape.prototype);
        Segment.prototype.constructor = Segment;

        Segment.prototype.toString = function () {
            var result =  "Segment - " + Shape.prototype.toString.call(this) + " X2: "
                + this.b.x + ", Y2: " + this.b.y;
            return result;
        };

        Segment.prototype.draw = function () {
            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.fillStyle = this.color;

                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                ctx.lineTo(this.b.x, this.b.y);
                ctx.closePath();
                ctx.stroke();
            }
        };

        return Segment;
    }());

    var Point = (function Point() {
        function Point(position, color) {
            Shape.call(this, position, color);
        }

        Point.prototype.toString = function () {
            var result = "Point - " + Shape.prototype.toString.call(this);
            return result;
        };

        Point.prototype.draw = function () {
            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.fillStyle = this.color;
                ctx.fillRect(this.position.x, this.position.y, 1, 1);
            }
        };

        return Point;
    })();

    var Vertex = (function Vertex() {
        function Vertex(x, y) {
            this.x = x;
            this.y = y;
        }

        Vertex.prototype = {
            get x() {
                return this._x;
            },
            set x(val) {
                if (typeof val === "number") {
                    this._x = val;
                } else {
                    throw new Error("Argument must be number.");
                }
            }
        };

        Vertex.prototype.toString = function () {
            var result = "(" + this.x + ", " + this.y + ")";
            return result;
        };

        return Vertex;
    })();

    return {
        Rectangle: Rectangle,
        Triangle: Triangle,
        Circle: Circle,
        Segment: Segment,
        Line: Line,
        Point: Point,
        Vertex: Vertex
    }
})();