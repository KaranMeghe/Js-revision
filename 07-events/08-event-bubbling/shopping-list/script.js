const div = document.querySelector("form div:nth-child(2)");
const button = document.querySelector("form button");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const listItmes = document.querySelectorAll("li");

function onClick(e) {
  alert("div was clicked");
}

function onSubmit(e) {
  alert("button was clicked");
  e.stopPropagation();
}

button.addEventListener("click", onSubmit, false);
div.addEventListener("click", onClick, false);
form.addEventListener(
  "click",
  () => {
    alert("Form was clicked");
  },
  false
);

// Event Delegation
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

// listItmes.forEach((item) => {
//   item.addEventListener("click", (e) => e.target.remove());
// });
