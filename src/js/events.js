import { pageManipulation } from './pageManipulation';

const settingsApplyBtn = document.getElementById('settingsApplyBtn');
const showSettingsBtn = document.getElementById('showSettingsBtn');
const exitSettingsBtn = document.getElementById('exitSettingsBtn');

export const events = {
	setUpListeners: () => {
		settingsApplyBtn.addEventListener('click', events.handleApplySettings);
		showSettingsBtn.addEventListener('click', events.handleToggleSettings);
		exitSettingsBtn.addEventListener('click', events.handleToggleSettings);
	},

	handleApplySettings: () => {
		pageManipulation.toggleSettings();
	},

	handleToggleSettings: () => {
		pageManipulation.toggleSettings();
	}
};