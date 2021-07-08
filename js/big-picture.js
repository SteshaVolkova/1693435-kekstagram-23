import {pictures} from './render-images.js';
import {onCloseButtonClick, onEscButtonClick} from './close.js';

const PICTURE_SIZE = 35;
const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureLikesField = bigPicture.querySelector('.likes-count');
const bigPictureCommentsField = bigPicture.querySelector('.comments-count');
const bigPictureCommentsCount = bigPicture.querySelector('.current-comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();

const addPhotoListClickHandler = (photoItem, {url, likes, comments, description}) => {
  const onPictureClick = (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

    bigPictureImage.src = url;
    bigPictureLikesField.textContent = likes;
    bigPictureCommentsField.textContent = comments.length;
    bigPictureDescription.textContent = description;

    commentsList.innerHTML = '';

    const addCommentsToList = (photoComments) => {
      photoComments.forEach(({avatar, name, message}) => {
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

    const slicedComments = comments.slice(commentsCounter, commentsCounterInex);
    addCommentsToList(slicedComments);

    commentsLoader.addEventListener('click', () => {
      commentsCounter += COMMENTS_STEP;
      commentsCounterInex += COMMENTS_STEP;

      const slicedAdditionalComments = comments.slice(commentsCounter, commentsCounterInex);
      addCommentsToList(slicedAdditionalComments);

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

    document.addEventListener('keydown', onEscButtonClick);
    closeButton.addEventListener('click', onCloseButtonClick);
  };

  photoItem.addEventListener('click', onPictureClick);
};

const addBigPhotoComments = (userPhotoList) => {
  const photos = pictures.querySelectorAll('.picture');

  photos.forEach((photo, i) => {
    addPhotoListClickHandler(photo, userPhotoList[i]);
  });
};

export {addBigPhotoComments};
