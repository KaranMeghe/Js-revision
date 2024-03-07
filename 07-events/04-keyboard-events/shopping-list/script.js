const itemInput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("Kepress Value:", e.target.value);
};

const onKeyUp = (e) => {
  console.log("Kepress Up:", e.target.value);
};

const onKeyDown = (e) => {
  // key
  console.log(e.key);
  // keycode
  console.log(e.keyCode);
  // code
  console.log(e.code);
  // repeat
  if (e.repeat) {
    console.log("you are holding ", e.code);
  }
  // shiftkey
  console.log("Shift " + e.shiftKey);
  console.log("Control " + e.ctrlKey);
  console.log("Alt " + e.altKey);
};

// itemInput.addEventListener("keypress", onKeyPress, false);
// itemInput.addEventListener("keyup", onKeyUp, false);
itemInput.addEventListener("keydown", onKeyDown, false);
