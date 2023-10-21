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
isMeetingMoved();
