const prompt = require("prompt-sync")();

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
    let addnum = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + addnum);

    //substract
    let subnum = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + subnum);

    //multiply 
    let mulnum = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + mulnum);

    //divide
    let divnum = num1/num2;
    console.log(num1 + " / " + num2 + " = " + divnum);
}