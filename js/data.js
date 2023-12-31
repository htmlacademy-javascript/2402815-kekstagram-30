import {getRandomInteger, getRandomArrayElement} from './util-generating.js';

const PHOTO_COUNT = 25;
const DESCRIPTIONS = ['Мечтаю', 'Пора что-то менять', 'С друзьями', 'Путешествую', 'Привет!' ];
const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const AVATAR_NAMES = ['Кошак', 'Котилка', 'Пушок', 'Слипун', 'Мохнатыш', 'Мурка' ];
const Likes = {
  minValue: 15,
  maxValue: 200
};
const Comments = {
  minValue: 0,
  maxValue: 30
};
const NumberOfAvatar = {
  minValue: 1,
  maxValue: 6
};

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(MESSAGES),).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(NumberOfAvatar.minValue, NumberOfAvatar.maxValue)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(AVATAR_NAMES),
});

const createComments = (number) => {
  const comments = [];
  for (let i = 0; i < number; i++){
    comments.push(createComment(i));
  }
  return comments;
};

const createPhotoElement = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(Likes.minValue, Likes.maxValue),
  comments: createComments(getRandomInteger(Comments.minValue, Comments.maxValue))
});

const createPhotoArray = () => {
  const photoArray = [];
  for (let i = 0; i < PHOTO_COUNT; i++){
    photoArray.push(createPhotoElement(i));

  }
  return photoArray;
};

export {createPhotoArray};
