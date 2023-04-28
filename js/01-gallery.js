import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", itemsMarkup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgSrc = evt.target.dataset.source;
  console.log(imgSrc);

  const imgLargeUrl = basicLightbox.create(`<img src="${imgSrc}">`, {
    onShow: () => document.addEventListener("keydown", closeModalOnESC),
    onClose: () => document.removeEventListener("keydown", closeModalOnESC),
  });

  imgLargeUrl.show();

  function closeModalOnESC(evt) {
    if (evt.code === "Escape") {
      imgLargeUrl.close();
    }
  }
}

console.log(galleryItems);
