let object = [324,52,43,5,5,52,55]

for (const key of object) {
    console.log(key)
}

// for of loop can also be used in Strings.

let string = "Guzzi bhai "

for (const key of string) {
    console.log(key)
}

// Note - for in loops can also be used in arrays and strings as in objects.

for (const key in string) {
    if (Object.prototype.hasOwnProperty.call(string, key)) {
        const element = string[key];
        console.log(element)
    }
}

console.log(string[6])