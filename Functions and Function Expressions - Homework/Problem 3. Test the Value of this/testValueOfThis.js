function testContext() {
    return this;
}

function testTheContext(param) {
    this._param = param;
    testContext.apply(this, arguments);
}

var test = null;

console.log("global scope:");
console.log(testContext());

console.log("\n\n------------------------------\n\n");

console.log("from another function");
console.log(testTheContext());

console.log("\n\n------------------------------\n\n");

testTheContext.prototype = new testContext();

test = new testTheContext("Golf");

console.log("as an object");
console.log(test);