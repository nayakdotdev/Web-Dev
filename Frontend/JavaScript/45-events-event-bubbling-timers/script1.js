document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Child was Clicked!")
})
document.querySelector(".childContainer").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Child Container was Clicked!")
})
document.querySelector(".container").addEventListener("click",(e)=>{
    alert("Container was Clicked!")
})
function getRandomColor(){
    let v1=Math.ceil(Math.random()*255)
    let v2=Math.ceil(Math.random()*255)
    let v3=Math.ceil(Math.random()*255)
    return `rgb(${v1},${v2},${v3})`
}
let a=setInterval(() => {
    document.querySelector(".childContainer").style.backgroundColor=getRandomColor()
}, 1000);
console.log(a)
let b=setTimeout(() => {
    document.querySelector(".container").style.backgroundColor=getRandomColor()
}, 5000);
console.log(b)