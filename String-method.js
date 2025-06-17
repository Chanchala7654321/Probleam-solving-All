



//  string method


// let a = 5;
// let b = 4 ;
// let c = 7 ;

// console.log(`${a + b + c}`);      // it is prfoming methmetical task by using backtice 








// // how to acsec the string value  

// let s = "navgurukul";
// console.log(s[1]);






// // concat String method

// let a = "AB";
// let b = "CD";

// let con = a.concat(b);

// console.log(con);







// includes string method 

// let a = "Chanchala";

// console.log(a.includes("b"));      // it is giving boolion value is incloude in a string or not 







// // toUpperCase string method 

// let s = "Chanchala";
// console.log(s.toUpperCase());







// // toLowerCase string method 

// let s = "CHANCHALA";
// console.log(s.toLowerCase());






//     // slice string method

// let b = "Navgurukul";

// console.log(b.slice(3));
// console.log(b.slice(3, 10));    // it is excuiting the value or copy the value 








//   // length string method 

// let a = "Chanchala!";
// console.log(a.length);    // it is giving onsly length










//   // reverse string question ===


// let a = "Hello!";

// console.log(a.length);
// let st = "";
// for(let i = a.length - 1; i >= 0; i--){
//     console.log(a[i]);
//     st += a[i];
// }

// console.log(st);











//  // solve with function ====

// function myFun(str){
//     let st = "";
//     for(let i = str.length - 1; i >= 0 ; i--){
//         console.log(str[i]);
//         st += str[i];
        
//     }
//     console.log(st);
    
// }
// myFun("Chanchala!");











//  // solve with method ====


let str = "Chanchala!";

let rev = str.split("").reverse().join("");
console.log(rev);










