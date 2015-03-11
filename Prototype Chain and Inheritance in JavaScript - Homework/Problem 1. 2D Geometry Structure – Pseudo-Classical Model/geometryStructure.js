Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

function Shape(color){
    this._color = color;
}

function Circle(){

}

function Rectangle(){

}

function Triangle(){

}

function Line(){

}

function Segment(){

}

function Point(){

}

Rectangle.extends(Shape);
Triangle.extends(Shape);
Line.extends(Shape);