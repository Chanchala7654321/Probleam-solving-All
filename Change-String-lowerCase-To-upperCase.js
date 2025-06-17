


let str = "TcSh iS my worlD" ;
let strnew = "";


for(let i = 0 ; i < str.length ; i++){
    if(str[i] >= "a" && str[i] <= "z"){
        strnew += str[i]. toUpperCase();
    }
    else if(str[i] >= "A" && str[i] <= "Z "){
        strnew += str[i]. toLowerCase();
    }
    else {
        strnew += str[i];
    }

}
console.log(strnew);

