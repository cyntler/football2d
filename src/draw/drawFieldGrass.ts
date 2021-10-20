import { FIELD_PRIMARY_COLOR } from '../constants';
import { getFullCanvasDimensions } from '../utils/getFullCanvasDimensions';

export const drawFieldGrass = (canvasContext: CanvasRenderingContext2D) => {
  const { fullCanvasWidth, fullCanvasHeight } =
    getFullCanvasDimensions(canvasContext);

  canvasContext.fillStyle = FIELD_PRIMARY_COLOR;
  canvasContext.fillRect(0, 0, fullCanvasWidth, fullCanvasHeight);
};
