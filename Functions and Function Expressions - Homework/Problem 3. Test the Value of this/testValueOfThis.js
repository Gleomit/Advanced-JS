function testContext(){
    console.log(this);
}

//In global score
testContext();
console.log("\n\n\n\n\n");
//As an object
(new testContext());
console.log("\n\n\n\n\n");
//Inside another function
(function (){
    testContext();
})();