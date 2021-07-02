import {closeMessageModal} from './close.js';

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
const classes = iamgePreviewPicture.className.split(' ').filter((c) => !c.startsWith(effectStartClassName));
const defaultEffect = document.querySelector('#effect-none');

const successUploadImage = document.querySelector('#success').content.querySelector('section');
const successFragment = document.createDocumentFragment();

const onFormSuccessSend = () => {
  userUploadPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
  commentDescription.value = '';
  textHashtag.value = '';

  const scaleAditionalValue = MAX_SCALE_VALUE;
  scaleValue.value = `${scaleAditionalValue}%`;
  const transformValue = `scale(${  scaleAditionalValue * MAX_SCALE_VALUE_PERCENT  })`;
  imagePreview.style.transform = transformValue;

  effectLevelSlider.classList.add('hidden');
  iamgePreviewPicture.className = classes.join(' ').trim();
  iamgePreviewPicture.style.filter = 'none';
  defaultEffect.checked = 'true';

  const showSuccessMessage = () => {
    const successUploadImageTemplate = successUploadImage.cloneNode(true);
    const successButtonTemplate = successUploadImageTemplate.querySelector('.success__button');
    const successInnerTemplate = successUploadImageTemplate.querySelector('.success__inner');
    successFragment.appendChild(successUploadImageTemplate);
    document.body.appendChild(successFragment);

    closeMessageModal(successUploadImageTemplate, successButtonTemplate, successInnerTemplate);
  };

  showSuccessMessage();
};

export {onFormSuccessSend};
