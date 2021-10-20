export const getFullCanvasDimensions = (
  canvasContext: CanvasRenderingContext2D,
) => {
  const fullCanvasWidth = canvasContext.canvas.width;
  const fullCanvasHeight = canvasContext.canvas.height;

  return { fullCanvasWidth, fullCanvasHeight };
};
