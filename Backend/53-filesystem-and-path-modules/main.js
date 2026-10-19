const fs=require("fs")
// console.log(fs) 

console.log("starting")
// fs.writeFileSync("sanket.txt","test file 1")
fs.writeFile("sanket2.txt","test file 2",()=>{
    console.log("done")
    fs.readFile("sanket2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("sanket.txt"," appending test content ",(e,d)=>{
    console.log(e,d)
})
console.log("ending")