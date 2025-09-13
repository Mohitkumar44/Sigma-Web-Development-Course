let a = prompt("Enter first number")
let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed")
}
function main(){
    let c = parseInt(a)+parseInt(b)
    try {
        console.log("the sum is ",c*x)
        return
    } catch (error) {
        alert(error.name)
        alert(error.message)
        alert(error.stack)
        console.log("error aa gya guys")
        return
    }
    finally{
        console.log("try catch code successfull")
    }
}
let cd=main()