// Method 1
// window.addEventListener("keydown", (e) => {
//   const insert = document.getElementById("insert");

//   insert.innerHTML = `
//   <div class="key">
//   ${e.key === " " ? "Space" : e.key}
//   <small>e.key</small>
// </div>

// <div class="key">
//   ${e.keyCode}
//   <small>e.keyCode</small>
// </div>

// <div class="key">
//    ${e.code}
//   <small>e.code</small>
// </div>
//   `;
// });

// Method 2
// const showKeyCodes = (e) => {
//   const insert = document.querySelector("#insert");
//   insert.innerHTML = " ";

//   const keysInfo = {
//     key: e.key,
//     keyCode: e.keyCode,
//     code: e.code,
//   };

//   for (const key in keysInfo) {
//     const div = document.createElement("div");
//     div.className = "key";

//     const small = document.createElement("small");
//     const keyText = document.createTextNode(
//       keysInfo[key] === " " ? "Space" : keysInfo[key]
//     );
//     const keyValue = document.createTextNode(key);

//     small.appendChild(keyValue);
//     div.appendChild(keyText);
//     div.appendChild(small);
//     insert.appendChild(div);

//     div.style.marginBottom = "40px";

//     console.log(div);
//   }
// };

const showKeyCodes = (e) => {
  const insert = document.getElementById("insert");
  insert.innerHTML = " ";

  const keysInfo = [
    {
      "e.key": e.key,
      "e.keyCode": e.keyCode,
      "e.code": e.code,
    },
  ];

  keysInfo.forEach((object) => {
    for (const key in object) {
      const div = document.createElement("div");
      const small = document.createElement("small");

      div.className = "key";
      const keys = document.createTextNode(object[key]);
      const keysValue = document.createTextNode(key);
      small.appendChild(keys);
      div.appendChild(keysValue);
      div.appendChild(small);
      insert.appendChild(div);
    }
  });
};

window.addEventListener("keydown", showKeyCodes, false);

{
  /* <div class="key">
s
<small>e.key</small>
</div>

<div class="key">
83
<small>e.keyCode</small>
</div>

<div class="key">
KeyS
<small>e.code</small>
</div> */
}
