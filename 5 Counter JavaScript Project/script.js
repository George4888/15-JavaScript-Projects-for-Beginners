const decBtn = document.getElementById('decrease');
const incBtn = document.getElementById('increase');
const counter = document.getElementById('count');
let count = 0;

decBtn.addEventListener('click', () => {
  count--
  counter.innerHTML = count;
  if(count < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
});

incBtn.addEventListener('click', () => {
  count++
  counter.innerHTML = count;
  if(count > 0) {
    counter.style.color = 'green';
  } else {
    counter.style.color = 'black';
  }
});
