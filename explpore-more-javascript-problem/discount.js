function ticketprice(ticketquantity){
    const first100 =100;
    const second100 = 90;
    const restticket =70;
    if (ticketquantity<=100){
        const price= ticketquantity * first100;
        return price;

    }
    else if(ticketquantity<=200){
     const first100price = 100 * first100;
     const ticketquantity2 = ticketquantity -100;
     const ticket3price = ticketquantity2 * second100;
     const totalprice1 = ticket3price + first100price;
     return totalprice1;   
    }
    else{
        const first100price = 100* first100;
        const second100price = 100 * second100;
        const ticket3 = ticketquantity - 200;
        const ticketprice3 =ticket3 *restticket;
        tortalpriceamount = first100price + second100price +ticketprice3;
    return tortalpriceamount;
    }

}
const ticket1 = ticketprice(220);
console.log (ticket1);