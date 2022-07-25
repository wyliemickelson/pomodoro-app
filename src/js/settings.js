import { states } from './states';

const pomodoroTimerLengthInput = document.getElementById('pomodoroTimerLengthInput');
const shortBreakLengthInput = document.getElementById('shortBreakLengthInput');
const longBreakLengthInput = document.getElementById('longBreakLengthInput');
const fontChoices = document.getElementById('fontChoices');
const colorChoices = document.getElementById('colorChoices');
const timerChoices = document.getElementById('timerChoices');

export const settings = {
	update: () => {
		states.settings.pomodoroLength = minToSec(pomodoroTimerLengthInput.value);
		states.settings.shortBreakLength = minToSec(shortBreakLengthInput.value);
		states.settings.longBreakLength = minToSec(longBreakLengthInput.value);
		
		let newAccentColor = getComputedStyle(getSelectedChoice(colorChoices, 'color')).backgroundColor;
		states.settings.accentColor = newAccentColor;

		let newFont = getComputedStyle(getSelectedChoice(fontChoices, 'font')).fontFamily;
		states.settings.font = newFont;

		let newTimerType = getSelectedChoice(timerChoices, 'btn').textContent;
		states.timer.type = newTimerType;
	}
};

function minToSec(min) {
	return Number(min) * 60;
}

function getSelectedChoice(container, type) {
	return container.querySelector(`.${type}--selected`);
}