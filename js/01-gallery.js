import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const gallery = document.querySelector('.gallery');

const imgElemenst = galleryItems.map(image => `
<a class="gallery__link" href="${image.original}">
   <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
   />
	</a>`).join("");
gallery.insertAdjacentHTML("beforeend", imgElemenst);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
	evt.preventDefault();
	console.log(evt.target.nodeName);
	console.log(evt.target.src);
	if (evt.target.nodeName !== "IMG") {
		return
	}
	const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}" width="800" height="600">
`)
	instance.show()
	gallery.addEventListener('keydown', onEscClick);
function onEscClick(evt) {
	if (evt.key !== "Escape") {
		return;
	} 
	instance.close()
}
}
