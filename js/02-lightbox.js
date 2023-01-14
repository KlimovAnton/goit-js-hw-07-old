import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector(`.gallery`);

const markUp = galleryItems.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image" width="340" src="${preview}" alt="${description}" data-source="${original}">
    </a>`, ``);

galleryElement.innerHTML = markUp;

galleryElement.addEventListener(`click`, onClick);

function onClick (evt) {
    evt.preventDefault();

    let lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: `alt`,
        captionsPosition: `bottom`,
        captionsDelay: 250,
});
}
