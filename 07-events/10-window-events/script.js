// wait for entire page to get load.
// Whenever we put script tag in head element .js file get executed before it reach to body element so it dosent know about abything about it so in that case is to use "load "event. then it will make entire page load
//  Load Event

// window.onload = function () {
//   document.querySelector("h1").textContent = "Hello World";
// };

//  Load Event
// window.addEventListener(
//   "load",
//   () => (document.querySelector("h1").textContent = "Hello Word")
// );

// window.addEventListener("load", () =>
//   console.log(
//     "Load: it will run after the DOMContentLoaded event beacuse it will wait for entire page to get load first"
//   )
// );

// // DOMContentLoaded()
// window.addEventListener("DOMContentLoaded", () =>
//   console.log(
//     "DOM Loaded: will run before load' because it running only specific DOM elemnt and not the whole page "
//   )
// );

// console.log(
//   "Run: it will run before both of them above because we are not chosing any dom element here "
// );

// Exception here is defer attribute. it will defer js code from running untill it can run .
{
  /* <script src="script.js" defer></script> */
}

// Resize window event

// scroll event
window.addEventListener("scroll", () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
});

// focus and blur
window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => (p.style.color = "brown"));
});

window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => (p.style.color = "black"));
});
