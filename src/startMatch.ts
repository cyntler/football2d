import { FieldRenderer, Team } from './types';
import { clearCanvas } from './utils/clearCanvas';
import { drawField } from './draw/drawField';
import { getGameDimensions } from './utils/getGameDimensions';

export const startMatch = (
  fieldRenderer: FieldRenderer,
  _homeTeam: Team,
  _awayTeam: Team,
) => {
  const { canvasContext } = fieldRenderer;
  const gameDimensions = getGameDimensions(canvasContext);

  const run = () => {
    clearCanvas(canvasContext);
    drawField(canvasContext, gameDimensions);
  };

  run();
  const animationFrame = requestAnimationFrame(run);

  return {
    animationFrame,
  };
};
