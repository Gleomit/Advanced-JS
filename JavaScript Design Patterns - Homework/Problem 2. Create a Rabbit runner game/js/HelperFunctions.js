function createImage(filePath){
    var imageResult = new Image();
    imageResult.src = filePath;
    return imageResult;
}

function areColliding(objectOne, objectTwo) {
    if (objectOne.x + objectOne.width >= objectTwo.x &&
        objectOne.x <= objectTwo.x + objectTwo.width &&
        objectOne.y + objectOne.height >= objectTwo.y &&
        objectOne.y <= objectTwo.y + objectTwo.height){

        return true;
    } else{
        return false;
    }
}