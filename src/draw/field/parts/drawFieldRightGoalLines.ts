import { GameDimensions } from '@src/types';
import { drawGoalLines } from '../utils';

export const drawFieldRightGoalLines = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  drawGoalLines(canvasContext, gameDimensions, 'right');
};
