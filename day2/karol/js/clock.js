document.addEventListener("DOMContentLoaded", function(){

	const newYorkBtn = document.querySelector('button');
	const polishBtn = document.querySelector('button').nextElementSibling;

	function polishTime() {
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

		if(seconds === 0){
			secondHand.style.transition = "initial";
		}
		if(minutes === 0){
			minHand.style.transition = "initial";
		}
		if(hours === 0){
			minHand.style.transition = "initial";
		}

		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		minHand.style.transform = `rotate(${minutesDegrees}deg)`;
		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	}

	function americaTime(){
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

		if(seconds === 0){
			secondHand.style.transition = "initial";
		}
		if(minutes === 0){
			minHand.style.transition = "initial";
		}
		if(hours === 0){
			minHand.style.transition = "initial";
		}

		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		minHand.style.transform = `rotate(${minutesDegrees}deg)`;
		hourHand.style.transform = `rotate(${hoursDegrees - 180}deg)`;

	}

	let timeZone = setInterval(polishTime, 1000);

	newYorkBtn.addEventListener("click", function(){
		clearInterval(timeZone);
		timeZone = setInterval(americaTime, 1000);
		this.style.backgroundColor = 'red';
		polishBtn.style.backgroundColor = 'teal';
	});

	polishBtn.addEventListener("click", function(){
		clearInterval(timeZone);
		timeZone = setInterval(polishTime, 1000);
		this.style.backgroundColor = 'red';
		newYorkBtn.style.backgroundColor = 'teal';
	});

});
	
