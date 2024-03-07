const clearButton = document.querySelector("#clear");
const items = document.querySelector("li");
console.dir(items);

const click = () => {
  return items.parentElement.remove();
  // return items.parentNode.remove();
};

const alertBox = () => {
  return alert("This is Alert Box 📦 ");
};

// Event Listner, addEventListner
clearButton.addEventListener("click", click, false);
// clearButton.addEventListener("click", alertBox, false);

// clearButton.addEventListener("click", () => console.log("clear button"), false);

// Remove Event Listner removeEventListner();
// setTimeout(() => clearButton.removeEventListener("click", click), 5000);

// setTimeout(() => clearButton.click(), 5000);
// setTimeout(() => clearButton.click(), 8000);
