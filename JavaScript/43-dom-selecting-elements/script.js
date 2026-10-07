console.log("Hello Guys")
let boxes=document.getElementsByClassName("box")
boxes[2].style.backgroundColor="red"
document.getElementById("greenbox").style.backgroundColor="green"
document.querySelector(".box").style.backgroundColor="green"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})
console.log(document.getElementsByTagName("div"))
e=document.getElementsByTagName("div")
console.log(e[5].matches("#greenbox"))
console.log(e[2].matches("#greenbox"))
console.log(e[2].closest(".container"))
console.log(e[2].closest("html"))
console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))