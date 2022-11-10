// automatic date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// navbar
const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const hide = document.querySelector("#close");

bar.addEventListener("click", () => {
  navbar.classList.add("active");
});

hide.addEventListener("click", () => {
  navbar.classList.remove("active");
});

//dynamic price for main img
const mainImg = document.querySelector("#mainImg");
let quantity = document.querySelector("#quantity");
const add = document.querySelector(".add-div");
const minus = document.querySelector(".minus-div");
const price = document.querySelector("#price");
const priceValue = mainImg.dataset.price;
let counter = 1;

add.addEventListener("click", () => {
  addQuantity(priceValue);
});

minus.addEventListener("click", () => {
  minusQuantity(priceValue);
});

const addQuantity = (value) => {
  counter++;
  quantity.innerText = counter;
  let result = counter * value;
  price.innerText = `$${result.toFixed(1)}`;
};

const minusQuantity = (value) => {
  if (counter > 1) {
    counter--;
    quantity.innerText = counter;
  }
  if (counter === 1) {
    price.innerText = `$${value}`;
  } else if (counter >= 2) {
    let result = counter * priceValue;
    price.innerText = `$${result.toFixed(1)}`;
  }
};

// dark mode

//variables
const checkbox = document.querySelector("#checkbox");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
//local storage
let mandellaMode = localStorage.getItem("mandellaMode");
let checkedBox = localStorage.getItem("checkedBox");

const enableMandellaMode = () => {
  sections.forEach((section) => {
    section.classList.add("dark-mode");
  });
  footer.classList.add("dark-mode");

  //update darkmode in the local storage
  localStorage.setItem("mandellaMode", "enabled");
};

const disableMandellaMode = () => {
  sections.forEach((section) => {
    section.classList.remove("dark-mode");
  });
  footer.classList.remove("dark-mode");

  //update darkmode in the local storage
  localStorage.setItem("mandellaMode", "disabled");
};

if (mandellaMode === "enabled") {
  enableMandellaMode();
}

checkbox.addEventListener("click", () => {
  mandellaMode = localStorage.getItem("mandellaMode");
  if (mandellaMode !== "enabled") {
    enableMandellaMode();
  } else {
    disableMandellaMode();
  }
});

// checkbox.addEventListener("change", () => {
//   sections.forEach((section) => {
//     section.classList.toggle("dark-mode");
//   });
//   footer.classList.toggle("dark-mode");
// });
