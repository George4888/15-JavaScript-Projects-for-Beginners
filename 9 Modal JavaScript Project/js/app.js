function modal() {
  let storeItems = document.getElementsByClassName('store-item');
  let storeImages = document.getElementsByClassName('store-img');
  let boxContainer = document.getElementsByClassName('lightbox-container');
  let boxItem = document.getElementsByClassName('lightbox-item');
    
  let imageList = [];
  let counter = 0;

  for (let image of storeImages) {
    imageList.push(image.src);
  }
  console.log(imageList);

  for (let item of storeItems) {
    item.addEventListener('clcik', (event) => {
      item = event.target.src;
    })
  }
}

modal();