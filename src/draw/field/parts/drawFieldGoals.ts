import { FIELD_GOAL_WIDTH } from '@src/constants';
import { GameDimensions } from '@src/types';
import { calculateValueDependsWidthGameDimension } from '@src/utils/calculateValueDependsGameDimension';
import { getFullCanvasDimensions } from '@src/utils/getFullCanvasDimensions';

export const drawFieldGoals = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { x, width } = gameDimensions;
  const { fullCanvasHeight } = getFullCanvasDimensions(canvasContext);

  const goalY = fullCanvasHeight / 2;
  const halfOfGoalHeight = calculateValueDependsWidthGameDimension(
    3.66,
    gameDimensions,
  );

  canvasContext.lineWidth = FIELD_GOAL_WIDTH * (width / 1300);

  const leftGoalX = x - canvasContext.lineWidth / 2;
  canvasContext.beginPath();
  canvasContext.moveTo(leftGoalX, goalY - halfOfGoalHeight);
  canvasContext.lineTo(leftGoalX, goalY + halfOfGoalHeight);
  canvasContext.stroke();
  canvasContext.closePath();

  const rightGoalX = width + canvasContext.lineWidth / 2;
  canvasContext.beginPath();
  canvasContext.moveTo(rightGoalX, goalY - halfOfGoalHeight);
  canvasContext.lineTo(rightGoalX, goalY + halfOfGoalHeight);
  canvasContext.stroke();
  canvasContext.closePath();
};
