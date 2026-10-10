async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
async function getdata1(){
    let x=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data=await x.json()
    return data
}
// settle means resolved or rejected
// resolved means promise has been settled
// rejected means promise has not been settled
async function main() {
    console.log("Loading modules..")
    console.log("Do something else...")
    console.log("Load data");
    let data=await getdata1()
    console.log(data);
    console.log("Process Data")
    console.log("Task 2")
}
main()