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

			if (isSecond) {
				states.current.timer.timeLeft--;
				states.saveLocal();
			}

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

	load: () => {
		let timerText = (states.current.timer.timeLeft === states.current.timer.type.length) ? 'START' : 'RESUME';
		pageManipulation.setTimerText(timerText);
		pageManipulation.setCurrentTime();
		states.current.timer.running = false;

		let endLength = states.current.timer.type.length;
		let remLength = states.current.timer.timeLeft;

		if (endLength == remLength) {
			pageManipulation.resetProgressBar();
		} else {
			pageManipulation.updateProgressBar(endLength - remLength, endLength);
		}
	},

	stop: () => {
		clearInterval(window.mainTimer);
		states.current.timer.running = false;
		states.saveLocal();
	},

	reset: () => {
		timer.stop();
		states.setDefault();
		pageManipulation.resetProgressBar();
		timer.load();
		states.saveLocal();
	},

	pause: () => {
		timer.stop();
		pageManipulation.setTimerText('RESUME');
	}
};