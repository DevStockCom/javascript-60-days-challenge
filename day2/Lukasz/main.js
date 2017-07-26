
function setDate() {

    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");

    secondHand.style.transition = "all 0.5s";
    minHand.style.transition = "all 0.5s";
    hourHand.style.transition = "all 0.5s";

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    let secondsDegrees = ((360/60)*seconds)+90;
    let minutesDegrees = ((360/60)*minutes)+90;
    let hoursDegrees = ((360/60)*hours)+90;



if (seconds === 0 || minutes === 0 || hours === 0){
    minHand.style.transition = "initial";
}

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


}
setInterval(setDate,1000);


