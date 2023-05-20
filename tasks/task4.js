var changebtn = document.getElementById("btn");
changebtn.addEventListener("click",change)

var picSource = document.getElementById("picture");

picSource.src = "elements/1.jpg"
function change(){

    picSource.src = "elements/6.jpg"

}