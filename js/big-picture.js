import {pictures} from './render-images.js';
import {userPhotos} from './show-photos.js';

const PICTURE_SIZE = 35;

const photoList = pictures.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();

const addPhotoListClickHandlers = (photoItem, photo) => {
  photoItem.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    bigPictureImage.src = photo.url;
    bigPictureLikes.textContent = photo.likes;
    bigPictureComments.textContent = photo.comments;
    bigPictureDescription.textContent = photo.description;


    photo.comments.forEach((comment) => {
      const commentBlock = document.createElement('li');
      const commentPicture = document.createElement('img');
      const commentText = document.createElement('p');

      commentBlock.classList.add('social__comment');
      commentPicture.classList.add('social__picture');
      commentText.classList.add('social__text');
      commentPicture.src = comment.avatar;
      commentPicture.alt = comment.name;
      commentPicture.width = PICTURE_SIZE;
      commentPicture.height = PICTURE_SIZE;

      commentsList.innerHTML = '';

      commentText.textContent = comment.message;
      commentBlock.appendChild(commentPicture);
      commentBlock.appendChild(commentText);
      commentFragment.appendChild(commentBlock);
    });

    commentsList.appendChild(commentFragment);
  });
};

// photoList.forEach(({photoList, userPhoto}) => {
//   addPhotoListClickHandlers(photoList, userPhotos);
// });

for (let i = 0; i < photoList.length; i++) {
  addPhotoListClickHandlers(photoList[i], userPhotos[i]);
}
