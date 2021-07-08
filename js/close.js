import {isEscEvent} from './utils.js';

const MAX_SCALE_VALUE = 100;
const MAX_SCALE_VALUE_PERCENT = 0.01;
const DEFAULT_BORDER_COLOR = 'black';

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

const onEscButtonClick = (evt) => {
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
};

const onCloseButtonClick = () => {
  userUploadPhoto.classList.add('hidden');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
  commentDescription.value = '';
  commentDescription.style.borderColor = DEFAULT_BORDER_COLOR;
  commentDescription.style.outlineColor = DEFAULT_BORDER_COLOR;
  textHashtag.value = '';

  const scaleAditionalValue = MAX_SCALE_VALUE;
  scaleValue.value = `${scaleAditionalValue}%`;
  imagePreview.style.transform = `scale(${  scaleAditionalValue * MAX_SCALE_VALUE_PERCENT  })`;

  effectLevelSlider.classList.add('hidden');
  iamgePreviewPicture.className = selectedEffectClass.join(' ').trim();
  iamgePreviewPicture.style.filter = 'none';
  defaultEffect.checked = 'true';
  document.removeEventListener('keydown', onEscButtonClick);
};

const removeListenerSuccessMessage = () => {
  const successModal = document.querySelector('.success');
  const successModalButton = document.querySelector('.success__button');

  successModalButton.removeEventListener('click', onButtonModalSuccessClick);
  document.removeEventListener('keydown', onKeyToSuccessModalClick);
  successModal.removeEventListener('click', onModalSuccessOutsideClick);
};

const onButtonModalSuccessClick = () => {
  const successModal = document.querySelector('.success');
  removeListenerSuccessMessage();
  successModal.remove();
};

const onKeyToSuccessModalClick = (evt) => {
  if (isEscEvent(evt)) {
    const successModal = document.querySelector('.success');
    removeListenerSuccessMessage();
    successModal.remove();
  }
};

const onModalSuccessOutsideClick = (evt) => {
  const successInnerTemplate = evt.currentTarget.querySelector('.success__inner');
  const isClickInside = successInnerTemplate.contains(evt.target);

  if (!isClickInside) {
    removeListenerSuccessMessage();
    evt.currentTarget.remove();
  }
};

const closeSuccessMessageModal = () => {
  const successModal = document.querySelector('.success');
  const successModalButton = document.querySelector('.success__button');

  successModalButton.addEventListener('click', onButtonModalSuccessClick);
  document.addEventListener('keydown', onKeyToSuccessModalClick);
  successModal.addEventListener('click', onModalSuccessOutsideClick);
};

const removeListenerErrorMessage = () => {
  const errorModal = document.querySelector('.error');
  const errorModalButton = document.querySelector('.error__button');

  errorModalButton.removeEventListener('click', onButtonModalErrorClick);
  document.removeEventListener('keydown', onKeyToErrorModalClick);
  errorModal.removeEventListener('click', onModalErrorOutsideClick);
};

const onButtonModalErrorClick = () => {
  const errorModal = document.querySelector('.error');
  removeListenerErrorMessage();
  errorModal.remove();
};

const onKeyToErrorModalClick = (evt) => {
  if (isEscEvent(evt)) {
    const errorModal = document.querySelector('.error');
    removeListenerErrorMessage();
    errorModal.remove();
  }
};

const onModalErrorOutsideClick = (evt) => {
  const errorInnerTemplate = evt.currentTarget.querySelector('.error__inner');
  const isClickInside = errorInnerTemplate.contains(evt.target);

  if (!isClickInside) {
    removeListenerErrorMessage();
    evt.currentTarget.remove();
  }
};

const closeErrorMessageModal = () => {
  const errorModal = document.querySelector('.error');
  const errorModalButton = document.querySelector('.error__button');

  errorModalButton.addEventListener('click', onButtonModalErrorClick);
  document.addEventListener('keydown', onKeyToErrorModalClick);
  errorModal.addEventListener('click', onModalErrorOutsideClick);
};


export {onCloseButtonClick, onEscButtonClick, closeSuccessMessageModal, closeErrorMessageModal};
