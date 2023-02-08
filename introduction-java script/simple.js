function sum(i){
    if (i=== 0){
        return 1;
    }
    return i + sum(i-1);

}
const num = sum(5);
// console.log(num);

function factorial (i){
    if (i ==1){
        return 1;
    }
    return i * factorial(i-1);
}
const number = factorial(5);
console.log(number);