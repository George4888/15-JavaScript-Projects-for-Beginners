const button = document.getElementById("btn");
const container = document.getElementById("container");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexVal = document.getElementById("hexVal");

container.style.backgroundColor = "#6495ed";
button.addEventListener("click", changeHex);

function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex = hex + hexValues[index];
  }

  hexVal.innerHTML = "Hex Value " + hex;
  container.style.backgroundColor = hex;
}
