//  Document object properties
let output;

// document.all is a property in JavaScript that represents a collection of all HTML elements (dom) within the current document.
output = document.all;
output = document.all.length;
// let allElementsArray = Array.from(output);
// console.log(allElementsArray.map((el) => `el: ${el}`));

// Everything in the html tags
output = document.documentElement;

// Head and Body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = "form";

// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HtmalCollection into an array
const forms = Array.from(document.forms);

console.log(output);
console.log(forms);
