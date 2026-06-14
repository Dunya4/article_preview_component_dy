let button = document.getElementById("card_btn");
let cardShare = document.getElementById("card_share");

button.addEventListener("click", function(){
   cardShare.classList.toggle("show");
   button.classList.toggle("button_show")
}
 )