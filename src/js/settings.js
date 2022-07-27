import { states } from './states';
import { utilities } from './utilities';

const pomodoroTimerLengthInput = document.getElementById('pomodoroTimerLengthInput');
const shortBreakLengthInput = document.getElementById('shortBreakLengthInput');
const longBreakLengthInput = document.getElementById('longBreakLengthInput');

export const settings = {

	updateSettings: function() {
		let accentColorEle = utilities.getSelectedChoice('color');
		let fontEle = utilities.getSelectedChoice('font');
		let timerType = utilities.getSelectedChoice('timer');
		let accentColorStyle = getComputedStyle(accentColorEle).backgroundColor;
		let fontStyle = getComputedStyle(fontEle).fontFamily;

		let newStates = {
			timer: {
				type: {
					name: timerType.textContent,
					length: utilities.getTimerLength(timerType.textContent),
					id: timerType.id,
				},
				timeLeft: states.current.timer.timeLeft,
				running: states.current.timer.running,
				completed: states.current.timer.completed,
			},
		
			settings: {
				lengths: {
					'pomodoro': utilities.minToSec(pomodoroTimerLengthInput.value),
					'short break': utilities.minToSec(shortBreakLengthInput.value),
					'long break': utilities.minToSec(longBreakLengthInput.value)
				},
				accentColor: {
					id: accentColorEle.id,
					content: accentColorStyle,
				},
				font: {
					id: fontEle.id,
					content: fontStyle,
				},
			},
		};

		states.current = newStates;
	},
};