//*! There isn't data or api for that reason I created mock data

const data = [
  {
    img: "./assets/img/sofa1.png",
    bigImg: "./assets/img/bigsofa.png",
    color: "green",
  },
  {
    img: "./assets/img/bluesofa.png",
    bigImg: "./assets/img/bluesofa.png",
    color: "blue",
  },
  {
    img: "./assets/img/skysofa.png",
    bigImg: "./assets/img/skysofa.png",
    color: "sky",
  },
  {
    img: "./assets/img/graysofa.webp",
    bigImg: "./assets/img/graysofa.webp",
    color: "gray",
  },
];

//** Rendering Products

let containerLeft = document.getElementById("product-container-left");
let containerRight = document.getElementById("product-container-right");

window.onload = function () {
  let products = data;
  let i = 0;
  products.map(function (product) {
    i++;
    containerLeft.innerHTML += `
                <div class="product-left-card">
                  <div class="product-left-card-img">
                      <img id="card-${i}" src="./assets/img/sofa1.png" alt="">
                  </div>

                  <div class="product-tags-container">

                      <div class="product-first-tag">
                          <p>3 Seater sofa</p>
                      </div>

                      <div class="product-second-tag">
                          <p>Desde 2500€</p>
                      </div>

                  </div>
              </div>`;
  });

  containerRight.innerHTML = `
                <div class="product-right-card">

                    <div class="product-right-card-img">
                        <img id="card-5" src="./assets/img/bigsofa.png" alt="">
                    </div>

                    <div class="product-tags-container">

                        <div class="product-first-tag">
                            <p>3 Seater sofa</p>
                        </div>

                        <div class="product-second-tag">
                            <p>Desde 2500€</p>
                        </div>

                    </div>

                </div>`;
};

function getColor(color) {
  let chosen = data.find((e) => e.color === color);

  document.getElementById("card-1").src = chosen.img;
  document.getElementById("card-2").src = chosen.img;
  document.getElementById("card-3").src = chosen.img;
  document.getElementById("card-4").src = chosen.img;
  document.getElementById("card-5").src = chosen.bigImg;
}

//** Opening Mobile Menu

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

//** eMail Validation

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
