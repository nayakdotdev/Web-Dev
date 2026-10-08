function getRandomColors(){
    let v1=Math.ceil(Math.random()*255)
    let v2=Math.ceil(Math.random()*255)
    let v3=Math.ceil(Math.random()*255)
    return `rgb(${v1},${v2},${v3})`
}
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=getRandomColors()
    e.style.color=getRandomColors()
})