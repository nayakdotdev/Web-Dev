console.log("Hi I am Sanket")
console.log("I am from India")
setTimeout(() => {
    console.log("I am inside setTimeout")
}, 0);
setTimeout(() => {
    console.log("I am inside setTimeout 2")
}, 0);
console.log("Ending...")
const callback=(arg)=>{
    console.log(arg)
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script")
    sc.src=src
    sc.onload=callback("Sanket")
    document.head.append(sc)
}
loadScript("",(arg)=>{
    console.log(arg)
})