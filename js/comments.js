const commentTemplate = document.querySelector('#comment')
  .content.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const bigPictureView = document.querySelector('.big-picture');
const commentShownCount = bigPictureView.querySelector('.social__comment-shown-count');
const commentTotalCount = bigPictureView.querySelector('.social__comment-total-count');


const createComment = ({avatar, message, name}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const fillComments = (comments) => {
  commentsList.innerHTML = '';
  const fragmentOfComments = document.createDocumentFragment();

  comments.forEach((element) => {
    const template = createComment(element);
    fragmentOfComments.append(template);
  });
  commentsList.append(fragmentOfComments);

};

export {fillComments};
