function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const li = document.querySelector(`li:nth-child(${itemNumber}`);
  li.remove();
}

const removeItem2 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();

removeItem2(3);
// removeItem(3);
// removeClearButton();
// removeFirstItem();
