import { FIELD_PRIMARY_COLOR } from '../constants';
import { getCanvasSize } from '../utils/getCanvasSize';

export const drawField = (canvasContext: CanvasRenderingContext2D) => {
  canvasContext.fillStyle = FIELD_PRIMARY_COLOR;
  canvasContext.fillRect(0, 0, ...getCanvasSize(canvasContext));
};
