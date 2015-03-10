function Vector(dimensionsArray){
    this.dimensions = dimensionsArray;
    this.dimensionsCount = function (){
        return this.dimensions.length;
    };
}

Vector.prototype.add = function addVector(other){
    if(this.dimensionsCount() != other.dimensionsCount()){
        throw new Error("The dimensions of vector and other must always be the same.");
    }

    var i = 0;
    var result = [];

    for(i; i < this.dimensionsCount(); i += 1){
        result.push(this.dimensions[i] + other.dimensions[i]);
    }

    return new Vector(result);
};

Vector.prototype.subtract = function subtractVector(other){
    if(this.dimensionsCount() != other.dimensionsCount()){
        throw new Error("The dimensions of vector and other must always be the same.");
    }

    var i = 0;
    var result = [];

    for(i; i < this.dimensionsCount(); i += 1){
        result.push(this.dimensions[i] - other.dimensions[i]);
    }

    return new Vector(result);
};

Vector.prototype.dot = function dotVector(other){
    if(this.dimensionsCount() != other.dimensionsCount()){
        throw new Error("The dimensions of vector and other must always be the same.");
    }

    var i = 0;
    var result = 0;

    for(i; i < this.dimensionsCount(); i += 1){
        result += this.dimensions[i] * other.dimensions[i];
    }

    return result;
};

Vector.prototype.norm = function normVector(){
    var i = 0;
    var result = 0;

    for(i; i < this.dimensionsCount(); i += 1){
        result += this.dimensions[i] * this.dimensions[i];
    }

    result = Math.sqrt(result);

    return result;
};

Vector.prototype.toString = function toString(){
    return this.dimensions;
};

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

console.log(a.toString());
console.log(c.toString());

console.log();

// The following throw errors
var wrong = new Vector();
var anotherWrong = new Vector([]);

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.add(b);
console.log(result.toString());

//a.add(c); // Error, uncomment it to see the result

console.log();

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.subtract(b);
console.log(result.toString());

console.log();

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.dot(b);
console.log(result.toString());

//a.dot(c); // Error, uncomment it to see the result

console.log();

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
