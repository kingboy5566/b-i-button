
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