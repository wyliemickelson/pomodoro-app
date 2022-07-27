import { pageManipulation } from './pageManipulation';
import { settings } from './settings';
import { timer } from './timer';

export let states = {

	current: {
		timer: {
			type: {
				name: 'pomodoro',
				length: '1500',
				id: 'timer--1',
			},
			timeLeft: 1500,
			timeLeftms: 1500 * 1000,
			running: false,
			completed: false,
		},
	
		settings: {
			lengths: {
				'pomodoro': 1500,
				'short break': 300,
				'long break': 900
			},
			accentColor: {
				id: 'color--1',
				content: 'rgb(248, 114, 114)',
			},
			font: {
				id: 'font--1',
				content: '"Kumbh Sans", sans-serif',
			}
		},
	},

	saveLocal: () => {
		localStorage.setObject('savedStates', states.current);
	},

	update: () => {
		settings.updateSettings();
		pageManipulation.setAccentColor();
		pageManipulation.setFont();
		timer.reset();

		states.saveLocal();
	},

	setDefault: () => {
		states.current.timer.timeLeft = states.current.timer.type.length;
		states.current.timer.running = false;
		states.current.timer.completed = false;
	},

	retrieveLocalData: () => {
		// localStorage.clear();
		let savedStates = localStorage.getObject('savedStates');
		if (savedStates !== null) {
			states.current = savedStates;
		}
		pageManipulation.loadPage();
	}
};
