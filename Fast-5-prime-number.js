










// for(let i = 1 ; i > 0 ; i++){
//     let sum  = 0 ;
//     for(let j = 1 ; j < i ; j++){
//         if(i % j == 0){
//             sum += j;
//         }
//     }
//     if(sum === i){
//         console.log(sum);
        
//     }
// }
















let count = 0;

for (let i = 2; count < 5; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            sum += j;
        }
    }
    if (sum === i) {
        console.log(i);
        count++;
    }
}







