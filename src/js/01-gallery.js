// Add imports above this line

import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

// Change code below this line
const gallery = document.querySelector(".gallery");

function createImg(el) {
    const step = el.map(({ preview, original, description }) => { 
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("")
    return step
}

gallery.insertAdjacentHTML("afterbegin", createImg(galleryItems));

 
new SimpleLightbox(".gallery a",
  {
    captionsData: "alt",
    captionDelay: 250,
  });
console.log(galleryItems);
