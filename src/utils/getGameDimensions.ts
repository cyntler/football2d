import { FIELD_MARGIN } from '@src/constants';
import { GameDimensions } from '@src/types';
import { getFullCanvasDimensions } from './getFullCanvasDimensions';

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
