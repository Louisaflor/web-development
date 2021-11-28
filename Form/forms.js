document.getElementById("submit").onclick = function() {
    var doSubmit = validateForm();

    if (doSubmit == false) {

        return false;

    }


}

function validateForm() {
    var firstName = document.getElementById("firstName");
    var theValue = firstName.value;

    if (theValue != "Louisa") {

        console.log("This isn't working");

        var target = document.getElementById("target");
        
        target.innerHTML = "<h2> Please Input 'Louisa' if you want this to work! </h2>"
        target.style.color = "blue"

        //before this is did target.select() and my function was not working but it did NOT show any errors
        
        firstName.select(); //this highlights the whole text when you put in the wrong name 
        //you have the use firstName b/c its the one you want to select to highlight it 

        return false;

        console.log("This will only appear if you did not 'Louisa") 
        // this will not appear b/c we are putting it after the return false
    }
}