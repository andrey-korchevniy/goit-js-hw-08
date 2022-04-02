import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
         
    })  
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    widthRatio: 0.95,
    captionDelay: 500
});


gallery.on('show.simplelightbox');

