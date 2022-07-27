import '/src/sass/index.scss';
import { events } from './events';
import { states } from './states';

events.setUpListeners();
states.retrieveLocalData();