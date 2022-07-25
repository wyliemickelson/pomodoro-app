import { settings } from './settings';

const settingsModal = document.getElementById('settings');
const pageMask = document.getElementById('pageMask');

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
	}
};
