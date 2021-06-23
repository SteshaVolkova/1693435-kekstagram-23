import {pictures} from './render-images.js';
import {userPhotos} from './show-photos.js';
import {onCloseButtonClick} from './close.js';

const PICTURE_SIZE = 35;
const COMMENTS_STEP = 5;

const photos = pictures.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureCommentsCount = bigPicture.querySelector('.current-comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();


const addPhotoListClickHandler = (photoItem, {url, likes, comments, description}) => {
  const onPictureClick = () => {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

    bigPictureImage.src = url;
    bigPictureLikes.textContent = likes;
    bigPictureComments.textContent = comments.length;
    bigPictureDescription.textContent = description;

    commentsList.innerHTML = '';

    const addCommentToList = (comment) => {
      comment.forEach(({avatar, name, message}) => {
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


        commentText.textContent = message;
        commentBlock.appendChild(commentPicture);
        commentBlock.appendChild(commentText);
        commentFragment.appendChild(commentBlock);
      });

      commentsList.appendChild(commentFragment);
    };
    let commentsCounter = 0;
    let commentsCounterInex = COMMENTS_STEP;

    const sliceComments = comments.slice(commentsCounter, commentsCounterInex);
    addCommentToList(sliceComments);

    commentsLoader.addEventListener('click', () => {
      commentsCounter += COMMENTS_STEP;
      commentsCounterInex += COMMENTS_STEP;

      const sliceAdditionalComments = comments.slice(commentsCounter, commentsCounterInex);
      addCommentToList(sliceAdditionalComments);

      bigPictureCommentsCount.textContent = commentsList.children.length;

      if(comments.length === commentsList.children.length) {
        commentsLoader.classList.add('hidden');
      }
    });

    if(comments.length > COMMENTS_STEP) {
      socialCommentCount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');

      bigPictureCommentsCount.textContent = COMMENTS_STEP;
    } else {
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    }

    closeButton.addEventListener('click', onCloseButtonClick);
  };

  closeButton.removeEventListener('click', onCloseButtonClick);
  photoItem.addEventListener('click', onPictureClick);
};

photos.forEach((photo, i) => {
  addPhotoListClickHandler(photo, userPhotos[i]);
});
