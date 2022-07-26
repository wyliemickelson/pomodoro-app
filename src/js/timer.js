import { pageManipulation } from './pageManipulation';
import { states } from './states';

export const timer = {

	start: () => {
		timer.toggleRunning();

		pageManipulation.setTimerText('PAUSE');

		let endValue = states.timer.type.length;
		let startValue = endValue - states.timer.timeLeft;

		let progressValue = startValue;

		let speed = 1000;

		window.mainTimer = setInterval(() => {
			progressValue++;
			states.timer.timeLeft--;

			pageManipulation.setCurrentTime();
			pageManipulation.updateProgressBar(progressValue, endValue);

			if (progressValue == endValue) {
				timer.stop();
			}
		}, speed);
	},

	toggleRunning: () => {
		states.timer.running = !states.timer.running;
	},

	stop: () => {
		clearInterval(window.mainTimer);
	},

	reset: () => {
		timer.stop();
		states.timer.running = false;
		pageManipulation.setTimerText('START');
		pageManipulation.setCurrentTime();
		pageManipulation.resetProgressBar();
	},

	pause: () => {
		timer.stop();
		timer.toggleRunning();
		pageManipulation.setTimerText('RESUME');
	}
};