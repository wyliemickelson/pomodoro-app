import { settings } from './settings';
import { states } from './states';

const settingsModal = document.getElementById('settings');
const pageMask = document.getElementById('pageMask');
const timeLeft = document.getElementById('timeLeft');
const timerText = document.getElementById('timerText');
const progressBar = document.getElementById('progressBar');

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
		let seconds = states.timer.timeLeft % 60;
		if (seconds < 10) {
			seconds = '0' + seconds.toString();
		}
		let minutes = Math.floor(states.timer.timeLeft / 60);
		timeLeft.textContent = `${minutes}:${seconds}`;
	},

	setTimerText: (newText) => {
		timerText.textContent = newText;
	},

	setSelectedChoice: (newChoice) => {
		let choiceContainer = newChoice.parentElement;
		let type = choiceContainer.id.replace('Choices', '');
		settings.getSelectedChoice(choiceContainer).classList.remove(`${type}--selected`);
		newChoice.classList.add(`${type}--selected`);
	},

	setAccentColor: () => {
		document.documentElement.style.setProperty('--clr-accent-current', `${states.settings.accentColor}`);
	},

	setFont: () => {
		document.documentElement.style.setProperty('--font-current', `${states.settings.font}`);
	},
};
