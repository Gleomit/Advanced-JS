function createImage(filePath){
    var imageResult = new Image();
    imageResult.src = filePath;
    return imageResult;
}

function areColliding(objectOne, objectTwo) {
    return ((objectOne.x + objectOne.width >= objectTwo.x &&
        objectOne.x <= objectTwo.x + objectTwo.width &&
        objectOne.y + objectOne.height >= objectTwo.y &&
        objectOne.y <= objectTwo.y + objectTwo.height)
    ||
        (objectTwo.x + objectTwo.width >= objectOne.x &&
        objectTwo.x <= objectOne.x + objectOne.width &&
        objectTwo.y + objectTwo.height >= objectOne.y &&
        objectTwo.y <= objectOne.y + objectOne.height));
}