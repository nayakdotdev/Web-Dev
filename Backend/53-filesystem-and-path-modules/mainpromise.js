import fs from "fs/promises"
let a=await fs.readFile("sanket2.txt")
let b=await fs.appendFile("sanket2.txt","\n\n\nappending test content")
console.log(a.toString(),b)