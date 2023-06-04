
function CheckField3() {
  var field= document.getElementById("field3").value;
  var regex =/^[A-Za-z] {3}$/;

  if (regex.test(field))
    document.getElementById("message3").innerhtml ="Input accepted";
  else
    document.getElementsById("message3").innerhtml="Please use three letter input for Country code";   
}

function ValidateFirstName(){
  var fName =document.getElementById("firstName").value;
  var re1 =/^[a-zA-Z\s\'\-'] {2,15}$/;

  if (re1.test(fName)) {
    document.getElementById("firstNamePrompt").style.color ="green";
    document.getElementById("firstNamePrompt").innerHTML ="<Strong>Valid</Strong>";
    return true;
  }
   else { 
    document.getElementById("firstNamePrompt").style.color ="Red";
    document.getElementById("firstNamePrompt").innerHTML ="<Strong>Enter 2 to 15 alphabets only</Strong>";
    return false;
  }
}

