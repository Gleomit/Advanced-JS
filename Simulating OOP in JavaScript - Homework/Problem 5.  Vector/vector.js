var a = null;
var b = null;
var c = null;
var wrong = null;
var anotherWrong = null;
var result = null;

function Vector(dimensionsArray){
    this.dimensions = dimensionsArray;
    this.dimensionsCount = function (){
        return this.dimensions.length;
    };
}

Vector.prototype.add = function addVector(other){
    if(other instanceof Vector) {
        if (this.dimensionsCount() != other.dimensionsCount()) {
            throw new Error("The dimensions of vector and other must always be the same.");
        }

        var i = 0;
        var result = [];

        for (i; i < this.dimensionsCount(); i += 1) {
            result.push(this.dimensions[i] + other.dimensions[i]);
        }

        return new Vector(result);
    } else{
        throw new Error("addVector function expects Vector as parameter.");
    }
};

Vector.prototype.subtract = function subtractVector(other){
    if(other instanceof Vector) {
        if (this.dimensionsCount() != other.dimensionsCount()) {
            throw new Error("The dimensions of vector and other must always be the same.");
        }

        var i = 0;
        var result = [];

        for (i; i < this.dimensionsCount(); i += 1) {
            result.push(this.dimensions[i] - other.dimensions[i]);
        }

        return new Vector(result);
    } else{
        throw new Error("substractVector function expects Vector as parameter.");
    }
};

Vector.prototype.dot = function dotVector(other){
    if(other instanceof Vector) {
        if (this.dimensionsCount() != other.dimensionsCount()) {
            throw new Error("The dimensions of vector and other must always be the same.");
        }

        var i = 0;
        var result = 0;

        for (i; i < this.dimensionsCount(); i += 1) {
            result += this.dimensions[i] * other.dimensions[i];
        }

        return result;
    } else{
        throw new Error("dotVector function expects Vector as parameter.");
    }
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

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

console.log(a.toString());
console.log(c.toString());

console.log();

// The following throw errors
wrong = new Vector();
anotherWrong = new Vector([]);

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
result = a.add(b);
console.log(result.toString());

//a.add(c); // Error, uncomment it to see the result

console.log();

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
result = a.subtract(b);
console.log(result.toString());

console.log();

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
result = a.dot(b);
console.log(result.toString());

//a.dot(c); // Error, uncomment it to see the result

console.log();

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
