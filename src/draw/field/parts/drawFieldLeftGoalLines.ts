import { GameDimensions } from '@src/types';
import { drawGoalLines } from '../utils';

export const drawFieldLeftGoalLines = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  drawGoalLines(canvasContext, gameDimensions, 'left');
};
