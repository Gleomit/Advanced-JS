function printArgsInfo(){
    var i = 0;
    for(i; i < arguments.length; i += 1){
        console.log(arguments[i] + "(" + typeof(arguments[i]) + ")");
    }
}

//Call without arguments
printArgsInfo.call();

console.log("----------------------");

//Call with arguments
printArgsInfo.call("someString", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});

console.log("----------------------");

//Apply without arguments
printArgsInfo.apply();

console.log("----------------------");

//Apply with arguments
printArgsInfo.apply("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});