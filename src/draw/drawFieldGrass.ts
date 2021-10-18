import { FIELD_PRIMARY_COLOR } from '../constants';
import { getFullCanvasSize } from '../utils/getFullCanvasSize';

export const drawFieldGrass = (canvasContext: CanvasRenderingContext2D) => {
  const [fullCanvasWidth, fullCanvasHeight] = getFullCanvasSize(canvasContext);

  canvasContext.fillStyle = FIELD_PRIMARY_COLOR;
  canvasContext.fillRect(0, 0, fullCanvasWidth, fullCanvasHeight);
};
