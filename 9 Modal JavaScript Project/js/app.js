function modal() {
  let storeItems = document.getElementsByClassName('store-item');
  let boxContainer = document.querySelector('.lightbox-container');
  let boxItem = document.querySelector('.lightbox-item');
  let storeImages = document.getElementsByClassName('store-img');
    
  let imageList = [];
  let counter = 0;

  for (let image of storeImages) {
    imageList.push(image.src);
  }
  console.log(imageList);

  for (let item of storeItems) {
    item.addEventListener('click', (event) => {
      let image = event.target.src;
      boxItem.style.backgroundImage = `url(${image})`;
      boxContainer.classList.add('show');
      counter = imageList.indexOf(image);
    });
  }

  const rightBtn = document.querySelector('.btnRight');
  const leftBtn = document.querySelector('.btnLeft');

  rightBtn.addEventListener('click', () => {
    counter++;
    if(counter >= imageList.length) {
      counter = 0;
    }
    boxItem.style.backgroundImage = `url(${imageList[counter]})`;
  })

  leftBtn.addEventListener('click', () => {
    counter--;
    console.log(counter);
  })
}

modal();