const shoppinglist =[
    {name:'shirt', price:1200,quantity:2},
    {name:"pant", price :2500,quantity:4},
    {name:"belt", price:345,quantity:5 },
     ]
5unction shoppingcart(product){
    let sum =0 ;
    for (i =0; i<product.length; i++){
        const products = product[i];
        const totalcost = product.price * product.quantity
        sum = sum + totalcost
        }
        return sum;
}
const list =shoppingcart(shoppinglist);
console.log(list);