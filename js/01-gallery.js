import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
function makeGallery(items) {
  return galleryItems.map({preview, original, description} => {
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
    })
    .join("")
  }
const galleryList = document.querySelector('.gallery');
const galleryCards = makeGallery(galleryItems);

galleryList.innerHTML = galleryCards;
galleryList.addEventListener('click', onPictureClick) ;


// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 
// Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
function onPictureClick(event) {
  event.preventDefault();

  const isPicture = event.target.classList.contains('gallery__image');
    if (!isPicture) {
        return;
    }

    const bigPictureLink = event.target.dataset.source;
    
    onModalOpen (bigPictureLink);
    }

// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
//     і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.


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

    // Зверни увагу на те, що зображення обгорнуте посиланням,
    // отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку.
    //     Заборони цю поведінку за замовчуванням.
            
            
    //         Додай закриття модального вікна після натискання клавіші Escape.
    //         Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. 
    //         Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

