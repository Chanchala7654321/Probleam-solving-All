




let arr = [1, 5, 95, 0, 4, 7];

let newarr = [];
    for(let i = 0 ; i < arr.length; i++){
        // console.log(arr[i]);
        if(arr[i] > 3 && arr[i] < 8) {
        newarr.push(arr[i]);
    }
}

console.log(newarr);
