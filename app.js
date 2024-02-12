
// function itilic(){
//     var itc1 = document.querySelector("texterea")
//     itc1.classList.add("itlc")
// }
var texterea = document.getElementById("text1")
function f1(e){
    var value = e.value;
    texterea.style.fontSize = value + "px";

}




function itilic(){
    document.getElementById("text1").className="itc"
}
function bold(){
    document.getElementById("text1").className="bold"
}
function underline(){
    document.getElementById("text1").className="under"
}
function center(){
    document.getElementById("text1").className="center"
}
function jst(){
    document.getElementById("text1").className="jst"
}
function jleft(){
    document.getElementById("text1").className="jleft"
}
function jright(){
    document.getElementById("text1").className="jright"
}

function upAndlo(e){
   if (texterea.style.textTransform == "upperCase"){
    texterea.style.textTransform ="none";
   }else{
    texterea.style.textTransform ="upperCase";
   }
}


function t(e){
    texterea.style.fontWeight = "normal";
    texterea.style.fontAlign = "left";
    texterea.style.fontstyle = "normal";
    texterea.style.textTransform = "capitalize";
    texterea.value = " "
}


function color(e){
    let value = e.value ;
    texterea.style.color = value;
}

