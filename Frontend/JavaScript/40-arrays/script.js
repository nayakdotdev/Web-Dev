let a=[1,2,4,5,7]
a[0]=69
console.log(a)
console.log(a.length)
console.log(a[0])
console.log(a[2])
console.log(a[4])
console.log(a.toString())
console.log(a.join(" and "))
console.log(a.pop())
console.log(a.push("Sanket"))
console.log(a.shift())
console.log(a.unshift("Rahul"))
console.log(a)
let a1=[1,2,3]
let a2=[7,8,9]
let a3=[4,5,6]
console.log(a1.concat(a2,a3))
console.log(a.splice(1,3))
let ar=[1,93,5,6,88]
for(i=0;i<ar.length;i++)
    console.log(ar[i])
ar.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})
let ob={
    a:1,
    b:2,
    c:3
}
for(const key in ob){
    if(Object.hasOwnProperty.call(ob,key)){
        const ele=ob[key]
        console.log(key,ele)
    }
}
for(const val of ar)
    console.log(val)
let newAr=ar.map(e=>{
    return e**2
})
console.log(newAr)
const greaterThanSeven=e=>{
    if(e>7)
        return true;
    return false;
}
console.log(ar.filter(greaterThanSeven))
const add=(x,y)=>{
    return x+y
}
let ar2=[1,2,3,4,5,6]
console.log(ar2.reduce(add))