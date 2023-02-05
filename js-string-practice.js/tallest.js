function tallestman(numbers){
    let largest = 0 ;
  for ( let i =0 ; i < numbers.length ; i++){
    const index =i ;
    const element = numbers[index];
    if ( element > largest){
        largest = element ;
    }
  }
  return largest ; 
}


const tall = [34,54,76,98,23.98,34,65, 1223]
const tallest = tallestman(tall);
console.log(tallest)