import { settings } from './settings';
import { states } from './states';

const settingsModal = document.getElementById('settings');
const pageMask = document.getElementById('pageMask');
const timeLeft = document.getElementById('timeLeft');

export const pageManipulation = {
	toggleSettings: () => {
		pageManipulation.toggleHidden(settingsModal);
		pageManipulation.toggleHidden(pageMask);
	},

	toggleHidden: (element) => {
		element.classList.toggle('hidden');
	},

	changeSelectedChoice: (newChoice) => {
		let choiceContainer = newChoice.parentElement;
		let type = choiceContainer.id.replace('Choices', '');
		settings.getSelectedChoice(choiceContainer).classList.remove(`${type}--selected`);
		newChoice.classList.add(`${type}--selected`);
	},

	updateCurrentTime: () => {
		let seconds = states.timer.timeLeft % 60;
		let minutes = Math.floor(states.timer.timeLeft / 60);
		timeLeft.textContent = `${minutes}:${seconds}`;
	}
};
