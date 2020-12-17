var myFirstNumber = 12;  //Variable type is a number 
var coffeeVariable = 'My coffee is warm';  // Variable Type String
var booleanVariableOfTypeFalse = false;  // Variable  Type Boolean
var booleanVariableOfTypeTrue = true;  // Variable Type Boolean

// alert(myFirstNumber);

// console.log("Hello")
// console.log(myFirstNumber);
// console.log(booleanVariableOfTypeTrue);


// if (false) {
//     alert("It worked");
// } else if (myFirstNumber < 10) {
//     alert("The number is larger than 10!");
// } else {
//  alert("Nothing worked");
// }

// summation +
// Subtraction -
// Multiplication *
// Division / 
// &&
// ||

var summation = 5 + 5; // 10
var subtraction = 10 - 5; // 5
var multiplication = 5 * 5; // 25
var division = 10 / 2; // 5

// console.log(summation);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);


// Always from left to right
// 1- parenthesis  () 
// 2 - Multiplication and division 
// 3 - Subtraction and summation 


// if 2 * by 5 equals 10 then true
// && 
// true boolean is equals to the string 'true' which is false 
// false
// (2*5 === 10) && (true === 'true') || true
// true && (true === 'true') || true
// true && false || true
// false || true
// true 



function firstMathOperand() {
    if ((2 * 5 === 10) && (true === 'true') || true) {
        console.log("correct");
    } else {
        console.log("no correct");
    }
}

// firstMathOperand(); // calling the function



function printMyName(myName) {
    alert("Hello " + myName);
}

// printMyName("Tamim"); // calling the function
// printMyName();


// for (
//     // starting point or initializing the loop ;
//     // the condition where the loop should end when the condition is broke or met 
//     // increment the engine 
// ) {
// }


// variableName++ "The same thing as the following: variableName = variableName+1"
// step 1 : initialization of the loop to start at zero 
// step 2 :   check if the condition is true // if 0 < 10 == true
// if the condition is true then execute code
// step 3 : execute the code
// step 4 : increment or increase the value of i // now i is 1
// the first loop is done

// The second loop: It will start from step 2
// re-check the condition again. // 1 < 10 which true
// re-execute the same piece of code again
// increase the value of i by 1 again i++ or i = i + 1 // 2

var limit = 10;

for (var i = 0; i < limit; i++) {
    console.log(i);
}

var myCondition = true;

while (myCondition) {

    console.log("MY condition is " + myCondition);
    myCondition = false;
}