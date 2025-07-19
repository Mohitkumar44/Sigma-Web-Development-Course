var num = 8;
if (num%2==0) {
    if (num%3==0) {        
        console.log("Divisible by both 2 and 3");
    }
    else{
        console.log("Divisible by 2");
    }
}
else if (num%3==0) {
    console.log("Divisible by 3");
}
else{
    console.log("Not divisible by 2 and 3");
}