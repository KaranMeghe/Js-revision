const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");
const button = document.querySelector("button");
const body = document.querySelector("body");

const toggleButton = document.createElement("button");

toggleButton.innerText = "Dark 🌚";
button.parentNode.insertBefore(toggleButton, button);

function run() {
  // className
  // console.log(itemList.className);
  // text.className = "card dark";

  // classList
  console.log(itemList.classList);
  // text.classList.add("dark");
  // text.classList.remove("dark");

  text.classList.toggle("dark");

  // change style
  itemList.style.lineHeight = "2";
}

function darkAndLight() {
  body.classList.toggle("dark");
  text.classList.toggle("dark");

  // toggling button text
  if (toggleButton.textContent === "Dark 🌚") {
    toggleButton.textContent = "Light 💡";
  } else {
    toggleButton.textContent = "Dark 🌚";
  }
}

button.addEventListener("click", run);
toggleButton.addEventListener("click", darkAndLight);
