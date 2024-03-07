/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

const logo = document.querySelector("img");
// logo.setAttribute("draggable", "true"); // Make the logo draggable

logo.addEventListener("click", (e) => console.log(e));
logo.addEventListener("click", (e) => console.log(e.target));
logo.addEventListener("click", (e) => console.log(e.type));
logo.addEventListener("click", (e) => console.log(e.timeStamp));
logo.addEventListener("click", (e) => console.log(e.clientX));
logo.addEventListener("click", (e) => console.log(e.clientY));
logo.addEventListener("click", (e) => console.log(e.offsetX));
logo.addEventListener("click", (e) => console.log(e.offsetY));
logo.addEventListener("click", (e) => console.log(e.pageX));
logo.addEventListener("click", (e) => console.log(e.pageY));
logo.addEventListener("click", (e) => console.log(e.screenX));
logo.addEventListener("click", (e) => console.log(e.screenY));

const link = document.createElement("a");
link.innerText = "Google";
link.setAttribute("href", "https://www.google.com/");

const filter = document.querySelector(".filter");
filter.appendChild(link);

link.addEventListener("click", (e) => e.preventDefault());

console.log(link);

let heading = document.querySelector("h1");
console.log(heading);

const drag = (e) => {
  heading.textContent = `X ${e.clientX} Y${e.clientY}`;
};

const drop = (e) => {
  heading.textContent = "Shopping List";
};

logo.addEventListener("drag", drag);
logo.addEventListener("dragend", drop);

// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
