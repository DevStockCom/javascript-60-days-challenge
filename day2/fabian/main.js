const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  // const seconds = 45;
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  // const minutes = 0;
  const minutesDegrees = ((minutes / 60 + seconds / 60 / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  console.log("mins degrees: " + minutesDegrees);

  const hours = now.getHours();
  // const hours = 3;
  const hoursDegrees = ((hours / 12 + minutes / 60 / 12 + seconds / 60 / 60 / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log("hour degrees: " + hoursDegrees);
  console.log(hours + ":" + minutes + ":" + seconds);

}

setInterval(setDate, 1000);
