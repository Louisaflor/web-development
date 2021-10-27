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