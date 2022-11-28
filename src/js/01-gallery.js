// Add imports above this line
import { galleryItems } from './gallery-items.js';

//import SimpleLightbox
new SimpleLightbox('.some-element a', {
  /* options */
});
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const lastInLiImageEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <a class="gallery__item" href="${preview}">
         <img class="gallery__image" src="${original}" alt="${description}" title="${description}"/>
        </a> 
        `
  )
  .join('');
galleryEl.innerHTML = '<div class="gallery">' + lastInLiImageEl + '</div> ';

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {});
