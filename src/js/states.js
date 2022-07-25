export let states = {
	timer: {
		type: 'pomodoro',
		timeLeft: 1500,
		paused: false,
		completed: false,
	},

	settings: {
		shortBreak: 300,
		longBreak: 900,
		accentColor: 'hsl(0deg, 91%, 71%)',
		currentFont: '"Kumbh Sans", sans-serif',
	},

	setAccentColor: (color) => {
		document.documentElement.style.setProperty('--clr-accent-current', `${color}`);
	},

	setFont: (font) => {
		document.documentElement.style.setProperty('--font-current', `${font}`);
	},

	update: () => {

	},
};