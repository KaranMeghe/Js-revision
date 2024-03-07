const body = document.querySelector("body");
body.style.backgroundColor = "#e4e4e4";

// insertAdjacentElement example

function insertElement() {
  const filter = document.querySelector(".filter");
  const h5 = document.createElement("h5");
  h5.textContent = "insertAdjacentElement example";

  filter.insertAdjacentElement("beforebegin", h5);
  filter.insertAdjacentElement("beforeend", h5);
}
insertElement();

// insertAdjacentText example

function insertText() {
  const item = document.querySelector("li:last-child");
  item.insertAdjacentText("afterend", "yooo");
}
insertText();

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML(
    "afterend",
    "<button> insertAdjacentHTML example </button>"
  );

  const filter = document.querySelector(".filter");
  filter.insertAdjacentHTML("beforebegin", "<h4>Green Flag</h4>");
}
insertHTML();

// insertBefore example

/*
<!-- beforebegin-->
<p>
<!-- afterbegin-->
foo
<!-- beforeend-->
</p>
<!-- afterend>
*/
