// select ul element
const ul = document.querySelector("ul");

// create li,button,i element
const li = document.createElement("li");
const button = document.createElement("button");
const icon = document.createElement("i");

// Add attributes & content inside tags
const text = document.createTextNode("Cream & Cookies");
li.appendChild(text);

button.setAttribute("class", "remove-item btn-link text-red");
icon.setAttribute("class", "fa-solid fa-xmark");

button.appendChild(icon);
li.appendChild(button);
ul.appendChild(li);

const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};

const createListItem = (item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");
  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
};

createListItem("Coffee");
createListItem("Biscuits");
createListItem("Bread & Butter");

console.log(li);
