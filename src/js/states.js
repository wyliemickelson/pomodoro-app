import { settings } from './settings';

export let states = {
	timer: {
		type: {
			name: 'pomodoro',
			length: '1500'
		},
		timeLeft: 1500,
		notStarted: true,
		running: false,
		completed: false,
	},

	settings: {
		lengths: {
			pomodoro: 1500,
			'short break': 300,
			'long break': 900
		},
		accentColor: 'hsl(0deg, 91%, 71%)',
		font: '"Kumbh Sans", sans-serif',
	},

	setAccentColor: () => {
		document.documentElement.style.setProperty('--clr-accent-current', `${states.settings.accentColor}`);
	},

	setFont: () => {
		document.documentElement.style.setProperty('--font-current', `${states.settings.font}`);
	},

	update: () => {
		settings.update();
		states.setAccentColor();
		states.setFont();
	},
};