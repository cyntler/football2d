import { GameDimensions } from '../types';

export const drawFieldCorners = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { x, y, width, height } = gameDimensions;

  canvasContext.beginPath();
  canvasContext.arc(x, y, 10, 0, 0.5 * Math.PI, false);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(x, height, 10, 0, -0.5 * Math.PI, true);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(width, y, 10, 0.5 * Math.PI, 1 * Math.PI, false);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(width, height, 10, 1 * Math.PI, 1.5 * Math.PI, false);
  canvasContext.stroke();
  canvasContext.closePath();
};
