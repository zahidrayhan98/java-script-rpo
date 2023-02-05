let num1 = 30;
let num2 =34;
console.log(num1, num2);
const temp = num1 ;
// num1 = num2; first approach
// num2 = temp ;
[num1, num2] = [num2 ,num1];

console.log(num1 ,num2);