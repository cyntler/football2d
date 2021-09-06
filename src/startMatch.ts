import { getFieldSize } from './utils/getFieldSize';
import { Field, Team } from './types';

export const startMatch = (field: Field, homeTeam: Team, awayTeam: Team) => {
  field.clearRect(0, 0, ...getFieldSize(field));

  requestAnimationFrame(() => {
    startMatch(field, homeTeam, awayTeam);
  });
};
