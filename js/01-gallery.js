import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`,
  )
  .join('');

galleryItemsEl.innerHTML = markup;

const onClickImage = event => {
  event.preventDefault();
  const bigUrlImage = event.target.dataset.source;

  const instance = basicLightbox.create(`
	<img src='${bigUrlImage}' width="800" height="600">
`);

  instance.show();

  document.addEventListener('keydown', onEscapePress);

  function onEscapePress(event) {
    if (event.code === 'escape') {
      instance.close();
    }
    document.removeEventListener('keydown', onEscapePress);
  }
};

galleryItemsEl.addEventListener('click', onClickImage);
