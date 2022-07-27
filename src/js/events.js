import { pageManipulation } from './pageManipulation';
import { timer } from './timer';
import { states } from './states';

const timerBtn = document.getElementById('timerBtn');
const timerResetBtn = document.getElementById('timerResetBtn');
const settingsApplyBtn = document.getElementById('settingsApplyBtn');
const showSettingsBtn = document.getElementById('showSettingsBtn');
const exitSettingsBtn = document.getElementById('exitSettingsBtn');
const incrementBtns = Array.from(document.querySelectorAll('.increment'));
const timeInputs = Array.from(document.querySelectorAll('.timeInput'));
const fontChoices = document.getElementById('fontChoices');
const colorChoices = document.getElementById('colorChoices');
const timerChoices = document.getElementById('timerChoices');

export const events = {
	setUpListeners: function() {
		settingsApplyBtn.addEventListener('click', this.handlers.applySettings);
		showSettingsBtn.addEventListener('click', pageManipulation.toggleSettings);
		exitSettingsBtn.addEventListener('click', pageManipulation.toggleSettings);
		timerBtn.addEventListener('click', this.handlers.timerBtn);
		timerResetBtn.addEventListener('click', timer.reset);
		this.addChoiceListeners(fontChoices);
		this.addChoiceListeners(colorChoices);
		this.addChoiceListeners(timerChoices);

		timeInputs.forEach(input => input.addEventListener('change', this.handlers.timeInput));
		incrementBtns.forEach(btn => btn.addEventListener('click', this.handlers.incrementInputValue));
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
			if (states.current.timer.running) {
				timer.pause();
			} else if (states.current.timer.completed) {
				timer.reset();
				timer.start();
			} 
			else {
				timer.start();
			}
		},
  
		choiceChange: function() {
			let choiceContainer = this.closest('.choices-container');
			let type = choiceContainer.id.replace('Choices', '');
			pageManipulation.setChoice(this.id, type);
			if (type === 'timer') {
				states.update();
				timer.reset();
			}
		},

		incrementInputValue: function() {
			let numberInput = this.closest('.sub-option_data').querySelector('input');
			let min = 1;
			let max = Number(numberInput.max);
			let currentValue = Number(numberInput.value);
			let step = Number(numberInput.step);

			if (this.classList.contains('increment--down')) step *= -1;
			let newValue = currentValue + step;

			if (newValue >= min && newValue <= max) numberInput.value = currentValue + step;
		},

		timeInput: function() {
			let currentValue = this.value;
			let min = 1;
			let max = Number(this.max);
			if (currentValue < min) this.value = min;
			if (currentValue > max) this.value = max;
		}
	},
};