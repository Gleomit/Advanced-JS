function consoleModule(){
    function writeLine(){
        if(arguments.length === 1){
            console.log(arguments[0]);
        }
        else{

        }
    }

    function writeError(){
        if(arguments.length === 1){

        }
        else{

        }
    }

    function writeWarning(){
        if(arguments.length === 1){

        }
        else{

        }
    }

    function writeInfo(){
        if(arguments.length === 1){

        }
        else{

        }
    }

    return {
        writeInfo: writeInfo,
        writeWarning: writeWarning,
        writeLine: writeLine,
        writeError: writeError
    }
}

var specialConsole = new consoleModule();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});