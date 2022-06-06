new WOW().init();
var displayLock = document.getElementById("display-lock");
var menu = document.querySelector(".menue");
var close = document.querySelector(".menue #menue-close")
var dropMenu = document.getElementById("drop-menu");
var darkMode = document.getElementById("dark-mode");
var divMode = document.getElementById("div-mode");
var lightMode = document.getElementById("light-mode");
var image1 = document.getElementById("img-bg");




displayLock.onclick = () => { menu.classList.add("show") };
close.onclick = () => { menu.classList.remove("show") };

darkMode.onclick = () => {
    dropMenu.style.color = "white";
    darkMode.style.backgroundColor = "white";
    image1.style.backgroundColor = "white";








    document.body.classList.add('darkWindow');


};
lightMode.onclick = () => {
    darkMode.style.backgroundColor = "transparent";
    dropMenu.style.color = "black";

    image1.style.backgroundColor = "transparent";

    document.body.classList.remove('darkWindow');
}





let cart = document.querySelectorAll(".products-cart .fa-cart-shopping");

cart.forEach((el) => el.addEventListener('click', (att) => {
    let src = att.target.dataset.src;
    let name = att.target.dataset.name;
    let price = att.target.dataset.price;
    let cartona = `  <div id="" class="pro-info d-flex justify-content-between align-items-center w-100 mt-5">
    <a><i  class="fa-solid fa-circle-xmark close-div"></i></a>
  <img src="${src}"width="50px" height="50px"/>
  <h4>${name}</h4>
  <h4>${price}</h4>
      </div>
      `
    menu.innerHTML += cartona
    close.onclick = () => { menu.classList.remove("show") };

}))