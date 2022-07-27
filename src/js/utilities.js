const pomodoroTimerLengthInput = document.getElementById('pomodoroTimerLengthInput');
const shortBreakLengthInput = document.getElementById('shortBreakLengthInput');
const longBreakLengthInput = document.getElementById('longBreakLengthInput');

export const utilities = {
	getSelectedChoice: (type) => {
		return document.querySelector(`.${type}--selected`);
	},

	getTimerLength: (name) => {
		const lengthInputMap = {
			pomodoro: pomodoroTimerLengthInput,
			'short break': shortBreakLengthInput,
			'long break': longBreakLengthInput,
		};
		let minutes = Number(lengthInputMap[name].value);

		return utilities.minToSec(minutes);
	},

	minToSec: (min) => {
		return Number(min) * 60;
	},

	secToMin: (sec) => {
		return Number(sec) / 60;
	}
};

// functions to extend browser local storage to allow objects
Storage.prototype.setObject = function(key, value) {
	this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
	var value = this.getItem(key);
	return value && JSON.parse(value);
};