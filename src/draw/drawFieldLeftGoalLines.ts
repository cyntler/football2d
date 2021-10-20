import { FIELD_LINE_WIDTH, FIELD_MARGIN } from '../constants';
import { GameDimensions } from '../types';
import { getFullCanvasDimensions } from '../utils/getFullCanvasDimensions';

export const drawFieldLeftGoalLines = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { x } = gameDimensions;
  const { fullCanvasHeight } = getFullCanvasDimensions(canvasContext);

  canvasContext.beginPath();
  canvasContext.rect(x, (fullCanvasHeight - 322) / 2, 132, 322);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.rect(x, (fullCanvasHeight - 146) / 2, 44, 146);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    88 + FIELD_MARGIN,
    fullCanvasHeight / 2,
    FIELD_LINE_WIDTH + 1,
    0,
    2 * Math.PI,
    true,
  );
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    x + 88,
    fullCanvasHeight / 2,
    73,
    0.29 * Math.PI,
    1.71 * Math.PI,
    true,
  );
  canvasContext.stroke();
  canvasContext.closePath();
};
