async function brewCoffee(coffee){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(coffee+" is Ready!")
        }, Math.random()*1000);
    })
}
(async function main(){
    let msg=await brewCoffee("Nescafe")
    console.log(msg)
})()