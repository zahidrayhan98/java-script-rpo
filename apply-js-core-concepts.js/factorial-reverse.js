function factortial (number){
    let result =1;
    for ( let i =number ; i >= 1; i--){
    result = result * i ;
    console.log (i);
    }
    return result;
}
const num =5 ;
const fake = factortial(num);
console.log( num , fake);