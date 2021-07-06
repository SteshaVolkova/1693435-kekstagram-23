import {isEscEvent} from './utils.js';

const MAX_SCALE_VALUE = 100;
const MAX_SCALE_VALUE_PERCENT = 0.01;

const bigPicture = document.querySelector('.big-picture');
const commentInput = bigPicture.querySelector('.social__footer-text');
const userUploadPhoto = document.querySelector('.img-upload__overlay');
const commentDescription = userUploadPhoto.querySelector('.text__description');
const textHashtag = document.querySelector('.text__hashtags');
const uploadFile = document.querySelector('#upload-file');
const imagePreview = document.querySelector('.img-upload__preview');
const scaleValue = document.querySelector('.scale__control--value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const iamgeUploadPreview = document.querySelector('.img-upload__preview');
const iamgePreviewPicture = iamgeUploadPreview.querySelector('img');
const effectStartClassName = 'effects__preview';
const selectedEffectClass = iamgePreviewPicture.className.split(' ').filter((c) => !c.startsWith(effectStartClassName));
const defaultEffect = document.querySelector('#effect-none');

const onCloseButtonClick = () => {
  userUploadPhoto.classList.add('hidden');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
  commentDescription.value = '';
  textHashtag.value = '';

  const scaleAditionalValue = MAX_SCALE_VALUE;
  scaleValue.value = `${scaleAditionalValue}%`;
  imagePreview.style.transform = `scale(${  scaleAditionalValue * MAX_SCALE_VALUE_PERCENT  })`;

  effectLevelSlider.classList.add('hidden');
  iamgePreviewPicture.className = selectedEffectClass.join(' ').trim();
  iamgePreviewPicture.style.filter = 'none';
  defaultEffect.checked = 'true';
};

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    if(commentDescription === document.activeElement) {
      evt.stopPropagation();
    } else if(textHashtag === document.activeElement) {
      evt.stopPropagation();
    } else {
      onCloseButtonClick();
      commentInput.value = '';
      uploadFile.value = '';
    }
  }
});

const closeMessageModal = (messageTemplate, messageCloseButton, messageInner) => {
  messageCloseButton.addEventListener('click', () => {
    messageTemplate.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      messageTemplate.remove();
    }
  });
  messageTemplate.addEventListener('click', (evt) => {
    const isClickInside = messageInner.contains(evt.target);

    if (!isClickInside) {
      messageTemplate.remove();
    }
  });
};

export {onCloseButtonClick, closeMessageModal};
