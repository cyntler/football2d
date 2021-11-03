import { FIELD_LINE_WIDTH } from '@src/constants';
import { GameDimensions } from '@src/types';
import {
  calculateValueDependsHeightGameDimension,
  calculateValueDependsWidthGameDimension,
} from '@src/utils/calculateValueDependsGameDimension';
import { getFullCanvasDimensions } from '@src/utils/getFullCanvasDimensions';

export const drawFieldRightGoalLines = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const { width } = gameDimensions;
  const { fullCanvasHeight } = getFullCanvasDimensions(canvasContext);

  const bigGoalFieldWidth = calculateValueDependsWidthGameDimension(
    16.5,
    gameDimensions,
  );

  const bigGoalFieldHeight = calculateValueDependsHeightGameDimension(
    40.32,
    gameDimensions,
  );

  canvasContext.beginPath();
  canvasContext.rect(
    width - bigGoalFieldWidth,
    (fullCanvasHeight - bigGoalFieldHeight) / 2,
    bigGoalFieldWidth,
    bigGoalFieldHeight,
  );
  canvasContext.stroke();
  canvasContext.closePath();

  const smallGoalFieldWidth = calculateValueDependsHeightGameDimension(
    5.5,
    gameDimensions,
  );

  const smallGoalFieldHeight = calculateValueDependsHeightGameDimension(
    18.32,
    gameDimensions,
  );

  canvasContext.beginPath();
  canvasContext.rect(
    width - smallGoalFieldWidth,
    (fullCanvasHeight - smallGoalFieldHeight) / 2,
    smallGoalFieldWidth,
    smallGoalFieldHeight,
  );
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    width - calculateValueDependsWidthGameDimension(11, gameDimensions),
    fullCanvasHeight / 2,
    FIELD_LINE_WIDTH + 1,
    0,
    2 * Math.PI,
    true,
  );
  canvasContext.fill();
  canvasContext.closePath();

  const radius = calculateValueDependsWidthGameDimension(9.15, gameDimensions);

  canvasContext.beginPath();
  canvasContext.arc(
    width -
      calculateValueDependsWidthGameDimension(16.5, gameDimensions) +
      radius / 1.65,
    fullCanvasHeight / 2,
    radius,
    0.71 * Math.PI,
    1.29 * Math.PI,
    false,
  );
  canvasContext.stroke();
  canvasContext.closePath();
};
