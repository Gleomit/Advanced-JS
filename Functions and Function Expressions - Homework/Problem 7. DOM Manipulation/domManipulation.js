var domModule = (function domModule(){
    function appendChild(element, child){
        var elementType = typeof element;
        var childType = typeof child;

        if(childType === "string"){
            var i = 0;
            var foundElements = document.querySelectorAll(child);

            for(i; i <  foundElements.length; i += 1 ){
                foundElements[i].appendChild(element);
            }
        } else{
            child.appendChild(element);
        }
    }

    function removeChild(element, child){
        var elementType = typeof element;
        var childType = typeof child;

        if(elementType === "string"){
            var selectorElements = document.querySelectorAll(element);
            var i = 0;
            if(childType === "string"){
                for(i; i < selectorElements.length; i += 1){
                    var childsFound = selectorElements[i].querySelector(child);
                    childsFound.parentNode.removeChild(childsFound);
                    /*var j = 0;
                    for(j; j < childsFound.length; j += 1){
                        childsFound[j].parentNode.removeChild(childsFound[j]);
                    }*/
                }
            } else{
                for(i; i < selectorElements.length; i += 1){
                    selectorElements[i].removeChild(child);
                }
            }
        } else{
            if(childType === "string"){
                var elementsFound = element.querySelectorAll(child);
                for(node in elementsFound){
                    element.removeChild(node);
                }
            } else{
                element.removeChild(child);
            }
        }
    }

    function addHandler(element, eventType, eventHandler){
        if(typeof element === "string"){
            var elementsFound = document.querySelectorAll(element);
            var i = 0;

            for(i; i < elementsFound.length; i += 1){
                elementsFound[i].addEventListener(eventType, eventHandler);
            }
        } else{
            element.addEventListener(eventType, eventHandler);
        }
    }

    function retrieveElements(selector){
        return document.querySelectorAll(selector);
    }

    return {
        retrieveElements: retrieveElements,
        addHandler: addHandler,
        removeChild: removeChild,
        appendChild: appendChild
    }
}());

var liElement = document.createElement("li");
var elements = null;
// Appends a list item to ul.birds-list
domModule.appendChild(liElement, ".birds-list");

domModule.removeChild("ul.birds-list", "li:first-child");
// Adds a click event to all bird list items
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });
// Retrives all elements of class "bird"
elements = domModule.retrieveElements(".bird");