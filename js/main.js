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
  min: 15,
  max: 200
};
const Comments = {
  min: 0,
  max: 30
};
const NumberOfAvatar = {
  min: 1,
  max: 6
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.lenght - 1)];

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(NumberOfAvatar.min, NumberOfAvatar.max)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(AVATAR_NAMES)
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
  likes: getRandomInteger(Likes.min, Likes.max),
  comments: createComments(getRandomInteger(Comments.min, Comments.max))
});

const createPhotoArray = () => {
  const photoArray = [];
  for (let i = 0; i < PHOTO_COUNT; i++){
    photoArray.push(createPhotoElement[i]);
  }
};

createPhotoArray();
