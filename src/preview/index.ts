import { prepareField, startMatch } from '../index';
import { Team } from '../types';

const root = document.querySelector('main');
const field = prepareField(root);

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

startMatch(field, homeTeam, awayTeam);
