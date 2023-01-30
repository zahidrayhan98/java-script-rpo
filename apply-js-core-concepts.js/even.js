function iseven (num){
    const remainder = num % 2;
    if(remainder== 0){
        return true ;
    }
    else {
        return false ;
    }
    
}
const numberone = iseven(24);
console.log(numberone);
const oddy = iseven(45);
console.log(oddy);