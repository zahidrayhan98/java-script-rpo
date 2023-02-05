function woodcal(chairquantity,tablequantity,bedquantity){
    const perchair = 3;
    const pertable =5;
    const perbed =8;
    const chairwood =perchair * chairquantity;
    const tablewood = pertable * tablequantity;
    const bedwood = perbed *bedquantity;
    const maxwood = chairwood + tablewood + bedwood;
    return maxwood;

}

const totalwood=woodcal(1,0,4,);
console.log(totalwood);
