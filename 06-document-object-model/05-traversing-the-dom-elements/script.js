const body = document.querySelector("body");
body.style.backgroundColor = "#343434";
body.style.color = "#fff";

let output;

// Get Child Elements from parent
const parent = document.querySelector(".parent");
output = parent.children;

output = parent.children[0];
output = parent.children[0].setAttribute("id", "child-1");
output = parent.children[1].setAttribute("id", "child-2");
output = parent.children[2].setAttribute("id", "child-3");

output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].nodeName;

// parent.children[0].innerText = "Child One";
parent.firstElementChild.innerText = "Child One";
parent.children[1].innerText = "Child Two";
parent.lastElementChild.innerText = "Child Three";
// parent.children[2].innerText = "Child Three";

parent.children[0].style.color = "#32F7E3";
parent.children[1].style.color = "#E9F091";
parent.lastElementChild.style.color = "#F091F0";

// Get Parent Element from child
const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.border = "1px solid gray";
child.parentElement.style.padding = "5px";
child.parentElement.style.textAlign = "center";

// Get Siblling Elements
const firstItem = document.querySelector(".child:nth-child(1)");
const secondItem = document.querySelector(".child:nth-child(2)");
const thirdItem = document.querySelector(".child:nth-child(3)");

output = firstItem.nextElementSibling;

console.log(output);
