import { galleryItems } from './gallery-items.js';
// Change code below this line


// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryItemsEl = galleryItems
    .map(item => )
    .join("")


// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.


// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
//     і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>

    // Зверни увагу на те, що зображення обгорнуте посиланням,
    // отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку.
    //     Заборони цю поведінку за замовчуванням.
            
            
    //         Додай закриття модального вікна після натискання клавіші Escape.
    //         Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. 
    //         Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

console.log(galleryItems);
