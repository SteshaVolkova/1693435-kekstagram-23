const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentInput = bigPicture.querySelector('.social__footer-text');

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    document.body.classList.remove('modal-open');
		commentInput.value = '';
  }
});
