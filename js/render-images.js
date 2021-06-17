import {userPhotos} from './show-photos.js';

const pictures = document.querySelector('.pictures');
const pictureTemplateFragment = document.querySelector('#picture').content.querySelector('a');
const pictureFragment = document.createDocumentFragment();


userPhotos.forEach((photo) => {
  const element = pictureTemplateFragment.cloneNode(true);
  const elementPicture = element.querySelector('.picture__img');
  const elementLikes = element.querySelector('.picture__likes');
  const elementComments = element.querySelector('.picture__comments');

  elementPicture.src = photo.url;
  elementLikes.textContent = photo.likes;
  elementComments.textContent = photo.comments.length;

  pictureFragment.appendChild(element);
});

pictures.appendChild(pictureFragment);

export {pictures};
