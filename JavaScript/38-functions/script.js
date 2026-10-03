function about(name){
    console.log("Hey "+name+" you are nice")
    console.log("Hey "+name+" you are good")
    console.log("Hey "+name+" your tshirt is good")
}
about("Rohan")
about("Abhisek")
function sum(a,b,c=1){
    return a+b+c;
}
r1=sum(3,5)
r2=sum(4,6)
r3=sum(2,10,3)
console.log(r1,r2,r3)
const f1=(x)=>{
    console.log("Hey this is an Arrow Function: "+x)
}
f1(34)
f1(56)
f1(98)