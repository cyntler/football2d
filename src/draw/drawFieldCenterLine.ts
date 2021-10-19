import { getFullCanvasSize } from '../utils/getFullCanvasSize';
import { GameDimensions } from '../types';
import { FIELD_ACCENT_COLOR } from '../constants';

export const drawFieldCenterLine = (
  canvasContext: CanvasRenderingContext2D,
  { y, height }: GameDimensions,
) => {
  const [fullCanvasWidth] = getFullCanvasSize(canvasContext);

  canvasContext.fillStyle = FIELD_ACCENT_COLOR;
  canvasContext.beginPath();
  canvasContext.moveTo(fullCanvasWidth / 2, y);
  canvasContext.lineTo(fullCanvasWidth / 2, height);
  canvasContext.stroke();
  canvasContext.closePath();
};
