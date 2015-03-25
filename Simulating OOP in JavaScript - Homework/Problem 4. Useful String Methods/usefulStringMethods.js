var example = null;

String.prototype.startsWith = function startsWith (substring) {
    if(typeof substring === "string") {
        if (substring.length < this.length) {
            return (this.substring(0, substring.length) === substring);
        } else {
            return false;
        }
    } else{
        throw new Error("The specified parameter is not a string.");
    }
};

String.prototype.endsWith = function endsWith(substring){
    if(typeof substring === "string") {
        if (substring.length < this.length) {
            return (this.substring(this.length - substring.length) === substring);
        } else {
            return false;
        }
    } else{
        throw new Error("The specified parameter is not a string.");
    }
};

String.prototype.left = function left(count){
    if(typeof count === "number") {
        if (count > this.length) {
            return this.toString();
        } else {
            return this.substring(0, count);
        }
    } else{
        throw new Error("The specified parameter is not a number.");
    }
};

String.prototype.right = function right(count){
    if(typeof count === "number") {
        if (count > this.length) {
            return this.toString();
        } else {
            return this.substring(this.length - count);
        }
    } else{
        throw new Error("The specified parameter is not a number.");
    }
};

String.prototype.padLeft = function padLeft(count, character){
    if(typeof count === "number") {
        if (count > this.length) {
            var paddingCharacter = " ";

            if (character) {
                paddingCharacter = character;
            }

            return paddingCharacter.repeat(count - this.length) + this.toString();
        } else {
            return this.toString();
        }
    }  else{
        throw new Error("The specified parameter is not a number.");
    }
};

String.prototype.padRight = function padRight(count, character){
    if(typeof count === "number") {
        if (count > this.length) {
            var paddingCharacter = " ";

            if (character) {
                paddingCharacter = character;
            }

            return this.toString() + paddingCharacter.repeat(count - this.length);
        } else {
            return this.toString();
        }
    } else{
        throw new Error("The specified parameter is not a number.");
    }
};

String.prototype.repeat = function repeat(count){
    if(typeof count === "number") {
        var result = "";
        var i = 0;

        for (i; i < count; i += 1) {
            result += this.toString();
        }

        return result;
    } else{
        throw new Error("The specified parameter is not a number.");
    }
};

example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log("\n");

example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log("\n");

example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));

console.log("\n");

example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

console.log("\n");

// Combinations must also work
example = "abcdefgh";
console.log(example.left(5).right(2));

console.log("\n");

hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log("\n");

hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

console.log("\n");

character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

console.log("\n");

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));