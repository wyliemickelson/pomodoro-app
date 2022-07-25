import { settings } from './settings';

export let states = {
	timer: {
		type: 'pomodoro',
		timeLeft: 1500,
		paused: false,
		completed: false,
	},

	settings: {
		pomodoroLength: 1500,
		shortBreakLength: 300,
		longBreakLength: 900,
		accentColor: 'hsl(0deg, 91%, 71%)',
		font: '"Kumbh Sans", sans-serif',
	},

	setAccentColor: (color) => {
		document.documentElement.style.setProperty('--clr-accent-current', `${color}`);
	},

	setFont: (font) => {
		document.documentElement.style.setProperty('--font-current', `${font}`);
	},

	update: () => {
		settings.update();
		states.setAccentColor();
		states.setFont();
	},
};