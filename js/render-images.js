import {userPhotoArray} from './show-photos.js';

const pictures = document.querySelector('.pictures');
const pictureTemplateFragment = document.querySelector(' #picture').content;
const pictureTemplate = pictureTemplateFragment.querySelector('a');
const pictureFragment = document.createDocumentFragment();


for(let i = 0; i < userPhotoArray.length; i++) {
  const element = pictureTemplate.cloneNode(true);
  const elementLikes = element.querySelector('.picture__likes');
  const elementComments = element.querySelector('.picture__comments');

  element.children[0].src = userPhotoArray[i].url;
  elementLikes.textContent = userPhotoArray[i].likes;
  elementComments.textContent = userPhotoArray[i].comments.length;

  pictureFragment.appendChild(element);
}

pictures.appendChild(pictureFragment);
