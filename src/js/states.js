import { pageManipulation } from './pageManipulation';
import { settings } from './settings';

export let states = {
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
		accentColor: 'hsl(0deg, 91%, 71%)',
		font: '"Kumbh Sans", sans-serif',
	},

	update: () => {
		settings.updateSettings();
		pageManipulation.setAccentColor();
		pageManipulation.setFont();
	},
};