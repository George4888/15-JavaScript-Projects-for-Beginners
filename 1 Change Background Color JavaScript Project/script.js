const button = document.getElementById("btn");
const container = document.getElementById("container");
const colors = [
  "red",
  "green",
  "yellow",
  "gray",
  "cornflowerblue",
  "crimson",
  "orange",
];

container.style.backgroundColor = "cornflowerblue";
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  container.style.backgroundColor = colors[colorIndex];
}
