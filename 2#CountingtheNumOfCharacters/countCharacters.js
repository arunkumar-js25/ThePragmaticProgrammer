/*function changeHandler(event) {  
    var inputValue = document.getElementById("inputStr").value;
    console.log(inputValue);
    document.querySelector('#para').textContent  = inputValue + " has " + String(inputValue.length) + " characters.";  
}*/

$(document).ready(function(){  
    $( "#inputStr" ).keyup(function () {    
        let inputValue = document.getElementById("inputStr").value;
        if(inputValue.length>0)
        {
            document.getElementById("para").innerHTML= inputValue + " has " + String(inputValue.length) + " characters.";  
        }
        else{
            document.getElementById("para").innerHTML="";
        }
    }); 
});