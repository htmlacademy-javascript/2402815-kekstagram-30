const isShortString = (string, countOfSymbols) => countOfSymbols <= string.length;

isShortString('проверяемая строка', 20);
isShortString('проверяемая строка', 18);
isShortString('проверяемая строка', 10);

const isPalindrom = (string) => {
  const phrase = string.replaceAll(' ', '').toLowerCase();
  let reversePhrase = '';
  for (let i = phrase.length - 1; i >= 0; i--){
    reversePhrase += phrase[i];
  }
  return reversePhrase === phrase ? 'Палиндром' : 'Не палиндром';
};
isPalindrom('Лёша на полке клопа нашёл ');
