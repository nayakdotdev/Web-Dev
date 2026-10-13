async function doubleArr(arr) {
    return arr.map(async(num)=>{
        await new Promise((resolve)=>{
            setTimeout(resolve,500)
        })
        return num*2
    })
}
(async function main(){
    let a=[1,2,3,4,5]
    let promises=await doubleArr(a)
    let res=await Promise.all(promises)
    console.log(res)
})()