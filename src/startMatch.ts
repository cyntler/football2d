import { getFullCanvasSize } from './utils/getFullCanvasSize';
import { FieldRenderer, Team } from './types';
import { drawField } from './draw/drawField';
import { getGameDimensions } from './utils/getGameDimensions';

const clearCanvas = (canvasContext: CanvasRenderingContext2D) => {
  canvasContext.clearRect(0, 0, ...getFullCanvasSize(canvasContext));
};

export const startMatch = (
  fieldRenderer: FieldRenderer,
  homeTeam: Team,
  awayTeam: Team,
) => {
  const { canvasContext } = fieldRenderer;
  const gameDimensions = getGameDimensions(canvasContext);

  clearCanvas(canvasContext);
  drawField(canvasContext, gameDimensions);

  requestAnimationFrame(() => {
    startMatch(fieldRenderer, homeTeam, awayTeam);
  });
};
