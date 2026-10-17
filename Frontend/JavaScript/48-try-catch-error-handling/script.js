let a=prompt("Enter first number")
let b=prompt("Enter second number")
if(isNaN(a)||isNaN(b))
    throw SyntaxError("Sorry this is Not Allowed")
let sum=parseInt(a)+parseInt(b)
function main(){
    try{
        console.log(sum*x)
        return true
    }
    catch(error){
        console.log("Error aagya bro")
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
        return false
    }
    finally{
        console.log("Script Execution done")
    }
}
main()