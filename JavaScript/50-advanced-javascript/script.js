async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
(async function main(){
    let a=await sleep()
    console.log(a);
    let b=await sleep()    
    console.log(b);
})()
let [x,y]=[1,2]
console.log(x,y)
let [a,b,...rest]=[1,2,3,4,5,6,7,8]
console.log(a,b,rest)
let obj={
    p:1,
    q:2,
    r:3
}
let {p,q}=obj
console.log(p,q)