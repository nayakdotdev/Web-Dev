console.log("This is Promises");
let prom1=new Promise((resolve,reject)=>{
    if(Math.random()<0.5)
        reject("Random number not in Favour1")
    else{
        setTimeout(() => {
            console.log("It's done bro1");
            resolve("Sanket1")
        }, 2000);
    }
})
let prom2=new Promise((resolve,reject)=>{
    if(Math.random()<0.5)
        reject("Random number not in Favour2")
    else{
        setTimeout(() => {
            console.log("It's done bro2");
            resolve("Sanket2")
        }, 2000);
    }
})
let prom3=Promise.allSettled([prom1,prom2])
prom3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
let prom4=Promise.race([prom1,prom2])
prom4.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
let prom5=Promise.any([prom1,prom2])
prom5.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})