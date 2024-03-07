let output;

const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[0].nodeName;
output = parent.childNodes[1].textContent;
output = parent.childNodes[1].nodeName;
output = parent.childNodes[1].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[5].nodeName;
output = parent.childNodes[5].outerHTML;

output = parent.firstChild;
output = parent.lastChild;

// Get Parent Node
const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;

// Get sibling nodes
const secondElement = document.querySelector(".child:nth-child(2)");
output = secondElement.nextSibling;
output = secondElement.previousSibling;

console.log(output);
