let obj = {
    harry : 98,
    rohan : 70,
    akash : 7
} 

// i think this can not be done by using normal for loop so i use forin loop in this object.

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,":",element)
    }
}