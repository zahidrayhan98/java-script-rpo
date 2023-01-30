function burger(money){
   
    var burgerprice = 50;
    var quantity = money / burgerprice ;
    return quantity ;
}
var mytaka = 5000;
var  burgers = burger(mytaka);
console.log("burger" , burgers);