function switchColor() {
  let currentColor = document.getElementById("dalal");
  let back = document.getElementById("main-area");
  let but = document.getElementById("changer");
  console.log(but);
  if (currentColor.innerText == "Red") {
    currentColor.innerText = "Blue";
    back.style.backgroundColor = "blue";
  } else {
    currentColor.innerText = "Red";
    back.style.backgroundColor = "red";
  }
}
