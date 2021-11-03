import { GameDimensions } from '@src/types';
import { composeExecute } from '@src/utils/composeExecute';
import { drawFieldGrass } from './parts/drawFieldGrass';
import { drawFieldMainLines } from './parts/drawFieldMainLines';
import { drawFieldCenterLines } from './parts/drawFieldCenterLines';
import { drawFieldCorners } from './parts/drawFieldCorners';
import { drawFieldLeftGoalLines } from './parts/drawFieldLeftGoalLines';
import { drawFieldRightGoalLines } from './parts/drawFieldRightGoalLines';
import { drawFieldGoals } from './parts/drawFieldGoals';

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
