let hero = document.getElementById("hero");
let nav_bar = document.querySelector(".nav_list");
console.log(nav_bar);

document.querySelector("#menu_toggle").addEventListener("click", function () {
  nav_bar.classList.toggle("show");
});

nav_bar.addEventListener("click", function (){
 nav_bar.classList.toggle("show");
});
console.log("ok");
 
