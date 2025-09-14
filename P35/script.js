// let obj = {
//     a:1,
//     b:"Mohit"
// }
// console.log(obj)
// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps : true
// }
// rabbit.__proto__ = animal;
// // console.log(rabbit)

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object Created...")
    }
    eats(){
        console.log("Khaa rha hoon")
    }
    jumps(){
        console.log("kood rha hu")
    }
}
let a = new Animal("Bunny");
console.log(a)