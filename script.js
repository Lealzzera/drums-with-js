document.body.addEventListener("keyup", (event) =>
	playSound(event.code.toLowerCase())
);

const playButton = document.querySelector(".composer button");
const drumKeys = document.querySelectorAll(".key");

drumKeys.forEach((key) => {
	key.addEventListener("click", ({ target }) =>
		playSound(target.attributes[0].nodeValue)
	);
});

playButton.addEventListener("click", () => {
	const song = document.getElementById("input").value;
	if (song !== "") {
		const songArray = song.split("");
		playComposition(songArray);
	}
});

function playSound(sound) {
	const audioElement = document.querySelector(`#s_${sound}`);
	const keyElement = document.querySelector(`div[data-key="${sound}"]`);
	keyElement;
	if (audioElement && keyElement) {
		audioElement.currentTime = 0;
		audioElement.play();
		keyElement.classList.add("active");
		setTimeout(() => {
			keyElement.classList.remove("active");
		}, 300);
	}
}

function playComposition(songArray) {
	let wait = 0;
	songArray.forEach((item) => {
		setTimeout(() => {
			playSound(`key${item}`);
		}, wait);
		wait += 250;
	});
}
