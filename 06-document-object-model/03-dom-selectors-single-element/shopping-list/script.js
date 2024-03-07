// document.getElementById();
console.log(document.getElementById("app-title"));

// Get attributes
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set attributes
// document.getElementById("app-title").title = "John Cena";
// <h1 class="heading" id="app-title">
//   Shopping List
// </h1>;
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

// Get/Change content
console.log(title.textContent);
title.textContent = "Shopping Item";
title.innerText = "Shopping Item List";
title.innerHTML = "<strong>Shopping List</strong>";

// Change Style
title.style.color = "#8C8C75";
title.style.backgroundColor = "#F5F317";
title.style.padding = "5px 10px";

// document.querySelector()
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type=text]"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

const button = document.querySelector(".btn");
button.innerText = "Click to add";
button.style.backgroundColor = "#c44c55";

// Use these methods on other elements
const list = document.querySelector("ul");
list.querySelector("li:nth-child(3)").style.color = "#cccc";
