import { states } from './states';
import { timer } from './timer';
import { utilities } from './utilities';

const settingsModal = document.getElementById('settings');
const pageMask = document.getElementById('pageMask');
const timeLeftText = document.getElementById('timeLeft');
const timerText = document.getElementById('timerText');
const progressBar = document.getElementById('progressBar');
const pomodoroTimerLengthInput = document.getElementById('pomodoroTimerLengthInput');
const shortBreakLengthInput = document.getElementById('shortBreakLengthInput');
const longBreakLengthInput = document.getElementById('longBreakLengthInput');

export const pageManipulation = {
	toggleSettings: () => {
		pageManipulation.toggleHidden(settingsModal);
		pageManipulation.toggleHidden(pageMask);
	},

	toggleHidden: (element) => {
		element.classList.toggle('hidden');
	},

	resetProgressBar: () => {
		progressBar.style.background = 'var(--clr-accent-current)';
	},

	updateProgressBar: (currentTime, endTime) => {
		progressBar.style.background = `conic-gradient(
      var(--clr-accent-current) ${currentTime * (360 / endTime)}deg,
      hsl(234deg, 39%, 14%) ${currentTime * (360 / endTime)}deg
    )`;
	},

	setCurrentTime: (seconds = states.current.timer.timeLeft) => {
		let hours = Math.floor(seconds / 3600);
		let minutes = Math.floor((seconds - (hours * 3600)) / 60);
		seconds = seconds - (hours * 3600) - (minutes * 60);

		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;

		let timeStr = `${minutes}:${seconds}`;
		if (hours > 0) timeStr = `${hours}:${minutes}`;
		timeLeftText.textContent = timeStr;
	},

	setTimerText: (newText) => {
		timerText.textContent = newText;
	},

	setChoice: (newChoiceId, type) => {
		const oldChoice = utilities.getSelectedChoice(type);
		const newChoice = document.getElementById(newChoiceId);
		oldChoice.classList.remove(`${type}--selected`);
		newChoice.classList.add(`${type}--selected`);
	},

	setTimerType: () => {
		pageManipulation.setChoice(states.current.timer.type.id, 'timer');
	},

	setTimerLengthInputs: () => {
		pomodoroTimerLengthInput.value = utilities.secToMin(states.current.settings.lengths.pomodoro);
		shortBreakLengthInput.value = utilities.secToMin(states.current.settings.lengths['short break']);
		longBreakLengthInput.value = utilities.secToMin(states.current.settings.lengths['long break']);
	},

	setAccentColor: () => {
		document.documentElement.style.setProperty('--clr-accent-current', `${states.current.settings.accentColor.content}`);
		pageManipulation.setChoice(states.current.settings.accentColor.id, 'color');
	},

	setFont: () => {
		document.documentElement.style.setProperty('--font-current', `${states.current.settings.font.content}`);
		pageManipulation.setChoice(states.current.settings.font.id, 'font');
	},

	loadPage: () => {
		pageManipulation.setAccentColor();
		pageManipulation.setFont();
		pageManipulation.setTimerLengthInputs();
		pageManipulation.setTimerType();
		timer.load();
	}
};
