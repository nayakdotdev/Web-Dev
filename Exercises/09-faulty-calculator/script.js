let a=Number(prompt("Enter a Number"))
let b=Number(prompt("Enter a Number"))
let op=prompt("Enter Operator")
if(Math.random()<0.1){
    if(op=="+")
        console.log(a-b)
    else if(op=="*")
        console.log(a+b)
    else if(op=="-")
        console.log(a/b)
    else if(op=="/")
        console.log(a**b)
}
else{
    if(op=="+")
        console.log(a+b)
    else if(op=="*")
        console.log(a*b)
    else if(op=="-")
        console.log(a-b)
    else if(op=="/")
        console.log(a/b)
}