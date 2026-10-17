console.log("Hello World")
let cont=document.body.firstElementChild
cont.lastElementChild.style.color="red"
cont.lastElementChild.style.backgroundColor="green"
cont.parentElement.style.backgroundColor="purple"
console.log(cont.childNodes)
console.log(cont.children)
cont.children[2].nextElementSibling.style.color="white"