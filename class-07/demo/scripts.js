
// alert("Hello World"); 

// define a variable 
var number = 10; // variable type number
var pepsiDrink = "12 Pepsi"; // variable type string
var correct = true; // variable type boolean that is true 
var notCorrect = false; // variable type boolean that is false



// alert(number);
// alert(pepsiDrink);
// alert(correct);
// alert(notCorrect);


//  < less than
// > larger than
// == equal to
// <= less than equal 
// >= larger than equal 
// != not equal to 



// checking if the number is less than 10
// if 5 is less than 10 
function checkLessThan() {
    if (number < 10 ){
        alert(number);
    } else {
        alert("the number is larger than 10");
    }
    
}

// if pepsiDrink is the same as 12 Pepsi

function booleanFunction() {
    if(notCorrect) {
        alert("correct")
    }
}

// If the number is equal or larger than 10
function checkEqualOrLargerThan() {
    if(number => 10){
        alert(number)
    }
}
// If the number is less than or equal to 5
function checkIsLessThanOrEqual() {
    if(number <= 5){
        alert(number)
    }
}

// if number is not equal to 20 
function checkIfNotEqual() {
    if(number != 20) {
        alert(number)
    }
}


// if number is larger than 10 
// if 15 is larger than 10
// if 5 is larger than 10 

// First condition to check if the number is larger than something 
function checkLargeNum() {
    if (number > 10 ){
        alert(number);
    } else {
        alert("the number is larger than 10");
    }
}


// checkLargeNum();

// if pepsiDrink is the same as 12 Pepsi
function checkPepsi() {
    if (pepsiDrink == "12 Pepsi"){
        alert("Correct!");
    } else {
        alert("Not Correct");
    }
}

// checkPepsi();



function aParamExample(myMessage) {

    // if myMessage is the same as hello then true
    // if hello is the same as hello then true
    if(myMessage == "hello"){
        alert("hello to you too!")
    } else {
        alert("rude");
    }
}

// aParamExample("hello");


// var name = prompt("What is your name?");
// var pass = prompt("What is your password?");

// checkPassword(pass);

// var secondName = prompt("what is your name?")
// printName(secondName);


function printName(name) {
    alert("Hello "+name);
}

function checkPassword(password){
    if (password == 1234) {
        alert("Logged in");
        printName(name);
    } else {
        alert("password not correct");
    }
}