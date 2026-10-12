let students=["yash","abhisek","amrutanshu","abhisekbhattamisra"]
let house=[]
for(const i of students){
    if(i.length<6)
        house.push("gryffindor")
    else if(i.length<8)
        house.push("hufflepuff")
    else if(i.length<12)
        house.push("ravenclaw")
    else
        house.push("slytherin")
}
console.log(students)
console.log(house)