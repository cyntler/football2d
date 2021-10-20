import { GameDimensions } from '../types';
import { composeExecute } from '../utils/composeExecute';
import { drawFieldGrass } from './drawFieldGrass';
import { drawFieldMainLines } from './drawFieldMainLines';
import { drawFieldCenterLines } from './drawFieldCenterLines';
import { drawFieldCorners } from './drawFieldCorners';
import { drawFieldLeftGoalLines } from './drawFieldLeftGoalLines';
import { drawFieldRightGoalLines } from './drawFieldRightGoalLines';
import { drawFieldGoals } from './drawFieldGoals';

export const drawField = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  composeExecute(
    [canvasContext, gameDimensions],
    drawFieldGrass,
    drawFieldMainLines,
    drawFieldCenterLines,
    drawFieldLeftGoalLines,
    drawFieldRightGoalLines,
    drawFieldCorners,
    drawFieldGoals,
  );
};
