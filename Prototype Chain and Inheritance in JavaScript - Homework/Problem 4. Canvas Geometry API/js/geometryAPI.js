var GeometryAPI = (function() {
    var items = [];

    var currentMovableElement = null;

    function addItem(shapeType, additionalInfo){
        switch(shapeType){
            case "Triangle":
                items.push(new GeometryModule.Triangle(new GeometryModule.Vertex(additionalInfo[0], additionalInfo[1]),
                    new GeometryModule.Vertex(additionalInfo[2], additionalInfo[3]), new GeometryModule.Vertex(additionalInfo[4], additionalInfo[5]),
                    additionalInfo[6]));
                break;
            case "Circle":
                items.push(new GeometryModule.Circle(new GeometryModule.Vertex(additionalInfo[0], additionalInfo[1]),
                    additionalInfo[2], additionalInfo[3]));
                break;
            case "Rectangle":
                items.push(new GeometryModule.Rectangle(new GeometryModule.Vertex(additionalInfo[0], additionalInfo[1]),
                    additionalInfo[2], additionalInfo[3], additionalInfo[4]));
                break;
            case "Line":
                items.push(new GeometryModule.Line(new GeometryModule.Vertex(additionalInfo[0], additionalInfo[1]),
                    new GeometryModule.Vertex(additionalInfo[2], additionalInfo[3]), additionalInfo[4]));
                break;
            case "Point":
                items.push(new GeometryModule.Point(new GeometryModule.Vertex(additionalInfo[0], additionalInfo[1]),
                    additionalInfo[2]));
                break;
            case "Segment":
                items.push(new GeometryModule.Segment(new GeometryModule.Vertex(additionalInfo[0], additionalInfo[1]),
                    new GeometryModule.Vertex(additionalInfo[2], additionalInfo[3]), additionalInfo[4]));
                break;
        }
    }

    function removeItem(){
        if(items.length > 0) {
            items.pop();
        } else{
            alert("There are no items to remove.");
        }
    }

    function drawTheShapes(){
        var i = 0;

        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        for(i; i < items.length; i += 1){
            items[i].draw();
        }
    }

    function moveElementUp(){
        if(items.length > 1) {
            if (currentMovableElement == null) {
                currentMovableElement = items[(items.length > 1 ? items.length - 1 : 0)];
            }
            if (items.indexOf(currentMovableElement) === 0) {
                currentMovableElement = null;
            } else {
                var movableItemIndex = items.indexOf(currentMovableElement);
                var nextItemIndex = items.indexOf(currentMovableElement) - 1;

                var nextItem = items[nextItemIndex];

                items = items.slice(0, nextItemIndex)
                    .concat([currentMovableElement])
                    .concat([nextItem])
                    .concat(items.slice(movableItemIndex + 1, items.length));
            }
        }
    }

    function moveElementDown(){
        if(items.length > 1){
            if (currentMovableElement == null) {
                currentMovableElement = items[0];
            }

            if (items.indexOf(currentMovableElement) === items.length - 1) {
                currentMovableElement = null;
            } else {
                var movableItemIndex = items.indexOf(currentMovableElement);
                var nextItemIndex = items.indexOf(currentMovableElement) + 1;

                var nextItem = items[nextItemIndex];

                items = items.slice(0, movableItemIndex)
                    .concat([nextItem])
                    .concat([currentMovableElement])
                    .concat(items.slice(nextItemIndex + 1, items.length));
            }
        }
    }

    function displayShapesInfo(){
        document.getElementById("itemsInfo").value = items.join("\n").toString();
    }

    return {
        addItem: addItem,
        drawTheShapes: drawTheShapes,
        displayShapesInfo: displayShapesInfo,
        removeItem: removeItem,
        moveItemUp: moveElementUp,
        moveItemDown: moveElementDown
    }
})();