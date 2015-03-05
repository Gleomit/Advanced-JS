function add(x, y) {
    return x + y;
}

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g){
    return function(num){
        return g(num) - f(num);
    }
}

console.log(compose(addOne, square)(5));