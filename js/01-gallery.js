import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

function makeGallery(items) {
  return galleryItems.map({preview, original, description}) => 
      `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${decription}
    />
  </a>
</li>`
    )
    .join("")
  }
const galleryList = document.querySelector('.gallery');
const galleryCards = makeGallery(galleryItems);

galleryList.innerHTML = galleryCards;
galleryList.addEventListener('click', onPictureClick) ;

function onPictureClick(event) {
  event.preventDefault();

  const isPicture = event.target.classList.contains('gallery__image');
    if (!isPicture) {
        return;
    }

    const bigPictureLink = event.target.dataset.source;
    
    onModalOpen (bigPictureLink);
    }


function onModalOpen(url) {
    const closeModal = event => {
    if (event.code === 'Escape') { bigImage.close(); }
};

    const bigImage = basicLightbox.create(`
		<img src="${url}">`,
        {
            onShow: (bigImage) =>
                document.addEventListener('keydown', closeModal),
            onClose: (bigImage) =>
                document.removeEventListener('keydown', closeModal)
        });
        bigImage.show();
}  

