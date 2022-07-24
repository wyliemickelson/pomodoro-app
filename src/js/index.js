import '/src/sass/index.scss';

const progressBar = document.getElementById('progressBar');

let progressValue = 0;
let progressEndValue = 100;
let speed = 10;

let progress = setInterval(() => {
	progressValue++;
	progressBar.style.background = `conic-gradient(
    hsl(0deg, 91%, 71%) ${progressValue * 3.6}deg,
    hsl(234deg, 39%, 14%) ${progressValue * 3.6}deg
  )`;
	if (progressValue == progressEndValue) {
		clearInterval(progress);
	}
}, speed);