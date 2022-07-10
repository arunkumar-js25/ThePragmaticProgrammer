/*
1 Saying Hello

    The “Hello, World” program is the first program you learn
    to write in many languages, but it doesn’t involve any input.
    So create a program that prompts for your name and prints
    a greeting using your name.

Example Output
    What is your name? Brian
    Hello, Brian, nice to meet you!

Constraint
    • Keep the input, string concatenation, and output separate.

Challenges
    • Write a new version of the program without using any variables.
    • Write a version of the program that displays different greetings for different people. 
        This would be a good challenge to try after you’ve completed the exercises in 
        chapter 4, Making Decisions, on page 29 and Chapter 7, Data Structures, on page 63.
*/

// To get Input from Terminal  -- npm install prompt-sync in this folder and add this require() to the code
const prompt = require("prompt-sync")();

let name = prompt("What is your name? ");
console.log("Hello, " + name + ", nice to meet you!");


// Challenge 1# Write a new version of the program without using any variables.
//console.log("Hello, " + prompt("What is your name? ") + ", nice to meet you!");

/* // Challenge 2#
let name2 = prompt("What is your name? ");
if(name2 == "Arun"){
    console.log("Hello, " + name2 + ", Welcome Back!");
}
else{
    console.log("Hello, " + name2 + ", nice to meet you!");
}
*/