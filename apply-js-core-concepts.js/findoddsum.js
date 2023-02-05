function oddsum (numbers){
    let sum = 0;
    for( let i =0 ; i< numbers.length ; i++){
        const index = i;
        const element = numbers [index];
        sum = sum + element;
        // console.log(index , element, sum) ; 
    }
    return sum; 
}
function getoddnumsum (numbers){
    const oddnumbers = [];
    
    for( let i =0 ; i < numbers.length; i ++){
        
     const index = i;
     const element = numbers [i];
     
     if (element % 2 ===1){

     }
     console.log(index , element);
     
     oddnumbers.push (element);   



    }
    return oddnumbers;
}
const mynumbers =[12,34,45,34,45,87,99];
 const oddnumbers =getoddnumsum(mynumbers);
 const oddnumsum =oddsum (oddnumbers);
 console.log (oddnumsum)