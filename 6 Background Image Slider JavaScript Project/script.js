function changeBack() {
  const pictures = [
    "img-0", "img-1", "img-2", "img-3", "img-4", "img-5", "img-6"
  ];
  console.log(pictures);

  const buttons = document.getElementsByClassName('btn');
  const imgContainer = document.getElementById('container');
  let counter = 0;

  for(let button of buttons) {
    button.addEventListener('click', (e) => {
      if(button.classList.contains("leftBtn")) {
        counter--;
        if(counter < 0){
          counter = pictures.length - 1;
        }
        imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
      }
      if(button.classList.contains("rightBtn")){
        counter++;
        if(counter > pictures.length - 1) {
          counter = 0;
        }
        imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
      } 
    })
  }
}

changeBack();