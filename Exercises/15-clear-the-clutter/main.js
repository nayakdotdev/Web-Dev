const fs=require("fs")
const path=require("path")

const folderPath="./test"
const files=fs.readdirSync(folderPath)
files.forEach(file => {
    const ext=path.extname(file).slice(1)
    if(!ext)
        return
    const newFolder=path.join(folderPath,ext)
    if(!fs.existsSync(newFolder))
        fs.mkdirSync(newFolder)
    const oldPath=path.join(folderPath,file)
    const newPath=path.join(newFolder,file)
    fs.renameSync(oldPath,newPath)
});