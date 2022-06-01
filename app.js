const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const viewport = document.querySelector(".viewport");
const header = document.querySelector(".header-mobile-logo");
const menuToggle = document.querySelector(".nav__toggle");
let isMenuOpen = false;

menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
  viewport.classList.toggle("height");
  menu.hidden = !isMenuOpen;
  nav.classList.toggle("nav--open");
  header.classList.toggle("none");
  document.body.classList.toggle("height");
});

nav.addEventListener("keydown", (e) => {

  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  const menuLinks = menu.querySelectorAll(".nav__link");
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector("button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {
  if (email.value.match(regExp)) {
    document.getElementById("form-button").disabled = false;
    email.style.borderColor = "#27ae60";
    email.style.background = "#eafaf1";
    icon1.style.display = "none";
    icon2.style.display = "flex";
    error.style.display = "none";
    btn.style.display = "block";
  } else {
    document.getElementById("form-button").disabled = true;
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9";
    icon1.style.display = "flex";
    icon2.style.display = "none";
    error.style.display = "block";
    btn.style.display = "none";
  }
  if (email.value == "") {
    document.getElementById("form-button").disabled = true;
    email.style.borderColor = "lightgrey";
    email.style.background = "#fff";
    icon1.style.display = "none";
    icon2.style.display = "none";
    error.style.display = "none";
    btn.style.display = "none";
  }
}


var colors = document.getElementsByName("color");
console.log(colors[0]);

colors[0].addEventListener("click",function(){
  document.getElementById("card-1").src="./assets/img/sofa1.png";
  document.getElementById("card-2").src="./assets/img/sofa2.png";
  document.getElementById("card-3").src="./assets/img/sofa3.png";
  document.getElementById("card-4").src="./assets/img/sofa4.png";

  document.getElementById("card-5").src="./assets/img/bigsofa.png";
})

colors[1].addEventListener("click",function(){
  document.getElementById("card-1").src="https://www.freeiconspng.com/uploads/blue-old-couch-png-31.png";
  document.getElementById("card-2").src="https://freepngimg.com/save/43829-sofa-bed-free-transparent-image-hq/480x480";
  document.getElementById("card-3").src="https://www.pngkit.com/png/full/437-4372666_image-blue-sofa-transparent-background.png";
  document.getElementById("card-4").src="https://homemakerfurniture.com/wp-content/uploads/2021/03/blue2-1.png";

  document.getElementById("card-5").src="https://freepngimg.com/save/43829-sofa-bed-free-transparent-image-hq/480x480";
})

colors[2].addEventListener("click",function(){
  document.getElementById("card-1").src="https://cdn4.afydecor.com/Sofas/537/537.png";
  document.getElementById("card-2").src="https://cdn4.afydecor.com/Sofas/537/537.png";
  document.getElementById("card-3").src="https://cdn4.afydecor.com/Sofas/537/537.png";
  document.getElementById("card-4").src="https://cdn4.afydecor.com/Sofas/537/537.png";

  document.getElementById("card-5").src="https://cdn4.afydecor.com/Sofas/537/537.png";
})

colors[3].addEventListener("click",function(){
  document.getElementById("card-1").src="https://productimages.mybobs.com/fit-in/624x0/sp/20059887008/20059887008_hero_wide.jpg";
  document.getElementById("card-2").src="https://productimages.mybobs.com/fit-in/624x0/sp/20059887008/20059887008_hero_wide.jpg";
  document.getElementById("card-3").src="https://productimages.mybobs.com/fit-in/624x0/sp/20059887008/20059887008_hero_wide.jpg";
  document.getElementById("card-4").src="https://productimages.mybobs.com/fit-in/624x0/sp/20059887008/20059887008_hero_wide.jpg";

  document.getElementById("card-5").src="https://productimages.mybobs.com/fit-in/624x0/sp/20059887008/20059887008_hero_wide.jpg";
})
