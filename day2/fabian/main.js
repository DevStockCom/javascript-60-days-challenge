const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

warsaw = document.querySelector('#warsaw');
bangkok = document.querySelector('#bangkok');

warsaw.onclick = function() {
  const now = new Date();
  console.log(now);
}

bangkok.onclick = function() {
  Date.prototype.addHours = function(h) {
    this.setHours(this.getHours() + h);
    return this;
  }
  const now = new Date().addHours(4);
  console.log(now);
}

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if ( secondsDegrees == 90 ) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60 + seconds / 60 / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12 + minutes / 60 / 12 + seconds / 60 / 60 / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const day = now.getDate();
  document.querySelector('.day').innerHTML = day;

}

setInterval(setDate, 1000);
