import { pageManipulation } from './pageManipulation';
import { states } from './states';
import completionAudioPath from '/src/assets/audio/timer-complete.mp3';

const completionAudio = new Audio(completionAudioPath);
completionAudio.volume = 0.5;

export const timer = {

	start: () => {
		states.current.timer.running = true;
		pageManipulation.setTimerText('PAUSE');

		let speed = 10;
		let endTime = new Date();
		endTime.setSeconds(endTime.getSeconds() + states.current.timer.timeLeft);

		window.mainTimer = setInterval(() => {

			let currentTime = new Date();
			let timerLength = states.current.timer.type.length * 1000;
			let timeLeft = endTime - currentTime;
			let startTime = (timerLength - timeLeft);

			pageManipulation.updateProgressBar(startTime, timerLength);

			states.current.timer.timeLeft = Math.ceil(timeLeft / 1000);
			states.saveLocal();
			pageManipulation.setCurrentTime();

			if (timeLeft <= 0) {
				completionAudio.play();
				timer.stop();
				states.current.timer.completed = true;
				states.current.timer.running = false;
				pageManipulation.setTimerText('RESTART');
			}
		}, speed);
	},

	load: () => {
		if (states.current.timer.timeLeft === 0) {
			timer.reset();
			return;
		}

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