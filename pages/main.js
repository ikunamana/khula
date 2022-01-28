var maindiv =
document.getElementById("maindiv");
var btn = document.getElementById("btns")
var span = document.getElementById ("close");

btn.onclick = function(ika){
    maindiv.style.display = "block";
}

span.onclick = function (daxurva){
    maindiv.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == maindiv) {
        maindiv.style.display = "none";
        
    }
}
