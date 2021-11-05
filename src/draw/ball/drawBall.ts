let x = 1;

export const drawBall = (canvasContext: CanvasRenderingContext2D) => {
  x += Math.random();

  canvasContext.beginPath();
  canvasContext.arc(x, 75, 4, 0, 2 * Math.PI);
  canvasContext.fill();
};
