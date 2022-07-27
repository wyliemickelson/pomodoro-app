import { pageManipulation } from './pageManipulation';
import { states } from './states';

export const timer = {

	start: () => {
		states.current.timer.running = true;

		pageManipulation.setTimerText('PAUSE');

		let endValueSeconds = states.current.timer.type.length;
		let startValueSeconds = (endValueSeconds - states.current.timer.timeLeft);
		let progressValue = startValueSeconds * 100;
		let progressEndValue = endValueSeconds * 100;
		let speed = 10;
		let isSecond = true;

		window.mainTimer = setInterval(() => {
			progressValue++;
			isSecond = progressValue % 100 == 0;

			if (isSecond) states.current.timer.timeLeft--;

			pageManipulation.setCurrentTime();
			pageManipulation.updateProgressBar(progressValue, progressEndValue);

			if (progressValue == progressEndValue) {
				timer.stop();
				states.current.timer.completed = true;
				states.current.timer.running = false;
				pageManipulation.setTimerText('RESTART');
			}
		}, speed);
	},

	stop: () => {
		clearInterval(window.mainTimer);
	},

	reset: () => {
		timer.stop();
		states.setDefault();
		pageManipulation.setTimerText('START');
		pageManipulation.setCurrentTime();
		pageManipulation.resetProgressBar();
	},

	pause: () => {
		timer.stop();
		states.current.timer.running = false;
		pageManipulation.setTimerText('RESUME');
	}
};