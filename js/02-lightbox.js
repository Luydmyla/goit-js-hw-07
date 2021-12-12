import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListElem = document.querySelector('.gallery');
console.log(galleryListElem);
// --------------создаю разметку по шаблону (шаблонная строка)----------
const listImageElement = createListImageElement(galleryItems);
function createListImageElement(galleryItems) {
//     return galleryItems.map(galleryItem => `<li style = "list-style-type: none"> <a class="gallery__item" href="${galleryItem.original}">
//   <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
// </a> </li>`).join("");
     return galleryItems.map(galleryItem => ` <a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a> `).join("");
}
// console.log(listImageElement);

// --------------рендер разметки (2 способа)-------------
// galleryListElem.innerHTML = listImageElements;
galleryListElem.insertAdjacentHTML("beforeend", listImageElement)

// -------------------вешаю слушатель событий на див с создаными элементами-----------
// galleryListElem.addEventListener('click', onGalleryItemClick)
 
// ------------колбек - функция - обработчик событый -------- 
// function onGalleryItemClick(event) {
  // -----------запрет для браузера на действия по умолчанию (чтоб не открывал картинку по ссылке )------------
    // event.preventDefault();
       
    // console.log(event.target);
    // console.log(event.target.nodeName);
  // --------проверяю куда попадает мой клик - если не в картинку, то выходим и ничего не делаем)-------------
//   if (event.target.nodeName != 'IMG') {
//     return
//   } else {
//     // -------иначе, используя библиотеку бейсиклайтбокс, открываем оригинальное изображение в модальном окне-----------
//     // console.log(event.target.dataset.source);
//   basicLightbox.create(`<img width="1400" height="900" src= "${event.target.dataset.source}">`).show() }
// }
  
 let gallery = new SimpleLightbox('.gallery a');
    console.log(gallery);
    console.log(gallery.options.captionData);
gallery.on ('show.simplelightbox', function () {
// сделай что-нибудь…
   
});

