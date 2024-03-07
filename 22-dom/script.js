const body = document.querySelector(".bg-black");
body.style.backgroundColor = "#212121";
body.style.color = "#fff";

const para = document.querySelector("p");
console.log(para.textContent); // it will show every text content even if its hidden by css.
console.log(para.innerText); // it show inner text

const list = document.querySelector("ul");
const red = list.querySelector("li:nth-child(1)");
const yellow = list.querySelector("li:nth-child(2)");
const green = list.querySelector("li:nth-child(3)");
const orange = list.querySelector("li:nth-child(4)");

red.style.color = "red";
yellow.style.color = "yellow";
green.style.color = "green";
orange.style.color = "orange";

// create new li element
const purple = document.createElement("li");

// set the text content
purple.textContent = "purple";

// Append the newly created li element to the ul
list.appendChild(purple);
purple.style.color = "purple";
