import { FIELD_GOAL_WIDTH } from '@src/constants';
import { GameDimensions } from '@src/types';
import { drawGoal } from '../utils';

export const drawFieldGoals = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { width, x } = gameDimensions;

  canvasContext.lineWidth = FIELD_GOAL_WIDTH * (width / 1300);

  drawGoal(canvasContext, gameDimensions, x - canvasContext.lineWidth / 2);
  drawGoal(canvasContext, gameDimensions, width + canvasContext.lineWidth / 2);
};
