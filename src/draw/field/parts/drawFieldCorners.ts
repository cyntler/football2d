import { GameDimensions } from '@src/types';
import { calculateValueDependsHeightGameDimension } from '@src/utils/calculateValueDependsGameDimension';

export const drawFieldCorners = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { x, y, width, height } = gameDimensions;

  const cornerRadius = calculateValueDependsHeightGameDimension(
    1,
    gameDimensions,
  );

  canvasContext.beginPath();
  canvasContext.arc(x, y, cornerRadius, 0, 0.5 * Math.PI, false);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(x, height, cornerRadius, 0, -0.5 * Math.PI, true);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(width, y, cornerRadius, 0.5 * Math.PI, Math.PI, false);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    width,
    height,
    cornerRadius,
    1 * Math.PI,
    1.5 * Math.PI,
    false,
  );
  canvasContext.stroke();
  canvasContext.closePath();
};
