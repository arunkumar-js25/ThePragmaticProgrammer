/*function changeHandler(event) {  
    var inputValue = document.getElementById("inputStr").value;
    console.log(inputValue);
    document.querySelector('#para').textContent  = inputValue + " has " + String(inputValue.length) + " characters.";  
}*/

$(document).ready(function(){  
    $( "#inputStr" ).keyup(function () {    
        let inputValue = document.getElementById("inputStr").value;
        document.getElementById("para").innerHTML= inputValue + " has " + String(inputValue.length) + " characters.";  
    }); 
});