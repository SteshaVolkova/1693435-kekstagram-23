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
const effectStartClassName = 'effects__preview';
const classes = iamgePreview.className.split(' ').filter((c) => !c.startsWith(effectStartClassName));

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
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => parseFloat(value),
  },
});


const chabgeImageEffect = (desiredClass, minRangeValue, maxRangeValue, sliderStep, filterStyle, filerMeasure) => {
  effectLevelSlider.classList.remove('hidden');
  iamgePreview.className = classes.join(' ').trim();
  iamgePreview.classList.add(desiredClass);

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minRangeValue,
      max: maxRangeValue,
    },
    start: maxRangeValue,
    step: sliderStep,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterFilterStyle = `${filterStyle  }(${effectLevelValue.value}${  filerMeasure  })`;
    iamgePreview.style.filter = filterFilterStyle;
  });
};

const onNoneEffectClick = () => {
  effectLevelSlider.classList.add('hidden');
  iamgePreview.className = classes.join(' ').trim();
  iamgePreview.style.filter = 'none';
};

const onChromeEffectClick = () => {
  chabgeImageEffect('effects__preview--chrome', MIN_RANGE_VALUE, MAIN_MAX_VALUE, MAIN_STEP_VALUE, 'grayscale', '');
};

const onSepiaEffectClick = () => {
  chabgeImageEffect('effects__preview--sepia', MIN_RANGE_VALUE, MAIN_MAX_VALUE, MAIN_STEP_VALUE, 'sepia', '');
};

const onMarvinEffectClick = () => {
  chabgeImageEffect('effects__preview--marvin', MIN_RANGE_VALUE, DEFAULT_EFFECT_LEVEL, DEFAULT_EFFECT_STEP, 'invert', '%');
};

const onPhobosEffectClick = () => {
  chabgeImageEffect('effects__preview--phobos', MIN_RANGE_VALUE, ADDITIONAL_MAX_VALUE, MAIN_STEP_VALUE, 'blur', 'px');
};

const onHeatEffectClick = () => {
  chabgeImageEffect('effects__preview--heat', MAIN_MAX_VALUE, ADDITIONAL_MAX_VALUE, MAIN_STEP_VALUE, 'brightness', '');
};


effectNone.addEventListener('click', onNoneEffectClick);
effectChrome.addEventListener('click', onChromeEffectClick);
effectSepia.addEventListener('click', onSepiaEffectClick);
effectMarvin.addEventListener('click', onMarvinEffectClick);
effectPhobos.addEventListener('click', onPhobosEffectClick);
effectHeat.addEventListener('click', onHeatEffectClick);
