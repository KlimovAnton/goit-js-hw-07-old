import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector(`.gallery`);

const markUp = galleryItems.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>`, ``);

galleryElement.innerHTML = markUp;

galleryElement.addEventListener(`click`, onClick);

console.log(basicLightbox)

function onClick (evt) {
    evt.preventDefault();
    
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show()
}

