// const itemInput = document.querySelector("#item-input");
// const priorityInput = document.querySelector("#priority-input");
// const checkbox = document.querySelector("#checkbox");
// const heading = document.querySelector("h1");

// function onInput(e) {
//   console.log(e.target.value);
// }

// function onChecked(e) {
//   console.log(e.target.checked);
// }

// function onFocus(e) {
//   console.log("Input is focused");
//   itemInput.style.outlineStyle = "solid";
//   itemInput.style.outlineWidth = "1px";
//   itemInput.style.outlineColor = "red";
// }

// function onBlur(e) {
//   console.log("Input is Blur");
//   itemInput.style.outlineStyle = "none";
// }
// itemInput.addEventListener("input", onInput, false);
// priorityInput.addEventListener("input", onInput, false); // "change" event
// checkbox.addEventListener("input", onChecked, false);
// itemInput.addEventListener("focus", onFocus, false);
// itemInput.addEventListener("blur", onBlur, false);

const form = document.getElementById("item-form");
const checkbox = document.getElementById("checkbox");

function onSubmit(e) {
  e.preventDefault();

  const itemInput = document.getElementById("item-input").value;
  const priorityInput = document.getElementById("priority-input").value;
  const isChecked = e.target.checked;

  if (itemInput === "" || priorityInput === "0") {
    return alert("Please fill the input");
  }
  if (isChecked !== true) {
    return alert("please select checkbox");
  }
  console.log(itemInput, priorityInput, isChecked);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const item = formData.get("item");
  const priority = formData.get("priority");
  const checkbox = formData.get("checkbox");
  console.log(formData, item, priority, checkbox);
}

// function onChecked(e) {
//   const isChecked = e.target.checked;
//   if (!isChecked) {
//     alert("Check the box");
//   }
// }

form.addEventListener("submit", onSubmit2, false);
// checkbox.addEventListener("input", onSubmit, false);
