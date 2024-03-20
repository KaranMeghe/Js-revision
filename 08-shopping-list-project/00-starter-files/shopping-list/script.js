const formInput = document.querySelector("#item-input");
const form = document.querySelector("#item-form");
const itemList = document.querySelector("#item-list");
const firstDiv = document.querySelector("#item-form > div:first-child");
const addItemBtn = document.querySelector(".btn");
const filter = document.querySelector(".filter input");
const clearBtn = document.querySelector("#clear");

// displayItems
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDom(item));
  checkUi();
}

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

// Get Value From Local Storage
const getItemsFromStorage = () => {
  let itemsForStorage;
  // Get values from Local Storage but first check weather its empty or not
  if (JSON.parse(localStorage.getItem("items") === null)) {
    itemsForStorage = []; // on initial stage there will be no data so it will be empty array.
  } else {
    itemsForStorage = JSON.parse(localStorage.getItem("items")); // on 1st render it will be not empty so we are getting data
  }
  return itemsForStorage;
};

// Local Storage
const addItemsToStorage = (item) => {
  // creating itemsForStorage variable for having scope for this function, block
  const itemsForStorage = getItemsFromStorage();

  itemsForStorage.push(item); // pushing item into array

  // Convert to JSON string and set items into local storage
  localStorage.setItem("items", JSON.stringify(itemsForStorage));
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

  //   const itemsFromStorage = displayItems();

  // Create list item if newItem is not empty
  //   Add item to Dom
  addItemToDom(newItem);

  addItemsToStorage(newItem);

  formInput.value = "";

  // toggle filter and clear all button only when user add item to list
  if (newItem !== "") {
    filter.style.display = "block";
    clearBtn.style.display = "block";
  }
};

function addItemToDom(newItem) {
  if (newItem !== "") {
    const item = document.createElement("li");
    item.textContent = newItem;
    itemList.appendChild(item);

    const button = createButton("remove-item btn-link text-red");
    item.appendChild(button);
  }
}

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
  // Clear from local storage
  localStorage.removeItem("items");
};

// onClick Item
function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  }
}

// Remove single Element (event delegation)
const removeItem = (item) => {
  // Remove item from dom
  item.remove();
  // Remove item from localStorage
  removeItemsFromStore(item.textContent);
  checkUi();
};

// rmoving item from local storage
function removeItemsFromStore(item) {
  let itemFromStorage = getItemsFromStorage();
  itemFromStorage = itemFromStorage.filter((i) => i !== item);

  //   Re-set Local storage
  localStorage.setItem("items", JSON.stringify(itemFromStorage));
}

// Filter items
const filterItems = (e) => {
  const inputText = e.target.value.toLowerCase();
  const items = document.querySelectorAll("li");

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(inputText) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

//
// Event Listner, Initialize App
function init() {
  form.addEventListener("submit", onSubmit, false);
  clearBtn.addEventListener("click", clearItems, false);
  itemList.addEventListener("click", onClickItem, false);
  filter.addEventListener("input", filterItems, false);
  document.addEventListener("DOMContentLoaded", displayItems, false);
  checkUi();
}

init();
