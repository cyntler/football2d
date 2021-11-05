import { waitForWindowReady } from './waitForWindowReady';
import { createFieldRenderer, startMatch } from '@src/index';
import { Team } from '@src/types';

await waitForWindowReady();

const rootEl = document.querySelector('main');
const timeEl = document.querySelector('p');

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

const { matchTimer } = startMatch(fieldRenderer, homeTeam, awayTeam, {
  speed: 100,
});

matchTimer.on('update', (value: string) => {
  timeEl.textContent = value;
});
