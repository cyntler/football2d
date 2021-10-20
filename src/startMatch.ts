import { FieldRenderer, Team } from './types';
import { clearCanvas } from './utils/clearCanvas';
import { drawField } from './draw/drawField';
import { getGameDimensions } from './utils/getGameDimensions';

export const startMatch = (
  fieldRenderer: FieldRenderer,
  homeTeam: Team,
  awayTeam: Team,
) => {
  const { canvasContext } = fieldRenderer;
  const gameDimensions = getGameDimensions(canvasContext);

  clearCanvas(canvasContext);
  drawField(canvasContext, gameDimensions);

  const animationFrame = requestAnimationFrame(() => {
    startMatch(fieldRenderer, homeTeam, awayTeam);
  });

  return {
    animationFrame,
  };
};
