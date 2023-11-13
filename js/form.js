const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1-19}$/i;
const MAX_HASHTAG_COUNT = 5;
// const TextError = {
//   INVALID_COUNT: 'Допустимо максимум ${MAX_HASHTAG_COUNT} хэштегов',
//   INVALID_SYMBOL: 'Использован недопустимый символ',
//   NOT_UNIQUE: 'Не уникальный хэштег',
// };

const uploadForm = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const fileField = uploadForm.querySelector('.img-upload__input');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const cancelForm = editForm.querySelector('.img-upload__cancel');
const pushCommentButton = editForm.querySelector('.img-upload__submit');
// const previewForm = uploadForm.querySelector('.img-upload__preview');
// const hashtagField = uploadForm.querySelector('.text__hashtags');
// const commentField = uploadForm.querySelector('.text__description');

//const hashtag = uploadForm.querySelector('[name = "hashtags"]');
//const pristine = new Pristine(uploadForm);

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

// const hasValidSymbols = (value) => {

//   if(!HASHTAG_SYMBOLS.test(value)) {
//     return console.log('Ошибка в хэштеге')
//   } else {
//     return console.log('Ошибка в хэштеге')}
// };

const onButtonPushClick = (evt) => {
  evt.preventDefault();
  closeForm();
  pushCommentButton.removeEventListener('submit', onButtonPushClick);
  //hasValidSymbols(hashtagField.value);
};

const showForm = (evt) => {
  evt.preventDefault();
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
};

fileField.addEventListener('change', showForm);
cancelForm.addEventListener('click', onButtonCloseClick);
document.addEventListener('keydown', onKeydownCloseClick);
pushCommentButton.addEventListener('submit', onButtonPushClick);

export {showForm};

