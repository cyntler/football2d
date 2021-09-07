export const getCanvasSize = (
  canvasContext: CanvasRenderingContext2D,
): [number, number] => {
  const width = canvasContext.canvas.width;
  const height = canvasContext.canvas.height;

  return [width, height];
};
