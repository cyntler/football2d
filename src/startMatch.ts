import { FieldRenderer, Team } from './types';
import { clearCanvas } from './utils/clearCanvas';
import { drawField } from './draw/field/drawField';
import { getGameDimensions } from './utils/getGameDimensions';

export const startMatch = (
  fieldRenderer: FieldRenderer,
  _homeTeam: Team,
  _awayTeam: Team,
) => {
  const { canvasContext } = fieldRenderer;

  const matchLoop = () => {
    const gameDimensions = getGameDimensions(canvasContext);

    clearCanvas(canvasContext);
    drawField(canvasContext, gameDimensions);

    return requestAnimationFrame(matchLoop);
  };

  const animationFrame = matchLoop();

  return {
    animationFrame,
  };
};
