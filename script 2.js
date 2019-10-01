function arrayUnique(arr) {
    var a = arr.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var arr1 = [1, 2, 3];
var arr2 = [100, 2, 1, 10];
var arr3 = arrayUnique(arr1.concat(arr2));

function regiment(arr3){
    for(var i = 0; i < arr3.length; i++){
        for(var j = 0; j < arr3.length; j++){
            var x = arr3[j];
            var y = arr3[j+1];
            if(x > y){
                x = x + y;
                y = x - y;
                x = x - y;
            }

        }
    }
    return arr3;
}
console.log(regiment(arr3))