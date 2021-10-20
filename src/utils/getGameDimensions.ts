import { FIELD_MARGIN } from '../constants';
import { getFullCanvasDimensions } from './getFullCanvasDimensions';
import { GameDimensions } from '../types';

export const getGameDimensions = (
  canvasContext: CanvasRenderingContext2D,
): GameDimensions => {
  const { fullCanvasWidth, fullCanvasHeight } =
    getFullCanvasDimensions(canvasContext);

  const x = FIELD_MARGIN;
  const y = FIELD_MARGIN;
  const width = fullCanvasWidth - FIELD_MARGIN;
  const height = fullCanvasHeight - FIELD_MARGIN;

  return {
    x,
    y,
    width,
    height,
  };
};
