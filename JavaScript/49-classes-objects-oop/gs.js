class Name{
    constructor(name){
        this.name=name
    }
    get name(){
        return this._name
    }
    set name(value){
        if(value.length<4){
            console.log("Name is too short..")
            return
        }
        this._name=value
    }
}
let user=new Name("John")
console.log(user.name)
user.name=""
let user1=new Name("Sanket")
console.log(user1.name)