const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const UPLOAD_DEFAULT_IMAGE = 'img/upload-default-image.jpg';

const fileChooser = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const checkFileFormat = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (checkFileFormat) {
    const reader = new FileReader();

    reader.addEventListener('load', () => preview.src = reader.result);

    reader.readAsDataURL(file);
  }

  preview.src = UPLOAD_DEFAULT_IMAGE;
});
