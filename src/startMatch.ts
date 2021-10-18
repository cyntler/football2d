import { getFullCanvasSize } from './utils/getFullCanvasSize';
import { FieldRenderer, Team } from './types';
import { drawField } from './draw/drawField';

const clearCanvas = (canvasContext: CanvasRenderingContext2D) => {
  canvasContext.clearRect(0, 0, ...getFullCanvasSize(canvasContext));
};

export const startMatch = (
  fieldRenderer: FieldRenderer,
  homeTeam: Team,
  awayTeam: Team,
) => {
  const { canvasContext, gameDimensions } = fieldRenderer;

  clearCanvas(canvasContext);

  drawField(canvasContext, gameDimensions);

  requestAnimationFrame(() => {
    startMatch(fieldRenderer, homeTeam, awayTeam);
  });
};
