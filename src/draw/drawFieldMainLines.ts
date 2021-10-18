import {
  FIELD_ACCENT_COLOR,
  FIELD_LINE_WIDTH,
  FIELD_MARGIN,
} from '../constants';
import { GameDimensions } from '../types';

export const drawFieldMainLines = (
  canvasContext: CanvasRenderingContext2D,
  { x, y, width, height }: GameDimensions,
) => {
  canvasContext.beginPath();
  canvasContext.rect(x, y, width - FIELD_MARGIN, height - FIELD_MARGIN);
  canvasContext.lineWidth = FIELD_LINE_WIDTH;
  canvasContext.strokeStyle = FIELD_ACCENT_COLOR;
  canvasContext.stroke();
  canvasContext.closePath();
};
