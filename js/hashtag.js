const MAX_HASHTAGS_COUNT = 5;
const ERROR_BORDER_COLOR = 'red';
const DEFAULT_BORDER_COLOR = 'black';
const TEXT_HASHTAG_VALIDATE = `Хэштег должен начинаться со знака "#" и включать в себя только буквы и цифры.
          Количетво символов после знака "#" должно быть не менее 1 и не более 19. Чтобы добавить новый хэш-тег
          добавьте пробел.`;
const HASHTAGS_NO_REPEAT = 'Хэштеги не должны повторяться';
const regexHeshtagValue = /^#[A-za-zА-Яа-я0-9]{1,19}$/;
const textHashtag = document.querySelector('.text__hashtags');


const onFormHashtagCheck = (evt) => {

  if (textHashtag.value !== '') {
    const hashtags = textHashtag.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag);
    const hashtagsSet = new Set(hashtags);

    hashtags.forEach((hashtag) => {
      if(!regexHeshtagValue.test(hashtag)) {
        textHashtag.setCustomValidity(TEXT_HASHTAG_VALIDATE);
        textHashtag.style.borderColor = ERROR_BORDER_COLOR;
        textHashtag.style.outlineColor = ERROR_BORDER_COLOR;
        evt.preventDefault();
      } else if (hashtags.length !== hashtagsSet.size) {
        textHashtag.setCustomValidity(HASHTAGS_NO_REPEAT);
        textHashtag.style.borderColor = ERROR_BORDER_COLOR;
        textHashtag.style.outlineColor = ERROR_BORDER_COLOR;
        evt.preventDefault();
      } else {
        textHashtag.setCustomValidity('');
        textHashtag.style.borderColor = DEFAULT_BORDER_COLOR;
        textHashtag.style.outlineColor = DEFAULT_BORDER_COLOR;
      }

      textHashtag.reportValidity();
    });

    if (hashtags.length > MAX_HASHTAGS_COUNT) {
      textHashtag.setCustomValidity(`Количество тегов должно быть равно ${ MAX_HASHTAGS_COUNT } или менее`);
    }
  }
};


textHashtag.addEventListener('input', onFormHashtagCheck);
