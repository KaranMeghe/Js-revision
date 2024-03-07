function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First";

  firstItem.replaceWith(li);
}

// function replaceSecondItem() {
//   const secondItem = document.querySelector("li:nth-child(2)");
//   const li = document.createElement("li");
//   li.textContent = "Second Item";

//   secondItem.replaceWith(li);
// }

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");
  secondItem.outerHTML = "<li>Replaced Second</li>";
}

function replaceAllItems() {
  const items = document.querySelectorAll("li");
  console.log(items);

  items.forEach((item) => {
    item.outerHTML = "<li>Replace All</li>";
  });
}

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";

  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
