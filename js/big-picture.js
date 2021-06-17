import {pictures} from './render-images.js';
import {userPhotos} from './show-photos.js';

const photoList = pictures.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();

const addPhotoListClickHandler = function (photoItem, photo, likes, comments, description, commentarrow) {
  photoItem.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');

    bigPictureImage.src = photo;
    bigPictureLikes.textContent = likes;
    bigPictureComments.textContent = comments;
    bigPictureDescription.textContent = description;

    for(let j = 0; j < comments; j++) {
      const commentBlock = document.createElement('li');
      const commentPicture = document.createElement('img');
      const commentText = document.createElement('p');

      commentBlock.classList.add('social__comment');
      commentPicture.classList.add('social__picture');
      commentText.classList.add('social__text');
      commentPicture.src = commentarrow[j].avatar;
      commentPicture.alt = commentarrow[j].name;
      commentPicture.width = 35;
      commentPicture.height = 35;

      commentsList.innerHTML = '';

      commentText.textContent = commentarrow[j].message;
      commentBlock.appendChild(commentPicture);
      commentBlock.appendChild(commentText);
      commentFragment.appendChild(commentBlock);
    }

    commentsList.appendChild(commentFragment);
  });
};

for (let i = 0; i < photoList.length; i++) {
  addPhotoListClickHandler(photoList[i], userPhotos[i].url, userPhotos[i].likes, userPhotos[i].comments.length, userPhotos[i].description, userPhotos[i].comments);
}


export {bigPicture, socialCommentCount, commentsLoader, body};
