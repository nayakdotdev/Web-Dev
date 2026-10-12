let s="Missisippi"
let c=0
for(const i of s){
    if("aeiouAEIOU".includes(i))
        c++
}
console.log(c)