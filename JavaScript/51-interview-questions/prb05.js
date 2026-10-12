let nums=[1,2,3,4,-5,-6,7,8]
let s=0
for(const i of nums){
    if(i<0)
        break
    s+=i
}
console.log(s)