//const container = document.querySelector('.pictures');
const bigPictureView = document.querySelector('.big-picture');
const closePictureButton = document.querySelector('.big-picture__cancel');
const commentsCounter = bigPictureView.querySelector('.social__comment-count');
const commentsLoader = bigPictureView.querySelector('.comments-loader');
const commentShownCount = commentsCounter.querySelector('.social__comment-shown-count');
const commentTotalCount = commentsCounter.querySelector('.social__comment-total-count');
const commentsList = document.querySelector('.social__comments');

const COMMENTS_COUNT_STEP = 5;
let commentsCountShown = 0;
let comments = [];

const commentTemplate = document.querySelector('#comment')
  .content.querySelector('.social__comment');

const createComment = ({avatar, message, name}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const closeBigPicture = () => {
  bigPictureView.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsCountShown = 0;
};

const onBigPictureEscKeydown = (evt) => {
  if (evt.key === 'Escape'){
    closeBigPicture();

    document.removeEventListener('keydown', onBigPictureEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closeBigPicture();

  closePictureButton.removeEventListener('click', onCloseButtonClick);

};

const fillComments = () => {
  const fragmentOfComments = document.createDocumentFragment();
  commentsList.innerHTML = '';
  commentsCountShown += COMMENTS_COUNT_STEP;

  if(commentsCountShown >= comments.length){
    commentsLoader.classList.add('hidden');
    commentsCountShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  for (let i = 0; i < commentsCountShown; i++){
    const template = createComment(comments[i]);
    fragmentOfComments.append(template);
  }

  commentsList.append(fragmentOfComments);
  commentShownCount.textContent = commentsCountShown;
  commentTotalCount.textContent = comments.length;
};

const onCommentsLoaderClick = () => {
  fillComments();
};

const showPicture = (pictureData) => {
  bigPictureView.querySelector('.big-picture__img img').src = pictureData.url;
  bigPictureView.querySelector('.big-picture__img img').alt = pictureData.description;
  bigPictureView.querySelector('.social__caption').textContent = pictureData.description;
  bigPictureView.querySelector('.likes-count').textContent = pictureData.likes;
};

const showBigPicture = (pictureData) => {
  bigPictureView.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onBigPictureEscKeydown);
  closePictureButton.addEventListener('click', onCloseButtonClick);

  showPicture(pictureData);

  comments = pictureData.comments;

  fillComments();
};

commentsLoader.addEventListener('click', onCommentsLoaderClick);
export {showBigPicture};

