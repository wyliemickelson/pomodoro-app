import { states } from './states';

const progressBar = document.getElementById('progressBar');

export const timer = {

	handleTimerBtn: () => {
		timer.startTimer();
	},

	startTimer: () => {
		let currentAccentColor = states.settings.accentColor;
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
};