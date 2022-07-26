import { pageManipulation } from './pageManipulation';
import { settings } from './settings';

export const states = {
	timer: {
		type: {
			name: 'pomodoro',
			length: '1500'
		},
		timeLeft: 1500,
		running: false,
		completed: false,
	},

	settings: {
		lengths: {
			'pomodoro': 1500,
			'short break': 300,
			'long break': 900
		},
		accentColor: 'rgb(248, 114, 114)',
		font: '"Kumbh Sans", sans-serif',
	},

	update: () => {
		settings.updateSettings();
		pageManipulation.setAccentColor();
		pageManipulation.setFont();
	},

	setDefault: () => {
		states.timer.timeLeft = states.timer.type.length;
		states.timer.running = false;
		states.timer.completed = false;
	}
};