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
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  container.style.backgroundColor = randomColor;
}
