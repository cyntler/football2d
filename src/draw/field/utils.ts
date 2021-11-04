import { FIELD_LINE_WIDTH, FIELD_MARGIN } from '@src/constants';
import { GameDimensions } from '@src/types';
import {
  calculateValueDependsHeightGameDimension,
  calculateValueDependsWidthGameDimension,
} from '@src/utils/calculateValueDependsGameDimension';
import { getFullCanvasDimensions } from '@src/utils/getFullCanvasDimensions';

export const getBigGoalLineDimensions = (gameDimensions: GameDimensions) => ({
  width: calculateValueDependsWidthGameDimension(16.5, gameDimensions),
  height: calculateValueDependsHeightGameDimension(40.32, gameDimensions),
});

export const getSmallGoalLineDimensions = (gameDimensions: GameDimensions) => ({
  width: calculateValueDependsHeightGameDimension(5.5, gameDimensions),
  height: calculateValueDependsHeightGameDimension(18.32, gameDimensions),
});

export const drawCorner = (
  canvasContext: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  counterclockwise = false,
) => {
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  canvasContext.stroke();
  canvasContext.closePath();
};

export const drawGoal = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
  x: number,
) => {
  const { fullCanvasHeight } = getFullCanvasDimensions(canvasContext);

  const goalY = fullCanvasHeight / 2;
  const halfOfGoalHeight = calculateValueDependsWidthGameDimension(
    3.66,
    gameDimensions,
  );

  canvasContext.beginPath();
  canvasContext.moveTo(x, goalY - halfOfGoalHeight);
  canvasContext.lineTo(x, goalY + halfOfGoalHeight);
  canvasContext.stroke();
  canvasContext.closePath();
};

export const drawGoalLines = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
  type: 'left' | 'right',
) => {
  const { width, x } = gameDimensions;
  const { fullCanvasHeight } = getFullCanvasDimensions(canvasContext);

  const { width: bigGoalLineWidth, height: bigGoalLineHeight } =
    getBigGoalLineDimensions(gameDimensions);
  const { width: smallGoalLineWidth, height: smallGoalLineHeight } =
    getSmallGoalLineDimensions(gameDimensions);
  const radius = calculateValueDependsWidthGameDimension(9.15, gameDimensions);

  canvasContext.beginPath();
  canvasContext.rect(
    type === 'left' ? x : width - bigGoalLineWidth,
    (fullCanvasHeight - bigGoalLineHeight) / 2,
    bigGoalLineWidth,
    bigGoalLineHeight,
  );
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.rect(
    type === 'left' ? x : width - smallGoalLineWidth,
    (fullCanvasHeight - smallGoalLineHeight) / 2,
    smallGoalLineWidth,
    smallGoalLineHeight,
  );
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    type === 'left'
      ? calculateValueDependsWidthGameDimension(11, gameDimensions) +
          FIELD_MARGIN
      : width - calculateValueDependsWidthGameDimension(11, gameDimensions),
    fullCanvasHeight / 2,
    FIELD_LINE_WIDTH + 1,
    0,
    2 * Math.PI,
    true,
  );
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    type === 'left'
      ? x +
          calculateValueDependsWidthGameDimension(16.5, gameDimensions) -
          radius / 1.65
      : width -
          calculateValueDependsWidthGameDimension(16.5, gameDimensions) +
          radius / 1.65,
    fullCanvasHeight / 2,
    radius,
    (type === 'left' ? 0.29 : 0.71) * Math.PI,
    (type === 'left' ? 1.71 : 1.29) * Math.PI,
    type === 'left',
  );
  canvasContext.stroke();
  canvasContext.closePath();
};
