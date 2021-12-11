import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    list: document.querySelector('.gallery'),
};
console.log(refs.list);

const listImageElements = createListImageElements(galleryItems);
function createListImageElements(galleryItems) {
    return galleryItems.map(galleryItem => `<li style = "list-style-type: none"> <div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}" /> </a> </div> </li>`).join("");
}
// console.log(listImageElements);
// refs.list.innerHTML = listImageElements;
refs.list.insertAdjacentHTML("beforeend", listImageElements)

refs.list.addEventListener('click', onGalleryItemsClick)  

function onGalleryItemsClick(event) {
    if (event.target.nodeName != 'IMG') {
    return
  } else {
    event.preventDefault();
     //  console.log(event.target.nodeName);
    // console.log(event.target);
    // console.log(event.target.dataset.source);
    refs.list.onclick = () => { basicLightbox.create(`<img width="1400" height="900" src= "${event.target.dataset.source}">`).show() }
  }
  }
