// Adjectives:
// Crazy
// Amazing
// Fire

// Shop name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub

let rand = Math.random();
let first, second, third;
console.log(rand);

if(rand<0.33){
    first = "Crazy";
}
else if(rand<0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}

rand = Math.random();

if(rand<0.33){
    second = "Engine";
}
else if(rand<0.66){
    second = "Foods";
}
else{
    second = "Garments";
}

rand = Math.random();

if(rand<0.33){
    third = "Bros";
}
else if(rand<0.66){
    third = "Limited";
}
else{
    third = "Hub";
}

// console.log(first,second,third);

// this can be done as a pro by this
console.log(`${first} ${second} ${third}`);