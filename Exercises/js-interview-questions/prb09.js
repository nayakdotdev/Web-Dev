async function placeOrder(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Order Placed Successfully!")
        }, Math.random()*1000);
    })
}
(async function main(){
    let msg=await placeOrder()
    console.log(msg)
})()