import {hashtagField} from './hashtags.js';

const uploadForm = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const fileField = uploadForm.querySelector('#upload-file');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const cancelForm = editForm.querySelector('.img-upload__cancel');
const pushCommentButton = editForm.querySelector('.img-upload__submit');

const closeForm = () => {
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  fileField.reset();
};

const onButtonCloseClick = () => {
  closeForm();
  cancelForm.removeEventListener('click', onButtonCloseClick);
};

const onKeydownCloseClick = (evt) => {
  if (evt.key === 'Escape') {
    closeForm();
  }
  document.removeEventListener('keydown', onKeydownCloseClick);
};

const onButtonPushClick = (evt) => {
  evt.preventDefault();
  closeForm();
  pushCommentButton.removeEventListener('submit', onButtonPushClick);
  //hasValidSymbols(hashtagField.value);
};

const onFormCloseClick = cancelForm.addEventListener('click', onButtonCloseClick);

const showForm = (evt) => {
  evt.preventDefault();
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onKeydownCloseClick);
  onFormCloseClick();
};

fileField.addEventListener('change', showForm);

pushCommentButton.addEventListener('submit', onButtonPushClick);

const MAX_HASHTAG_COUNT = 5;
const MAX_SYMBOLS = 20;
// const TextError = {
//   INVALID_COUNT: 'Допустимо максимум ${MAX_HASHTAG_COUNT} хэштегов',
//   INVALID_SYMBOL: 'Использован недопустимый символ',
//   NOT_UNIQUE: 'Не уникальный хэштег',
// };
//const uploadForm = document.querySelector('.img-upload__form');
const imgUploadSubmit = document.querySelector('#upload-submit');
//const hashtagField = uploadForm.querySelector('.text__hashtags');
let errorMessage = '';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__item',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__item',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error',
});

const showError = () => errorMessage;
const onHashtagFieldClick = (value) => {
  errorMessage = '';
  const inputText = value.toLowerCase().trim();
  if(!inputText){
    return true;
  }
  const inputArray = inputText.split(/\s+/);
  if(inputArray.length === 0){
    return true;
  }

  const rules = [
    {
      check: inputArray.some((item) => item.indexOf('#',1) >= 1),
      error: 'Хэш-теги разделяются пробелами',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должен начинаться с символа #',
    },
    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'Хэш-теги не должны повторяться',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS),
      error: `Максимальная длина хэш-тега ${MAX_SYMBOLS} символов`,
    },
    {
      check: inputArray.length > MAX_HASHTAG_COUNT,
      error: `Максимальное количество хэш-тегов должно быть не более ${MAX_HASHTAG_COUNT}`,
    },
    {
      check: inputArray.some((item) => /^#[a-zа-яё0-9]{1-19}$/i.test(item)),
      error: 'Хэш-тег содержит недопустимые символы',
    },
  ];
  return rules.every((rule) => {
    const isValid = rule.check;
    if (isValid){
      errorMessage = rule.error;
    }
    return !isValid;
  });
};

pristine.addValidator(hashtagField, onHashtagFieldClick, showError, false);

const onHashtagFieldInput = () => {
  if (pristine.validate()){
    imgUploadSubmit.disabled = false;
  } else {
    imgUploadSubmit.disabled = true;
  }
};

hashtagField.addEventListener('input', onHashtagFieldInput);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {showForm};

