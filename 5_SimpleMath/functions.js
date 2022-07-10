
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

let proceedCalc = true;
let num1ValidFlag = true;
let num2ValidFlag = true;
let num1Value = 0;
let num2Value = 0;


$(document).ready(function(){  

    $( ".5_input" ).keyup(function () {    

        num1ValidFlag = false;
        num2ValidFlag = false;
        num1Value = 0;
        num2Value = 0;
        let msg = "";

        let inputValue = document.getElementById("5_num1").value;
        if(inputValue.length>0)
        {
            if(! /^\d+$/.test(inputValue))
            {
                msg ="Provide Valid Input 1";
            }
            else{
                num1Value = parseInt(inputValue);
                num1ValidFlag = true;
            }
        }
        
        inputValue2 = document.getElementById("5_num2").value;
       
        if(inputValue2.length>0)
        {
            if(! /^\d+$/.test(inputValue2))
            {
                if(! num1ValidFlag)
                {
                    msg =  msg + "; Provide Valid Input 2";
                }
                else
                {
                    msg = "Provide Valid Input 2";
                }
            }
            else{
                num2Value = parseInt(inputValue2);
                num2ValidFlag = true;
            }
        }

        if(num1ValidFlag && num2ValidFlag)
        {
            document.getElementById("5_result").innerHTML="Results: " 
                                        + "<br>" + num1Value + " + " + num2Value + " = " + addTwoNumbers(num1Value,num2Value)
                                        + "<br>" + num1Value + " - " + num2Value + " = " + subTwoNumbers(num1Value,num2Value)
                                        + "<br>" + num1Value + " * " + num2Value + " = " + multiplytwoNumbers(num1Value,num2Value)
                                        + "<br>" + num1Value + " / " + num2Value + " = " + dividetwoNumbers(num1Value,num2Value);

        }
        else{
            document.getElementById("5_result").innerHTML=msg;
        }
    }); 

});
