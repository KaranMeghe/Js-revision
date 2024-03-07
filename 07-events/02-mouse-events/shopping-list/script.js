// Mouse Events
const logo = document.querySelector("img");

// Callbacks()
const onClick = () => console.log("Click Event");

const onDoubuleClick = () => {
  const body = document.querySelector("body");
  if (body.style.backgroundColor !== "black") {
    body.style.backgroundColor = "black";
    body.style.color = "#fff";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "black";
  }
  console.log("dbl click");
};

const onRightClick = () => console.log("Right Click");

const onMouseDown = () => console.log("Mouse Down");
const onMouseUp = () => console.log("Mouse Up");
const onMouseWheel = () => console.log("Mouse Wheel");
const onMouseOver = () => {
  logo.style.backgroundColor = "#c4c4";
};
const onMouseOut = () => {
  logo.style.backgroundColor = "transparent";
  console.log("Mouse Out");
};

const onDragStart = () => console.log("Drag start event");
const onDrag = () => console.log("Drag  event");
const onDragEnd = () => console.log("Drag end event");

// Event Listners
logo.addEventListener("click", onClick, false);
logo.addEventListener("dblclick", onDoubuleClick, false);
logo.addEventListener("contextmenu", onRightClick, false);
logo.addEventListener("mousedown", onMouseDown, false);
logo.addEventListener("mouseup", onMouseUp, false);
logo.addEventListener("wheel", onMouseWheel, false);
logo.addEventListener("mouseover", onMouseOver, false);
logo.addEventListener("mouseout", onMouseOut, false);
logo.addEventListener("dragstart", onDragStart, false);
logo.addEventListener("drag", onDrag, false);
logo.addEventListener("dragend", onDragEnd, false);
