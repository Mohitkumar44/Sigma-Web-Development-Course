console.log("Mohit is a hacker")
console.log("Krishna is a hecker")
setTimeout(() => {
    console.log("i am a good boy")
}, 0);
console.log("rohan is a girl")


let prom1 = new Promise((resolve, reject) => {
    let num = Math.random()
    if (num>0.5) {
        reject("your number is not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("This is Working")
            resolve("mohit")
        }, 3000);
    }
})

prom1.then((a) => {
  console.log(a)
}
).catch((err) => {
  console.log(err)
}
)