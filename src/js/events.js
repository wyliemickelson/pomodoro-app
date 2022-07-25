import { pageManipulation } from './pageManipulation';
import { timer } from './timer';
import { settings } from './settings';

const timerBtn = document.getElementById('timerBtn');
const settingsApplyBtn = document.getElementById('settingsApplyBtn');
const showSettingsBtn = document.getElementById('showSettingsBtn');
const exitSettingsBtn = document.getElementById('exitSettingsBtn');

export const events = {
	setUpListeners: () => {
		settingsApplyBtn.addEventListener('click', events.handleApplySettings);
		showSettingsBtn.addEventListener('click', events.handleToggleSettings);
		exitSettingsBtn.addEventListener('click', events.handleToggleSettings);
		timerBtn.addEventListener('click', events.handleTimerBtn);
	},

	handleApplySettings: () => {
		pageManipulation.toggleSettings();
		settings.update();
	},

	handleToggleSettings: () => { pageManipulation.toggleSettings(); },

	handleTimerBtn: () => { timer.startTimer(); }
};