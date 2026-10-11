let obj={
    a:1,
    b:"Sanket"
}
console.log(obj)
let animal={
    eats:true
}
let rabbit={
    jumps:true
}
rabbit.__proto__=animal;
console.log(rabbit)
class Animal{
    constructor(name){
        this.name=name
        console.log("Object is Created")
    }
    eats(){
        console.log("Kha raha hu bro")
    }
    jumps(){
        console.log("Kood raha hu bro")
    }
}
class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object Created and its a Lion")
    }
}
let a=new Animal("Bunny")
console.log(a)
let l=new Lion("Shera")
console.log(l)