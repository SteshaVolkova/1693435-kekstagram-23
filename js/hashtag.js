const textHashtag = document.querySelector('.text__hashtags');
const uploadSubmit = document.querySelector('#upload-submit');
const MAX_HASHTAGS_COUNT = 5;
const regexHeshtagValue = /^#[A-za-zА-Яа-я0-9]{1,19}$/;

uploadSubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
});


const onSubmitButton = (evt) => {
  if (textHashtag.value !== '') {
    const hashtags = textHashtag.value.split(' ');

    hashtags.forEach((hashtag, i) => {

      if(!regexHeshtagValue.test(hashtag)) {
        textHashtag.setCustomValidity(`Хэштег должен начинаться со знака "#" и включать в себя только буквы и цифры.
          Количетво символов после знака "#" должно быть не менее 1 и не более 19`);
        return false;
      } else {
        textHashtag.setCustomValidity('');
      }

      textHashtag.reportValidity();

      const positionNextHashtag = i + 1;
      if (hashtags.indexOf(hashtag, positionNextHashtag) > 0) {
        textHashtag.setCustomValidity('Хэштеги не должны повторяться');
        evt.preventDefault();
      }
    });

    if (hashtags.length > MAX_HASHTAGS_COUNT) {
      textHashtag.setCustomValidity(`Количество тегов должно быть равно ${ MAX_HASHTAGS_COUNT } или менее`);
    }
  }
};

textHashtag.addEventListener('input', onSubmitButton);
