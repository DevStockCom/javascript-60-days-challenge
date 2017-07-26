	function playSound(e){
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if(!audio) return;
		audio.currentTime = 0;
		audio.play()
		key.classList.add('playing');

		let count = document.querySelector(".counter").innerHTML;
		let countSound = parseInt(count) +1;
		document.querySelector(".counter").innerHTML = countSound;

		setTimeout(function(){
			key.classList.remove('playing');
		}
		, 40);
	}

	// function removeTransition(e){
	// 	console.log(e)
	// 	if(e.propertyName !== 'transform') return;
	// 	this.classList.remove('playing');
	// }

	const keys = document.querySelectorAll(".key");
	// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	window.addEventListener("keydown", playSound);

	
