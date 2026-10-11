let a=prompt("Enter first number")
let b=prompt("Enter second number")
if(isNaN(a)||isNaN(b))
    throw SyntaxError("Sorry this is Not Allowed")
let sum=parseInt(a)+parseInt(b)
try{
    console.log(sum*x)
}
catch(error){
    console.log("Error aagya bro")
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}