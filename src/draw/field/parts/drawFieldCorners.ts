import { GameDimensions } from '@src/types';
import { calculateValueDependsHeightGameDimension } from '@src/utils/calculateValueDependsGameDimension';
import { drawCorner } from '../utils';

export const drawFieldCorners = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { x, y, width, height } = gameDimensions;

  const cornerRadius = calculateValueDependsHeightGameDimension(
    1,
    gameDimensions,
  );

  drawCorner(canvasContext, x, y, cornerRadius, 0, 0.5 * Math.PI);
  drawCorner(canvasContext, x, height, cornerRadius, 0, -0.5 * Math.PI, true);
  drawCorner(canvasContext, width, y, cornerRadius, 0.5 * Math.PI, Math.PI);
  drawCorner(
    canvasContext,
    width,
    height,
    cornerRadius,
    1 * Math.PI,
    1.5 * Math.PI,
  );
};
