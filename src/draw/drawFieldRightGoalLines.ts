import { FIELD_LINE_WIDTH, FIELD_MARGIN } from '../constants';
import { GameDimensions } from '../types';
import { getFullCanvasDimensions } from '../utils/getFullCanvasDimensions';

export const drawFieldRightGoalLines = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { width } = gameDimensions;
  const { fullCanvasHeight } = getFullCanvasDimensions(canvasContext);

  canvasContext.beginPath();
  canvasContext.rect(width - 132, (fullCanvasHeight - 322) / 2, 132, 322);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.rect(width - 44, (fullCanvasHeight - 146) / 2, 44, 146);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    width - 88,
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
    width - 88,
    fullCanvasHeight / 2,
    73,
    0.71 * Math.PI,
    1.29 * Math.PI,
    false,
  );
  canvasContext.stroke();
  canvasContext.closePath();
};
