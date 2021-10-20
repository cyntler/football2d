import { getFullCanvasDimensions } from './getFullCanvasDimensions';

export const clearCanvas = (canvasContext: CanvasRenderingContext2D) => {
  const { fullCanvasWidth, fullCanvasHeight } =
    getFullCanvasDimensions(canvasContext);

  canvasContext.clearRect(0, 0, fullCanvasWidth, fullCanvasHeight);
};
