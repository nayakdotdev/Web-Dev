function validatePass(ps){
    if(ps.length<8)
        return false
    let upp=false,low=false,dig=false
    for(const c of ps){
        if(c>='0'&&c<='9')
            dig=true
        else if(c===c.toUpperCase()&&c!==c.toLowerCase())
            upp=true
        else if(c===c.toLowerCase()&&c!==c.toUpperCase())
            low=true
    }
    return dig&&upp&&low
}
pass="Sanket911"
if(validatePass(pass))
    console.log("Valid")
else
    console.log("Invalid")