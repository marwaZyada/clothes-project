new WOW().init();
var displayLock = document.getElementById("display-lock");
var menu = document.querySelector(".menue");
var close = document.querySelector(".menue span")
var dropMenu = document.getElementById("drop-menu");
var darkMode = document.getElementById("dark-mode");
var divMode = document.getElementById("div-mode");
var lightMode = document.getElementById("light-mode");
var image1 = document.querySelector(".navbar-brand img")



displayLock.onclick = () => { menu.classList.add("show") };
close.onclick = () => { menu.classList.remove("show") };
darkMode.onclick = () => {
    dropMenu.style.color = "white";
    darkMode.style.backgroundColor = "white";

    image1.src = "";
    divMode.style.marginRight = "auto";





    document.body.classList.add('darkWindow');


};
lightMode.onclick = () => {
    darkMode.style.backgroundColor = "transparent";
    dropMenu.style.color = "black";
    image1.src = "images/logo.png";


    document.body.classList.remove('darkWindow');
}