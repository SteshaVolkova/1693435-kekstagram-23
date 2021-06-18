import {pictures} from './render-images.js';
import {userPhotos} from './show-photos.js';
import {closeBigPhoto} from './close.js';

const PICTURE_SIZE = 35;

const photos = pictures.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();

const addPhotoListClickHandlers = (photoItem, {url, likes, comments, description}) => {
  const openBigPicture = () => {
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    bigPictureImage.src = url;
    bigPictureLikes.textContent = likes;
    bigPictureComments.textContent = comments.length;
    bigPictureDescription.textContent = description;


    comments.forEach(({avatar, name, message}) => {
      const commentBlock = document.createElement('li');
      const commentPicture = document.createElement('img');
      const commentText = document.createElement('p');

      commentBlock.classList.add('social__comment');
      commentPicture.classList.add('social__picture');
      commentText.classList.add('social__text');
      commentPicture.src = avatar;
      commentPicture.alt = name;
      commentPicture.width = PICTURE_SIZE;
      commentPicture.height = PICTURE_SIZE;

      commentsList.innerHTML = '';

      commentText.textContent = message;
      commentBlock.appendChild(commentPicture);
      commentBlock.appendChild(commentText);
      commentFragment.appendChild(commentBlock);

      closeButton.addEventListener('click', closeBigPhoto);
    });

    commentsList.appendChild(commentFragment);

  };

  closeButton.removeEventListener('click', closeBigPhoto);
  photoItem.addEventListener('click', openBigPicture);
};

photos.forEach((photo, i) => {
  addPhotoListClickHandlers(photo, userPhotos[i]);
});
