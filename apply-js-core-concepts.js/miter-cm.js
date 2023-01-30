function metertocm ( meter){
    const meterone = meter * 100 ;
    return meterone ;


}
const metervalue = 7;
const cmvalue = metertocm(metervalue);
console.log("convert", cmvalue);