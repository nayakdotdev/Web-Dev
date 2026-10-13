function filterProducts(products,criterion){
    return products.filter(product=>product.category===criterion)
}
const products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Shirt", category: "Clothing", price: 1000 },
    { name: "Phone", category: "Electronics", price: 20000 },
    { name: "Jeans", category: "Clothing", price: 1500 }
]
const res=filterProducts(products,"Clothing")
console.log(res)