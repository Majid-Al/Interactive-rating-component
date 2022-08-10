// remove a class form an id tag
"use strict";
var selected = 0;
document.getElementById("r1").onclick = function () {
  selected = 1;
  const some = document.getElementsByClassName("beforee");
  for (const beforee of some) {
    beforee.classList.remove("selected-butt");
  }
  const bgs = document.getElementById("r1");
  bgs.classList.add("selected-butt");
};
document.getElementById("r2").onclick = function () {
  selected = 2;
  const some = document.getElementsByClassName("beforee");
  for (const beforee of some) {
    beforee.classList.remove("selected-butt");
  }
  const bgs = document.getElementById("r2");
  bgs.classList.add("selected-butt");
};
document.getElementById("r3").onclick = function () {
  selected = 3;
  const some = document.getElementsByClassName("beforee");
  for (const beforee of some) {
    beforee.classList.remove("selected-butt");
  }
  const bgs = document.getElementById("r3");
  bgs.classList.add("selected-butt");
};
document.getElementById("r4").onclick = function () {
  selected = 4;
  const some = document.getElementsByClassName("beforee");
  for (const beforee of some) {
    beforee.classList.remove("selected-butt");
  }
  const bgs = document.getElementById("r4");
  bgs.classList.add("selected-butt");
};
document.getElementById("r5").onclick = function () {
  selected = 5;
  const some = document.getElementsByClassName("beforee");
  for (const beforee of some) {
    beforee.classList.remove("selected-butt");
  }
  const bgs = document.getElementById("r5");
  bgs.classList.add("selected-butt");
};
function submited() {
  const fronts = document.getElementsByClassName("beforee");
  for (const beforee of fronts) {
    beforee.classList.add("back-to-shadows");
  }

  const backs = document.getElementsByClassName("afterr");
  for (const afterr of backs) {
    afterr.classList.remove("back-to-shadows");
  }
  const selectedd = document.getElementById("num-place");

  selectedd.textContent += selected;
}
// function clicked() {
//   if (document.getElementById("r1").clicked == true) {
//     alert("button was clicked");
//   }

//   if (document.getElementById("r1").clicked == true) {
//     selected = 1;
//   }
//   if (document.getElementById("r2").clicked) {
//     selected = 2;
//   }
//   if (document.getElementById("r3").clicked) {
//     selected = 3;
//   }
//   if (document.getElementById("r4").clicked) {
//     selected = 4;
//   }
//   if (document.getElementById("r5").clicked) {
//     selected = 5;
//   }

//   console.log(selected);
// }

// // remove class from an idd element
// function myFunction() {
//   var element = document.getElementById("myDIV");
//   element.classList.remove("mystyle");
// }

// //  add a class to an id
// function myFunction() {
//   var element = document.getElementById("myDIV");
//   element.classList.add("mystyle");
// }
