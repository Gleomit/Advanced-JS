var specialConsole = (function consoleModule(){

    function writeLine(){
        writeOnConsole(arguments);
    }

    function writeError(){
        writeOnConsole(arguments);
    }

    function writeWarning(){
        writeOnConsole(arguments);
    }

    function writeInfo(){
        writeOnConsole(arguments);
    }

    function validatePlaceholders(placeholders, numArguments){
        placeholders.sort();
        var i = 0;
        for(i; i < numArguments; i += 1){
            var currentMatch = placeholders[i].match(/\d+/)[0];
            if(currentMatch != i){
                throw new Error("Specified invalid placeholder index.");
            }
        }
    }

    function writeOnConsole(arguments){
        if(arguments.length === 1){
            if(/\{\d+\}/g.test(arguments[0])){
                throw new Error("Not enought parameters specified.");
            } else {
                console.log(arguments[0]);
            }
        } else{
            if(arguments[0].match(/\{\d+\}/g).length != arguments.length - 1){
                throw new Error("Not enought parameters specified.");
            }

            var argumentPlaceholders = arguments[0].match(/\{(\d+)\}/g);
            validatePlaceholders(argumentPlaceholders, arguments.length - 1);

            var theArguments = [];
            var i = 1;

            for(i; i < arguments.length; i += 1){
                theArguments.push(arguments[i]);
            }

            i = 0;
            for(i; i < argumentPlaceholders.length; i += 1){
                arguments[0] = arguments[0].replace(argumentPlaceholders[i], theArguments[argumentPlaceholders[i].match(/\d+/)].toString());
            }

            console.log(arguments[0]);
        }
    }

    return {
        writeInfo: writeInfo,
        writeWarning: writeWarning,
        writeLine: writeLine,
        writeError: writeError
    }
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});
