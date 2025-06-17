



let arr = [9, 8, 7, 6, 5, 4, 3];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i]; j++){
        if(arr[i] % j === 0){
            count += j ;
        }
    }
    if(count === arr[i]) {
        console.log(arr[i]);
    }
}