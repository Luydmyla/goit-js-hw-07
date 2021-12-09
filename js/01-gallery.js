import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    list: document.querySelector('.gallery'),

};
console.log(refs.list);

// const listImageElenents = createListImageMarcup(galleryItems);
// console.log(listImageMarcup);
const createListImageElements = galleryItems.map(galleryItem => `<li style = "list-style-type: none"> <div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}" />   </a>  </div>  </li>`).join("");
  
  console.log(createListImageElements);
refs.list.innerHTML = createListImageElements;
// refs.list.insertAdjacentHTML("beforeend", createListImageElements)
console.log(refs.list);
 
refs.list.addEventListener('click', onGalleryItemsClick)

function onGalleryItemsClick(event) {
      console.log(event.target);
  }
//  import * as basicLightbox from 'basiclightbox' 
const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()