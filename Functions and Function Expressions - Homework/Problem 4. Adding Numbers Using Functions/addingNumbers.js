function add(numOne) {
    var sum = numOne;

    function inner(numTwo) {
        sum += numTwo;
        return inner;
    }

    inner.toString = function() {
        return sum;
    };

    return inner;
}

var addTwo = add(2);
console.log(+addTwo);

addTwo = add(2);
console.log(+addTwo(3)(5)(1)(7));