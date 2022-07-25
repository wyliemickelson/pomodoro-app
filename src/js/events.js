import { pageManipulation } from './pageManipulation';
import { timer } from './timer';
import { settings } from './settings';
import { states } from './states';

const timerBtn = document.getElementById('timerBtn');
const settingsApplyBtn = document.getElementById('settingsApplyBtn');
const showSettingsBtn = document.getElementById('showSettingsBtn');
const exitSettingsBtn = document.getElementById('exitSettingsBtn');

export const events = {
	setUpListeners: function() {
		settingsApplyBtn.addEventListener('click', this.handleApplySettings);
		showSettingsBtn.addEventListener('click', this.handleToggleSettings);
		exitSettingsBtn.addEventListener('click', this.handleToggleSettings);
		timerBtn.addEventListener('click', this.handleTimerBtn);
		this.addChoiceListeners(settings.fontChoices);
		this.addChoiceListeners(settings.colorChoices);
		this.addChoiceListeners(settings.timerChoices);
	},

	addChoiceListeners: (container) => {
		Array.from(container.children).forEach(choice => choice.addEventListener('click', events.handleChoiceChange));
	},

	handleApplySettings: () => {
		pageManipulation.toggleSettings();
		states.update();
	},

	handleToggleSettings: () => { pageManipulation.toggleSettings(); },

	handleTimerBtn: () => {
		if (states.timer.running) {
			clearInterval(window.mainTimer);
			timer.toggleOn();
		} else {
			timer.startTimer();
		}
	},

	handleChoiceChange: function() {
		pageManipulation.changeSelectedChoice(this);
		if (this.parentElement.id === 'timerChoices') states.update();
	}
};