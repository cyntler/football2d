import { createEventEmitter } from '@src/utils/createEventEmitter';

const getCurrentTime = (currentSecond: number) => {
  const minuteValue = Math.floor(currentSecond / 60);
  const secondValue = currentSecond - minuteValue * 60;

  const minute = minuteValue < 10 ? `0${minuteValue}` : minuteValue;
  const second = secondValue < 10 ? `0${secondValue}` : secondValue;

  return `${minute}:${second}`;
};

export const startMatchTimer = (speed: number) => {
  const eventEmitter = createEventEmitter();
  let currentSecond = 0;

  setInterval(() => {
    currentSecond += 1;
    eventEmitter.emit('update', getCurrentTime(currentSecond));
  }, 1000 / speed);

  return eventEmitter;
};
