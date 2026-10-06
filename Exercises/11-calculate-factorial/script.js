let n=prompt("Enter a Number")
let f=1
for(i=1;i<=n;i++)
    f*=i
alert(`Factorial of ${n} is ${f}`)
let arr=[]
for(i=1;i<=n;i++)
    arr.push(i)
const fact=(x,y)=>{
    return x*y
}
alert(`Factorial of ${n} is ${arr.reduce(fact)}`)