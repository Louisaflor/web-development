function sniffer(message) {

    console.log("Event: "  + message);
    alert("This is an inside alert")

}

alert("This is an outside alert");


function outsideFunc() {
    alert("This is an external function!")
}

document.getElementById("textTop").onchange=function(){
    alert("value in text box changed.");
}

document.getElementById("butt").onmouseover=function(){
    sniffer("Moused over butt");
}



document.getElementById("secondP").onclick=function(){
    sniffer("Clicked on secondP");
    outsideFunc()
}

// indexOf() helps you search for any symbol/text in our first var
var email = "yonzonlouisa25@icloud.com"
var findAt = email.indexOf("@")
console.log(findAt) // it will show 14 

// here is another way to do this indexOf() function

alert("Another alert!: " + "yonzonlouisa25@icloud.com has " + "yonzonlouisa25@icloud.com".indexOf("@") + " letters.")
//This alert kinda makes it difficult to read so we use the var to help clean up the code

 /*
 function numberCheck() {
    var myNumber = "Louisa"
    var result = isNaN(myNumber)
    console.log(result)
}


*/

function intCheck() {
    var myNum = " 32 + Louisa";
    var secResult = parseInt(myNum) // so for this function it converts a string and turns it into an integer 
                                    //but the integer in the string has to be the first string... which is weird 
    /*console.log(secResult) */
    console.log(secResult + 32)

}

document.getElementById("activate").onclick= function() {
    intCheck()
}
