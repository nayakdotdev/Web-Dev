let b=document.getElementById("btn")
b.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="Content was Changed!"
})
b.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="Content was Changed again!"
})
b.addEventListener("mouseover",()=>{
    document.querySelector(".box").innerHTML="Mouse is on Me!"
})
b.addEventListener("mouseout",()=>{
    document.querySelector(".box").innerHTML="Mouse is out Me!"
})
b.addEventListener("contextmenu",()=>{
    document.querySelector(".box").innerHTML="Right click fired!"
})
document.addEventListener("keydown",(e)=>{
    console.log(e)
})