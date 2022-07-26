import { states } from './states';
import { timer } from './timer';

const pomodoroTimerLengthInput = document.getElementById('pomodoroTimerLengthInput');
const shortBreakLengthInput = document.getElementById('shortBreakLengthInput');
const longBreakLengthInput = document.getElementById('longBreakLengthInput');

export const settings = {
	fontChoices: document.getElementById('fontChoices'),
	colorChoices: document.getElementById('colorChoices'),
	timerChoices: document.getElementById('timerChoices'),

	updateSettings: function() {
		let oldSettings = states.settings;
		let newSettings = {
			lengths: {
				'pomodoro': minToSec(pomodoroTimerLengthInput.value),
				'short break': minToSec(shortBreakLengthInput.value),
				'long break': minToSec(longBreakLengthInput.value)
			},
			accentColor: getComputedStyle(this.getSelectedChoice(this.colorChoices)).backgroundColor,
			font: getComputedStyle(this.getSelectedChoice(this.fontChoices).querySelector('div')).fontFamily,
		};

		Object.keys(newSettings).forEach(key => {
			if (newSettings[key] !== oldSettings[key]) {
				states.settings[key] = newSettings[key];
			}
		});
	},

	updateTimerType: () => {
		let newTimerType = settings.getSelectedChoice(settings.timerChoices).textContent;
		states.timer.type.name = newTimerType;
		states.timer.type.length = states.settings.lengths[newTimerType];
		states.timer.timeLeft = states.settings.lengths[newTimerType];
		timer.reset();
	},

	getSelectedChoice: (container) => {
		// container id must be named [type]Choices and selected choice [type]--selected
		let type = container.id.replace('Choices', '');
		return container.querySelector(`.${type}--selected`);
	},
};

function minToSec(min) {
	return Number(min) * 60;
}