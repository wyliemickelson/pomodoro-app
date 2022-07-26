import { pageManipulation } from './pageManipulation';
import { timer } from './timer';
import { settings } from './settings';
import { states } from './states';

const timerBtn = document.getElementById('timerBtn');
const timerResetBtn = document.getElementById('timerResetBtn');
const settingsApplyBtn = document.getElementById('settingsApplyBtn');
const showSettingsBtn = document.getElementById('showSettingsBtn');
const exitSettingsBtn = document.getElementById('exitSettingsBtn');

export const events = {
	setUpListeners: function() {
		settingsApplyBtn.addEventListener('click', this.handlers.applySettings);
		showSettingsBtn.addEventListener('click', pageManipulation.toggleSettings);
		exitSettingsBtn.addEventListener('click', pageManipulation.toggleSettings);
		timerBtn.addEventListener('click', this.handlers.timerBtn);
		timerResetBtn.addEventListener('click', timer.reset);
		this.addChoiceListeners(settings.fontChoices);
		this.addChoiceListeners(settings.colorChoices);
		this.addChoiceListeners(settings.timerChoices);
	},

	addChoiceListeners: (container) => {
		const choices = Array.from(container.children);
		choices.forEach(choice => choice.addEventListener('click', events.handlers.choiceChange));
	},

	handlers: {
		applySettings: () => {
			pageManipulation.toggleSettings();
			states.update();
		},
  
		timerBtn: () => {
			if (states.timer.running) {
				timer.pause();
			} else if (states.timer.completed) {
				timer.reset();
				timer.start();
			} 
			else {
				timer.start();
			}
		},
  
		choiceChange: function() {
			pageManipulation.setSelectedChoice(this);
			if (this.parentElement.id === 'timerChoices') {
				settings.updateTimerType();
			}
		},
	},
};