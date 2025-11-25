let arr = [5,3,8,1];
let filtered = filterRange(arr,1,4);

function filterRange(arr,min,max){
    return arr.filter(min => min < max);
}

function filterRangeInPlace(arr, min, max){
    for(let i = 0; i < arr.length; i++){
        let name = arr[i];

        if(name < min || name > max){
            arr.splice(i, 1);
            i--;
        }
    }
}
filterRangeInPlace(arr, 1, 4)
console.log(arr);

//console.log(filtered);
//console.log(arr);
