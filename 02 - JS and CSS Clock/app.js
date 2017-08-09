'use strict';

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  // console.log(now);

  const seconds = now.getSeconds();
  const secDeg = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  const minutes = now.getMinutes();
  const minDeg = ((minutes / 60) * 360 ) + 90;
  minsHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = ( (hour / 12) * 360) + ( (minutes / 60) * 30) + ( (seconds / 60) * 6) + 90;
  console.log(hourDeg);
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);
setDate();
