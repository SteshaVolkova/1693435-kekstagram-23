const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const MAX_SCALE_VALUE_PERCENT = 0.01;
const SCALE_VALUE_STEP = 25;

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview');
const scaleValue = document.querySelector('.scale__control--value');

let scaleAditionalValue = MAX_SCALE_VALUE;
scaleValue.value = `${scaleAditionalValue  }%`;

const rescalePhoto = (comparsion, expression) => {
  if (comparsion) {
    scaleAditionalValue = expression;
    scaleValue.value = `${scaleAditionalValue  }%`;

    const transformValue = `scale(${  scaleAditionalValue * MAX_SCALE_VALUE_PERCENT  })`;
    imagePreview.style.transform = transformValue;
  }
};

const onMinusButtonClick = () => {
  rescalePhoto(scaleAditionalValue > MIN_SCALE_VALUE, scaleAditionalValue - SCALE_VALUE_STEP);
};

const onPlusButtonClick = () => {
  rescalePhoto(scaleAditionalValue < MAX_SCALE_VALUE, scaleAditionalValue + SCALE_VALUE_STEP);
};

scaleSmaller.addEventListener('click', onMinusButtonClick);
scaleBigger.addEventListener('click', onPlusButtonClick);
