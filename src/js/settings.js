import { states } from './states';

const pomodoroTimerLengthInput = document.getElementById('pomodoroTimerLengthInput');
const shortBreakLengthInput = document.getElementById('shortBreakLengthInput');
const longBreakLengthInput = document.getElementById('longBreakLengthInput');

export const settings = {
	fontChoices: document.getElementById('fontChoices'),
	colorChoices: document.getElementById('colorChoices'),
	timerChoices: document.getElementById('timerChoices'),

	update: function() {
		states.settings.pomodoroLength = minToSec(pomodoroTimerLengthInput.value);
		states.settings.shortBreakLength = minToSec(shortBreakLengthInput.value);
		states.settings.longBreakLength = minToSec(longBreakLengthInput.value);
		
		let newAccentColor = getComputedStyle(this.getSelectedChoice(this.colorChoices)).backgroundColor;
		states.settings.accentColor = newAccentColor;

		let newFont = getComputedStyle(this.getSelectedChoice(this.fontChoices).querySelector('div')).fontFamily;
		states.settings.font = newFont;


		// maybe delete this later
		let newTimerType = this.getSelectedChoice(this.timerChoices).textContent;
		states.timer.type = newTimerType;

		console.log(states.settings);
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