





let arr = [1, 2, "a", "b"];
let neArr = []
for(let i = 0 ; i < arr.length ; i++){
    // console.log(arr[i]);

    if(typeof arr[i] === "string"){
        continue;
    }
    else {
        neArr.push(arr[i])
    }

}

console.log(neArr);





