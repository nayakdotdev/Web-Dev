let n=prompt("Enter a Number")
function factFor(n){
    let f=1
    for(i=1;i<=n;i++)
        f*=i
    alert(`Factorial of ${n} is ${f}`)
}
function factReduce(n){
    let arr=Array.from(Array(Number(n)+1).keys())
    const fact=(x,y)=>{
        return x*y
    }
    alert(`Factorial of ${n} is ${arr.slice(1).reduce(fact,1)}`)
}
factFor(n)
factReduce(n)