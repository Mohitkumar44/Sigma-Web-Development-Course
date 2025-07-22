console.log("This is a faulty calculator");
var a = Number(prompt("Enter 1st number"));
var b = Number(prompt("Enter 2nd number"));
var c = Number(prompt("Enter\n1 for addition\n2 for subtraction\n3 for multiplication\n4 for division"));
var d = Math.random();
if (d >= 0.1) {
    switch (c) {
        case 1:
            console.log("Addition of both the numbers is " + (a + b));
            break;
        case 2:
            console.log("subtraction of both the numbers is " + (a - b));

            break;
        case 3:
            console.log("multiplication of both the numbers is " + (a * b));

            break;
        case 4:
            console.log("division of both the numbers is " + (a / b));

            break;

        default:
            console.log("Invalid choice");
            break;
    }
}
else{    
    switch (c) {
        case 1:
            console.log("Addition of both the numbers is " + (a - b));
            break;
        case 2:
            console.log("subtraction of both the numbers is " + (a / b));
    
            break;
        case 3:
            console.log("multiplication of both the numbers is " + (a + b));
    
            break;
        case 4:
            console.log("division of both the numbers is " + (a ** b));
    
            break;
    
        default:
            console.log("Invalid choice");
            break;
    }
}