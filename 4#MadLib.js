/*
4 Mad Lib
Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then
construct a list of words and place them into the story, creating an often silly or funny story as a result.
Create a simple mad-lib program that prompts for a noun,
a verb, an adverb, and an adjective and injects those into a
story that you create.

Example Output
    Enter a noun: dog
    Enter a verb: walk
    Enter an adjective: blue
    Enter an adverb: quickly
    Do you walk your blue dog quickly? That's hilarious!

Constraints
    • Use a single output statement for this program.
    • If your language supports string interpolation or string
    substitution, use it to build up the output.

Challenges
    • Add more inputs to the program to expand the story.
    • Implement a branching story, where the answers to
    questions determine how the story is constructed. You’ll
    explore this concept more in the problems in Chapter
    4, Making Decisions, on page 29.
*/
// To get Input from Terminal  -- npm install prompt-sync in this folder and add this require() to the code
const prompt = require("prompt-sync")();
/*
let noun = prompt("Enter a noun: ");
let verb = prompt("Enter a verb: ");
let adjective = prompt("Enter an adjective: ");
let adverb = prompt("Enter an adverb: ");

console.log("Do you "+verb+" your "+adjective+" "+noun+" "+adverb+"? That's hilarious!");
*/

//Challenges - branching Story

// Include fs module
const fs = require('fs');
const path = require('path');

var filesCount = 0;
// Function to get current filenames in directory with specific extension
fs.readdir(".\\4#MadLib\\Stories\\", (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\Filenames with the .txt extension: " + files.length);
      let count=0;
      files.forEach(file => {
        if (path.extname(file) == ".txt")
          console.log(file);
          count = count +1;
      })
      filesCount = count;
    }

    var templateNo = Math.floor(Math.random() * filesCount)+1;
    // Use fs.readFile() method to read the file
    var templatepath = ".\\4#MadLib\\Stories\\template"+templateNo+".txt";
    var template = fs.readFile(templatepath, 'utf8', function(err, data){   
        console.log(data);   
    });

  });

