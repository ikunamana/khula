var maindiv1 = document.getElementById("maindiv1")
var btnsh = document.getElementById("shekvetabtn")
var span = document.getElementById ("close");
var shekvetadiv = document.getElementById ("shekvetadiv")
var contf = document.getElementById("contfull")
var mtavari = document.getElementById("headermain")

btnsh.onclick = function (shekvetamtavari){
    maindiv1.style.display = "block";
    contfull.style.transform = "scale(0.9)"
    
}

span.onclick = function (daxurva){
    maindiv1.style.display = "none";
     contfull.style.transform = "scale(1)"
     mtavari.style.position = "fixed"
}

window.onclick = function(event) {
    if (event.target == maindiv1) {
        maindiv1.style.display = "none"
         contfull.style.transform = "scale(1)"
    }
}
function myFunction(){
    

    var x = document.getElementById("product").value;
    y = document.getElementById("tsona").value;
document.getElementById("jami").innerHTML ="ჯამი:" + x*y + "+" + 3;
document.getElementById("fasi").innerHTML ="ფასი:" + x;

} 
