// Global window object
console.log("window:", window);

// The document object is part of the window object
console.log("window.document", window.document);
console.dir(window.document);

// We can access DOM elements directly with properties
console.log("document:", document.body.innerText);
console.log(document.body);
console.log(document.links);

// We can set properties of elements
// document.body.innerHTML = "<h1>Hello from body</h1>";

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
// document.write("Hello from JS");

// We also have methods to select elements more directly
// document.getElementById("main").innerHTML = "<h1>Hello from main</h1>";
const paragraph = document.querySelector("#para");
paragraph.innerText = "Welcome to Monday Night Raw";

// document.querySelector("#main h1").innerText = "Hello";
