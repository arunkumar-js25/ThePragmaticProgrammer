/*
5# Simple Math

You’ll often write programs that deal with numbers. And depending on the programming language you use, you’ll
have to convert the inputs you get to numerical data types. Write a program that prompts for two numbers. Print the
sum, difference, product, and quotient of those numbers as shown in the example output:

Example Output
What is the first number? 10
What is the second number? 5
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2

Constraints
• Values coming from users will be strings. Ensure that you convert these values to numbers before doing the math.
• Keep the inputs and outputs separate from the numerical conversions and other processing.
• Generate a single output statement with line breaks in the appropriate spots.

Challenges
• Revise the program to ensure that inputs are entered as numeric values. Don’t allow the user to proceed if the value entered is not numeric.
• Don’t allow the user to enter a negative number.
• Break the program into functions that do the computations. You’ll explore functions in Chapter 5, Functions, on page 45.
• Implement this program as a GUI program that automatically updates the values when any value changes.
*/

const prompt = require("prompt-sync")();

function addTwoNumbers(firstNumber, secondNumber) {
    return(firstNumber + secondNumber );
}

function subTwoNumbers(firstNumber, secondNumber) {
    return(firstNumber - secondNumber );
}

function multiplytwoNumbers(firstNumber, secondNumber) {
    return(firstNumber * secondNumber );
}

function dividetwoNumbers(firstNumber, secondNumber) {
    return(firstNumber / secondNumber );
}

proceedCalc = true;
let num1 = prompt("What is the first number?");
if(! /^\d+$/.test(num1))  //Regex to find only digits presents in input. test() function to check
{
    console.log("Provide Valid Input");
    proceedCalc = false;
}
else{
    if(num1 < 0)
    {
        console.log("Provide Valid Input");
        proceedCalc = false;
    }
}

let num2 = prompt("What is the second number?");
if(! /^\d+$/.test(num2))
{
    console.log("Provide Valid Input");
    proceedCalc = false;
}
else{
    if(num2 < 0)
    {
        console.log("Provide Valid Input");
        proceedCalc = false;
    }
}

if(proceedCalc)
{
    num1= parseInt(num1) ;
    num2= parseInt(num2) ;

    //add
    console.log(num1 + " + " + num2 + " = " + addTwoNumbers(num1,num2));

    //substract
    let subnum = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + subTwoNumbers(num1,num2));

    //multiply 
    let mulnum = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + multiplytwoNumbers(num1,num2));

    //divide
    let divnum = num1/num2;
    console.log(num1 + " / " + num2 + " = " + dividetwoNumbers(num1,num2));
}