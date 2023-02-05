 const num = [12,34,45,23,65,67,34,56,98,23,12,33,44];
// const partial = num.slice(2,8);
// console.log(partial);
// console.log(num);
const partial = num.splice(2,5,56,87,65)
console.log(partial);
console.log(num);