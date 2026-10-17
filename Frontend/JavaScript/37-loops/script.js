console.log("This is Tutorial on Loops")
let a=1;
for(let i=0;i<100;i++){
    console.log(a+i);
}
let ob={
    name:"Sanket",
    age:19,
    role:"Developer",
}
for(const i in ob){
    console.log(i,ob[i])
}
let s="Sanket"
for(const i of s){
    console.log(i)
}
let i=0;
while(i<6){
    console.log(i)
    i++;
}
let j=10;
do{
    console.log(j)
    j++;
} while(j<6);