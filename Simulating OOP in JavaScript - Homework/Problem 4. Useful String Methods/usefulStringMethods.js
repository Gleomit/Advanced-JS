String.prototype.startsWith = function startsWith (substring) {
    if(substring.length < this.length){
        var i = 0;
        var result = true;

        for(i; i < substring.length; i += 1) {
            if(this.charAt(i) != substring.charAt(i)){
                result = false;
                break;
            }
        }

        return result;
    } else{
        return false;
    }
};

String.prototype.endsWith = function endsWith(substring){
    if(substring.length < this.length){
        var i = this.length - substring.length;
        if(this.substring(i) === substring){
            return true;
        }else{
            return false;
        }
    } else{
        return false;
    }
};

String.prototype.left = function left(count){
    if(count > this.length){
        return this.toString();
    } else{
        var i = 0;
        var result = "";

        for(i; i < count; i += 1){
            result += this.charAt(i);
        }

        return result;
    }
};

String.prototype.right = function right(count){
    if(count > this.length){
        return this.toString();
    } else{
        var i = this.length - count;
        var result = "";

        for(i; i < this.length; i += 1){
            result += this.charAt(i);
        }

        return result;
    }
};

String.prototype.padLeft = function padLeft(count, character){
    var paddingCharacter = " ";
    if(character){
        paddingCharacter = character;
    }

    return paddingCharacter.repeat(count) + this.toString();
};

String.prototype.padRight = function padRight(count, character){
    var paddingCharacter = " ";
    if(character){
        paddingCharacter = character;
    }

    return this.toString() + paddingCharacter.repeat(count);
};

String.prototype.repeat = function repeat(count){
    var result = "";
    var i = 0;

    for(i; i < count; i += 1){
        result += this.toString();
    }

    return result;
};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log("\n");

var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log("\n");

var example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));

console.log("\n");

var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

console.log("\n");

// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));

console.log("\n");

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log("\n");

var hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

console.log("\n");

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

console.log("\n");

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));