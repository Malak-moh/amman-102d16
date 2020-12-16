
// + sum
// - minus 
// * multiplication
// / division 




// var sum = 2+2;
// var sub = 4-2;
// var mult = 2*5;
// var division = 10/5;

// alert("2+2= "+sum);
// alert("4-2= "+sub);
// alert("2*5= "+mult);
// alert("10/5= "+division);


// take two number from the user and store them inside a variable
var numOne = prompt("Enter number one: ");
var numTwo = prompt("Enter the second Number: ");

// take the operation from the user wether it is + or - or * or /
var operation = prompt("Enter the one of the operation as following: + , - , * , / ");

// Calling the calculation function and we are passing the operation that the user choice 
calculation(operation);



function calculation(operation) { // this function is responsible for checking what operation the user choice 
    
    // if the operation is sum or + then call the sum function
    if(operation == '+'){
        sum(); 
    } else if (operation == '-') { // if it is not + then check if it is minus 
        sub();
    } else if (operation == '*') {
        multi();
    } else if (operation == '/') {
        division();
    } else {
        alert("Please refresh the page and choose one of the available operations ")
    }
}

function sum() {
    var sumTotal = parseInt(numOne) + parseInt(numTwo);
    alert(sumTotal);
}

function sub() {
    var subTotal = parseInt(numOne) - parseInt(numTwo);
    alert(subTotal);
}

function multi() {
    var multiTotal = parseInt(numOne) * parseInt(numTwo);
    alert(multiTotal);
}

function division() {
    var divisionTotal = parseInt(numOne) / parseInt(numTwo);
    alert(divisionTotal);
}