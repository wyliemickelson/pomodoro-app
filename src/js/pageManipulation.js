import { states } from './states';
import { timer } from './timer';
import { utilities } from './utilities';

const settingsModal = document.getElementById('settings');
const pageMask = document.getElementById('pageMask');
const timeLeft = document.getElementById('timeLeft');
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

	updateProgressBar: (progressValue, endValue) => {
		progressBar.style.background = `conic-gradient(
      var(--clr-accent-current) ${progressValue * (360 / endValue)}deg,
      hsl(234deg, 39%, 14%) ${progressValue * (360 / endValue)}deg
    )`;
	},

	setCurrentTime: () => {
		let seconds = states.current.timer.timeLeft % 60;
		if (seconds < 10) {
			seconds = '0' + seconds.toString();
		}
		let minutes = Math.floor(states.current.timer.timeLeft / 60);
		timeLeft.textContent = `${minutes}:${seconds}`;
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
		timer.reset();
	}
};
