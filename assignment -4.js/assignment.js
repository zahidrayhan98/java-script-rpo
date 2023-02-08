// problem -1//


function mindGame(number){
    const multi = number * 3;
    const add = multi + 10;
    const division = add / 2;
    const minus = division - 5;
    
    return minus;
    
}


//  problem 2///
 
function evenOdd(str) {
    let even = '';
    let odd = '';

    if (str.length % 2 === 0) {
        return 'even';
     
    }
     else if ( str.length % 2 ===1){
        return "odd";

     }
    
  }
 

//    problem -3/////
function isLGSeven(num) {
    let sum =0;
    if (num < 7) {
        sum =num- 7;
    }
    else if (num > 7){
        sum = num *2
        }
    return sum;
  }
  

// problem 4/////

function findingBadData(numbers) {
   
    let negativeCount = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        negativeCount++;
      } 
    }
    return negativeCount;
  }
 
//////  problem 5/////

function gemsToDiamond(first,second,third){
  const firsrtdiamond= first * 21;
  const seconddiamond = second * 32 ;
  const thirddiamond = third * 43 ;
  const totaldiamond= firsrtdiamond + seconddiamond + thirddiamond;
     
  if(totaldiamond >= 2000){
   return totaldiamond -2000;
 } else {
  return totaldiamond 
 }
 }
  const diamond  = gemsToDiamond(1,1,1);
  console.log(diamond);


 



  