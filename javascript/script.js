new WOW().init();
var displayLock = document.getElementById("display-lock");
var menu = document.querySelector(".menue");
var close = document.querySelector(".menue #menue-close")
var dropMenu = document.getElementById("drop-menu");
var darkMode = document.getElementById("dark-mode");
var divMode = document.getElementById("div-mode");
var lightMode = document.getElementById("light-mode");
var image1 = document.getElementById("img-bg");
let cart = document.querySelectorAll(".products-cart .fa-cart-shopping");




displayLock.onclick = () => {
    menu.classList.add("show");

};


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

if (!(menu.classList.contains("show")) || (menu.classList.contains("show"))) {



    cart.forEach((el) => el.addEventListener('click', (att) => {
        let imgsrc = att.target.dataset.src;
        let name = att.target.dataset.name;
        let price = att.target.dataset.price;

        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'pro-info d-flex justify-content-between align-items-center w-100 mt-5')
        let newi = document.createElement('i');
        newi.setAttribute('class', 'fa-solid fa-circle-xmark close-div')
        newDiv.appendChild(newi)
        let newimg = document.createElement('img')
        newDiv.appendChild(newimg)
        newimg.setAttribute('width', '50px')
        newimg.setAttribute('height', '50px')
        newimg.setAttribute('src', imgsrc)
        let newheader1 = document.createElement('h4')
        let newcontent1 = document.createTextNode(name)
        newheader1.appendChild(newcontent1)
        newDiv.appendChild(newheader1)
        let newheader2 = document.createElement('h4')
        let newcontent2 = document.createTextNode(price)
        newheader2.appendChild(newcontent2)
        newDiv.appendChild(newheader2)
        let decrease = document.createElement('i');
        decrease.setAttribute('class', 'fa-solid fa-minus')
        newDiv.appendChild(decrease)
        let count = document.createElement("span")
        let i = 1
        countContent = document.createTextNode(i)
        count.appendChild(countContent)
        newDiv.appendChild(count)
        let increament = document.createElement('i');
        increament.setAttribute('class', 'fa-solid fa-plus')
        newDiv.appendChild(increament)


        newi.onclick = () => {
            newDiv.remove()
        }

        let total = document.getElementById("num-product");
        total.innerHTML = i
        let totalPrice = document.getElementById("total-price")
        increament.onclick = () => {
            count.innerHTML = parseInt(i) + 1;
            total.innerHTML = parseInt(i) + 1;
            totalPrice.innerHTML = eval((parseFloat(newheader2.innerHTML)) * (parseInt(count.innerHTML)))
            return i++
        }
        decrease.onclick = (e) => {
            if (i == 1) {
                newDiv.remove();

            } else {
                count.innerHTML = parseInt(i) - 1;
                total.innerHTML = parseInt(i) - 1;
                totalPrice.innerHTML = eval((parseFloat(newheader2.innerHTML)) * (parseInt(count.innerHTML)))
                return i--
            }
        }

        //         let cartona = `  <div id="" class="pro-info d-flex justify-content-between align-items-center w-100 mt-5">
        // <i  class="fa-solid fa-circle-xmark close-div"></i>
        // <img src="${src}"width="50px" height="50px"/>
        // <h4>${name}</h4>
        // <h4>${price}</h4>
        //   </div>`
        { /* <i class="fa-solid fa-plus"></i> */ } { /* <i class="fa-solid fa-circle-minus"></i> */ }
        // menu.innerHTML += cartona;
        menu.appendChild(newDiv)

        totalPrice.innerHTML = eval((parseFloat(newheader2.innerHTML)) * (parseInt(count.innerHTML)))



    }))
}
close.onclick = () => {


    menu.classList.remove("show");
};