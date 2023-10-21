const calculatingTime = (str) => {
  const newString = str.split(':');
  if (newString.length === 0){
    return newString;
  }
  return (newString[0] * 60 + newString[1]);
};
const isMeetingMoved = (begin,finish,start,duration) => {
  const beginTime = calculatingTime(begin);
  const finishTime = calculatingTime(finish);
  const startMeetingTime = calculatingTime(start);
  return (startMeetingTime >= beginTime && finishTime > (startMeetingTime + duration));
};

console.log(isMeetingMoved('08:00', '17:30', '14:00', 90));
console.log(isMeetingMoved('08:00', '14:30', '14:00', 90));// false
console.log(isMeetingMoved('14:00', '17:30', '08:0', 90));// false
console.log(isMeetingMoved('8:00', '17:30', '08:00', 900));// false
