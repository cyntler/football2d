import { waitForWindowReady } from './waitForWindowReady';
import { createFieldRenderer, startMatch } from '../index';
import { Team } from '../types';

await waitForWindowReady();

const rootEl = document.querySelector('main');

const fieldRenderer = createFieldRenderer(rootEl);

const homeTeam: Team = {
  name: 'Hello',
  coachName: 'Simens Luigi',
  players: [],
};

const awayTeam: Team = {
  name: 'Goodbye',
  coachName: 'John Bambor',
  players: [],
};

startMatch(fieldRenderer, homeTeam, awayTeam);
