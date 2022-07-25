import { pageManipulation } from './pageManipulation';
import { states } from './states';

const progressBar = document.getElementById('progressBar');

export const timer = {

	startTimer: () => {
		timer.toggleOn();

		let endValue = states.settings.pomodoroLength;
		let startFrom = endValue - states.timer.timeLeft;

		let currentAccentColor = states.settings.accentColor;
		let progressValue = startFrom;
		let progressEndValue = endValue;
		let speed = 1000;

		window.mainTimer = setInterval(() => {
			progressValue++;
			states.timer.timeLeft--;

			pageManipulation.updateCurrentTime();

			progressBar.style.background = `conic-gradient(
        ${currentAccentColor} ${progressValue * (360 / progressEndValue)}deg,
        hsl(234deg, 39%, 14%) ${progressValue * (360 / progressEndValue)}deg
      )`;
			if (progressValue == progressEndValue) {
				timer.stopTimer();
			}
		}, speed);
	},

	toggleOn: () => {
		states.timer.running = !states.timer.running;
	},

	stopTimer: () => {
		clearInterval(window.mainTimer);
		timer.toggleOn();
	}
};