Array.prototype.flatten = function doFlattening(){
    var newArr = this;
    var hasArray = true;
    var i = 0;

    while(hasArray == true){
        hasArray = false;
        
        for(i = 0; i < newArr.length; i += 1){
            if(Array.isArray(newArr[i]) == true){
                hasArray = true;
            }
        }
        
        newArr = [].concat.apply([], newArr);
    }
    
    return newArr;
};

var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
