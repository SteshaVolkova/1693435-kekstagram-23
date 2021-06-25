const DEFAULT_EFFECT_LEVEL = 100;
const DEFAULT_EFFECT_STEP = 1;
const MIN_RANGE_VALUE = 0;
const MAIN_MAX_VALUE = 1;
const MAIN_STEP_VALUE = 0.1;
const ADDITIONAL_MAX_VALUE = 3;

const iamgeUploadPreview = document.querySelector('.img-upload__preview');
const iamgePreview = iamgeUploadPreview.querySelector('img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

effectLevelSlider.classList.add('hidden');
effectLevelValue.value = DEFAULT_EFFECT_LEVEL;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: MIN_RANGE_VALUE,
    max: DEFAULT_EFFECT_LEVEL,
  },
  start: DEFAULT_EFFECT_LEVEL,
  step: DEFAULT_EFFECT_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const onNoneEffectClick = () => {
  effectLevelSlider.classList.add('hidden');
  iamgePreview.className = '';
};

const onChromeEffectClick = () => {
  effectLevelSlider.classList.remove('hidden');
  iamgePreview.className = '';
  iamgePreview.classList.add('effects__preview--chrome');

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: MIN_RANGE_VALUE,
      max: MAIN_MAX_VALUE,
    },
    start: MAIN_MAX_VALUE,
    step: MAIN_STEP_VALUE,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterChrome = `grayscale(${effectLevelValue.value})`;
    iamgePreview.style.filter = filterChrome;
  });
};

const onSepiaEffectClick = () => {
  effectLevelSlider.classList.remove('hidden');
  iamgePreview.className = '';
  iamgePreview.classList.add('effects__preview--sepia');

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: MIN_RANGE_VALUE,
      max: MAIN_MAX_VALUE,
    },
    start: MAIN_MAX_VALUE,
    step: MAIN_STEP_VALUE,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterSepia = `sepia(${effectLevelValue.value})`;
    iamgePreview.style.filter = filterSepia;
  });
};

const onMarvinEffectClick = () => {
  effectLevelSlider.classList.remove('hidden');
  iamgePreview.className = '';
  iamgePreview.classList.add('effects__preview--marvin');

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: MIN_RANGE_VALUE,
      max: DEFAULT_EFFECT_LEVEL,
    },
    start: DEFAULT_EFFECT_LEVEL,
    step: DEFAULT_EFFECT_STEP,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterMarvin = `invert(${effectLevelValue.value}%)`;
    iamgePreview.style.filter = filterMarvin;
  });
};

const onPhobosEffectClick = () => {
  effectLevelSlider.classList.remove('hidden');
  iamgePreview.className = '';
  iamgePreview.classList.add('effects__preview--phobos');

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: MIN_RANGE_VALUE,
      max: ADDITIONAL_MAX_VALUE,
    },
    start: ADDITIONAL_MAX_VALUE,
    step: MAIN_STEP_VALUE,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterPhobos = `blur(${effectLevelValue.value}px)`;
    iamgePreview.style.filter = filterPhobos;
  });
};

const onHeatEffectClick = () => {
  effectLevelSlider.classList.remove('hidden');
  iamgePreview.className = '';
  iamgePreview.classList.add('effects__preview--heat');

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: MIN_RANGE_VALUE,
      max: ADDITIONAL_MAX_VALUE,
    },
    start: ADDITIONAL_MAX_VALUE,
    step: MAIN_STEP_VALUE,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterHeat = `brightness(${effectLevelValue.value})`;
    iamgePreview.style.filter = filterHeat;
  });
};


effectNone.addEventListener('click', onNoneEffectClick);
effectChrome.addEventListener('click', onChromeEffectClick);
effectSepia.addEventListener('click', onSepiaEffectClick);
effectMarvin.addEventListener('click', onMarvinEffectClick);
effectPhobos.addEventListener('click', onPhobosEffectClick);
effectHeat.addEventListener('click', onHeatEffectClick);
