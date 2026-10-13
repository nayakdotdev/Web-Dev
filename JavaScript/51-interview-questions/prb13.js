function calculateTotal(products){
    return products.reduce((total,product)=>{
        return total+product.quantity*product.price
    },0)
}
const cart=[
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
]
console.log(calculateTotal(cart))