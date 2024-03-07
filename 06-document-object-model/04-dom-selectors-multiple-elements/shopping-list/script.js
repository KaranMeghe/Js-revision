// document.querySelectorAll();
// Returns a NodeList

const listItems = document.querySelectorAll(".item");
console.log(listItems);

// We can use forEach() on a NodeList
listItems.forEach((item, index) => {
  item.style.color = "red";

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = `Oranges <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;
  }
});
