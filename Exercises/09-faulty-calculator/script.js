let rnd=Math.random();
console.log(rnd);
let x=prompt("Enter First Number");
let op=prompt("Enter Operator");
let y=prompt("Enter Second Number");
const ob={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(rnd>0.1)
    alert(`Answer is ${eval(`${x} ${op} ${y}`)}`);
else{
    op=ob[op];
    alert(`Answer is ${eval(`${x} ${op} ${y}`)}`);
}