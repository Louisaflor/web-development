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