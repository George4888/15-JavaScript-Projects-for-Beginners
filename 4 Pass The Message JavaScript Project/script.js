const submitBtn = document.getElementById('submit-btn');
let messageTxt = document.getElementById('message');


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let inputText = document.getElementById('empty-field').value;
  messageTxt.innerHTML = inputText;
  document.getElementById('empty-field').value = ' ';
})
