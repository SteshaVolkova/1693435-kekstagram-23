import {bigPicture, socialCommentCount, commentsLoader, body} from './big-picture.js';

const closeButton = bigPicture.querySelector('.big-picture__cancel');

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    body.classList.remove('modal-open');
  }
});
