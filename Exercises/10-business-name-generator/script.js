console.log("Exercise-10");
const ad={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
};
const sh={
    1:"Engine",
    2:"Foods",
    3:"Garments"
};
const wd={
    1:"Bros",
    2:"Limited",
    3:"Hub"
};
let r1=Math.floor(Math.random()*3)+1;
let r2=Math.floor(Math.random()*3)+1;
let r3=Math.floor(Math.random()*3)+1;
console.log(`Your Business Name is ${ad[r1]}${sh[r2]}${wd[r3]}`);