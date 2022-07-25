import '/src/sass/index.scss';

const timerBtn = document.getElementById('timerBtn');

timerBtn.addEventListener('click', handleTimerBtn);

const ACCENT_COLORS = [
	'hsl(0deg, 91%, 71%)', 
	'hsl(182deg, 91%, 71%)', 
	'hsl(284deg, 89%, 74%)'
];

const progressBar = document.getElementById('progressBar');

function getCurrentAccentColor() {
	return getComputedStyle(document.documentElement)
		.getPropertyValue('--clr-accent-current');
}

function handleTimerBtn() {
	startTimer();
}

function startTimer() {
	let currentAccentColor = getCurrentAccentColor();
	let progressValue = 0;
	let progressEndValue = 100;
	let speed = 1000;

	let progress = setInterval(() => {
		progressValue++;
		progressBar.style.background = `conic-gradient(
    ${currentAccentColor} ${progressValue * 3.6}deg,
    hsl(234deg, 39%, 14%) ${progressValue * 3.6}deg
  )`;
		if (progressValue == progressEndValue) {
			clearInterval(progress);
		}
	}, speed);
}