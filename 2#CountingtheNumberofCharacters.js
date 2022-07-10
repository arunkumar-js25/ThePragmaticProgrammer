/*
2 Counting the Number of Characters
    Create a program that prompts for an input string and displays output that shows the input string and the number of
    characters the string contains.

Example Output
    What is the input string? Homer
    Homer has 5 characters.

Constraints
    • Be sure the output contains the original string.
    • Use a single output statement to construct the output.
    • Use a built-in function of the programming language to determine the length of the string.

Challenges
    • If the user enters nothing, state that the user must enter something into the program.
    • Implement this program using a graphical userinterface and update the character counter every time a key is pressed. 
        If your language doesn’t have a particularly friendly GUI library, try doing this exercise with HTML and JavaScript instead
*/

// To get Input from Terminal  -- npm install prompt-sync in this folder and add this require() to the code
const prompt = require("prompt-sync")();

let inputStr = prompt("What is the input string? ");
let output = "";
if(inputStr == "")
{
    output = "User must enter something into the program";
}
else{
    output = inputStr + " has " + String(inputStr.length) + " characters.";

}
console.log(output);