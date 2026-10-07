const color={
    1:"red",
    2:"green",
    3:"yellow",
    4:"blue",
    5:"purple"
}
let r1=Math.floor(Math.random()*5)+1;
let r2=Math.floor(Math.random()*5)+1;
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=color[r1]
    e.style.color=color[r2]
})