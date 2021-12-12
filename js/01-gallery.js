import { galleryItems } from './gallery-items.js';
// Change code below this line
// --- ----нашла ссылку на элемент div.gallery ------------
console.log(galleryItems);
const refs = {
    list: document.querySelector('.gallery'),
};
console.log(refs.list);
// --------------создаю разметку по шаблону (шаблонная строка)----------
const listImageElements = createListImageElements(galleryItems);
function createListImageElements(galleryItems) {
    return galleryItems.map(galleryItem => `<li style = "list-style-type: none"> <div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}" /> </a> </div> </li>`).join("");
}
// console.log(listImageElements);

// --------------рендер разметки (2 способа)-------------
// refs.list.innerHTML = listImageElements;
refs.list.insertAdjacentHTML("beforeend", listImageElements)

// -------------------вешаю слушатель событий на див с создаными элементами-----------
refs.list.addEventListener('click', onGalleryItemsClick)
 
// ------------колбек - функция - обработчик событый -------- 
function onGalleryItemsClick(event) {
  // -----------запрет для браузера на действия по умолчанию (чтоб не открывал картинку по ссылке )------------
   event.preventDefault();
    // console.log(event.target);
    // console.log(event.target.nodeName);
  // --------проверяю куда попадает мой клик - если не в картинку, то выходим и ничего не делаем)-------------
  if (event.target.nodeName != 'IMG') {
    return
  } else {
    // -------иначе, используя библиотеку бейсиклайтбокс, открываем оригинальное изображение в модальном окне-----------
    // console.log(event.target.dataset.source);
  const instance = basicLightbox.create(`<img width="1400" height="900" src= "${event.target.dataset.source}">`).show() }
  }
