const formInput = document.querySelector("#item-input");
const form = document.querySelector("#item-form");
const itemList = document.querySelector("#item-list");
const firstDiv = document.querySelector("#item-form > div:first-child");
const addItemBtn = document.querySelector(".btn");
const filter = document.querySelector(".filter input");
const clearBtn = document.querySelector("#clear");

// warning message
const warningMessage = () => {
  const warningText = document.createElement("p");
  warningText.textContent = "Field is empty, Please add item";
  warningText.style.color = "red";
  warningText.style.fontSize = "12px";
  warningText.style.padding = "10px";
  return warningText;
};

const warningText = warningMessage();

// create icon
const createIcon = (className) => {
  const i = document.createElement("i");
  i.classList = className;
  return i;
};
// create button
const createButton = (className) => {
  const button = document.createElement("button");
  button.classList = className;

  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);
  return button;
};

const onSubmit = (e) => {
  // prevent default behaviour of the form
  e.preventDefault();
  let newItem = formInput.value;
  let capitalize = newItem.charAt(0).toUpperCase() + newItem.slice(1);
  newItem = capitalize;

  // Validate input
  if (newItem === "") {
    // Add warning text if newItem is empty
    if (!firstDiv.contains(warningText)) {
      firstDiv.appendChild(warningText);
    }
  } else {
    // Remove warning text if newItem is not empty
    if (firstDiv.contains(warningText)) {
      firstDiv.removeChild(warningText);
    }
  }

  // Create list item if newItem is not empty
  if (newItem !== "") {
    const item = document.createElement("li");
    item.textContent = newItem;
    itemList.appendChild(item);

    const button = createButton("remove-item btn-link text-red");
    item.appendChild(button);
  }
  formInput.value = "";

  // toggle filter and clear all button only when user add item to list
  if (newItem !== "") {
    filter.style.display = "block";
    clearBtn.style.display = "block";
  }
};

// Check Ui
const checkUi = () => {
  const items = document.querySelectorAll("li");
  if (items.length === 0) {
    filter.style.display = "none";
    clearBtn.style.display = "none";
  } else {
    filter.style.display = "block";
    clearBtn.style.display = "block";
  }
};

// clear all items
const clearItems = () => {
  itemList.innerHTML = "";
  checkUi();
  //   e.stopPropagation();
};

// Remove single Element (event delegation)
const removeItem = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
    checkUi();
  }
};

// Event Listner
form.addEventListener("submit", onSubmit, false);
clearBtn.addEventListener("click", clearItems, false);
itemList.addEventListener("click", removeItem, false);

console.dir(itemList);
checkUi();
