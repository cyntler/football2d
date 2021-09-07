import { getCanvasSize } from './utils/getCanvasSize';
import { FieldRenderer, Team } from './types';
import { drawField } from './draw/drawField';

export const startMatch = (
  fieldRenderer: FieldRenderer,
  homeTeam: Team,
  awayTeam: Team,
) => {
  const { canvasContext } = fieldRenderer;

  canvasContext.clearRect(0, 0, ...getCanvasSize(canvasContext));
  drawField(canvasContext);

  requestAnimationFrame(() => {
    startMatch(fieldRenderer, homeTeam, awayTeam);
  });
};
