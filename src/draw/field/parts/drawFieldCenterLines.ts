import { getFullCanvasDimensions } from '@src/utils/getFullCanvasDimensions';
import { GameDimensions } from '@src/types';
import { FIELD_ACCENT_COLOR, FIELD_LINE_WIDTH } from '@src/constants';
import { calculateValueDependsWidthGameDimension } from '@src/utils/calculateValueDependsGameDimension';

export const drawFieldCenterLines = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { y, height } = gameDimensions;

  const { fullCanvasWidth, fullCanvasHeight } =
    getFullCanvasDimensions(canvasContext);

  canvasContext.fillStyle = FIELD_ACCENT_COLOR;
  canvasContext.beginPath();
  canvasContext.moveTo(fullCanvasWidth / 2, y);
  canvasContext.lineTo(fullCanvasWidth / 2, height);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    fullCanvasWidth / 2,
    fullCanvasHeight / 2,
    FIELD_LINE_WIDTH + 1,
    0,
    2 * Math.PI,
    false,
  );
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    fullCanvasWidth / 2,
    fullCanvasHeight / 2,
    calculateValueDependsWidthGameDimension(9.15, gameDimensions),
    0,
    2 * Math.PI,
    false,
  );
  canvasContext.stroke();
  canvasContext.closePath();
};
