var shoppingcart ={
    books : 3 ,
    pens : 5 ,
    keyboartd : 2 ,
    mouser : 6,

    
}
var values = shoppingcart.mouser;
var values3 =shoppingcart["keyboartd"]
var properties = Object.keys(shoppingcart);
var values44 =Object.values(shoppingcart);
var propertynames = "pens";
var propertyvalues = shoppingcart[propertynames];
// console.log(propertynames , propertyvalues);

// console.log(values44);
// console.log(properties);
// console.log(values3)
// console.log(values);
// console.log(shoppingcart);
// shoppingcart.mouse =34 ;
// shoppingcart["mouse"] = 56;
shoppingcart[propertynames] = 3434;
console.log(shoppingcart);
