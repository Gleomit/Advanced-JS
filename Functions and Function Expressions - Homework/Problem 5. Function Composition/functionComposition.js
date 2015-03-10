function add(x, y) {
    return x + y;
}

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

var compose = function(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
};

console.log(compose(addOne, add)(5, 15));