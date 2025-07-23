// // before watching solution
// let n = parseInt(prompt("Value of N to find Factorial"));
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact*=i;
// }
// console.log(fact);


// after watching solution

let a = 6

function fac(number){
    let fact=1
    for (let index = 1; index <= number; index++) {
        fact*=index
    }
    return fact
}

// function facReduce(number){          // as it is which is in solution
//     let arr = Array.from(Array(number+1).keys())
//     let b = arr.slice(1,).reduce((a,b)=> a*b)
//     return b
// }

function facfor(number){             // by pushing elements in the array
    let arr = []
    for (let index = 1; index <= number; index++) {
        arr.push(index)
    }
    // console.log(arr)             // only for checking

    // let c = arr.reduce((a,b)=>{
    //     return a*b
    // })
    
    let c = arr.reduce((a,b)=> a*b)        // reduce can also be written in a single line

    return c
}
console.log(facfor(a))
// console.log(facReduce(a))
console.log(fac(a))