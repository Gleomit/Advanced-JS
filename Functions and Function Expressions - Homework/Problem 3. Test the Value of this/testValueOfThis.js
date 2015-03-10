function testContext() {
    return this;
}

console.log("global scope:");
console.log(testContext());

console.log("\n\n------------------------------\n\n");

function testTheContext(param) {
    this._param = param;
    testContext.apply(this, arguments);
}

console.log("from another function");
console.log(testTheContext());

console.log("\n\n------------------------------\n\n");

testTheContext.prototype = new testContext();

var test = new testTheContext("Golf");

console.log("as an object");
console.log(test);