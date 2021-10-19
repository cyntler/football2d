import {
  FIELD_ACCENT_COLOR,
  FIELD_LINE_WIDTH,
  FIELD_MARGIN,
} from '../constants';
import { GameDimensions } from '../types';
import { getFullCanvasSize } from '../utils/getFullCanvasSize';
import { drawFieldGrass } from './drawFieldGrass';
import { drawFieldMainLines } from './drawFieldMainLines';
import { drawFieldCenterLine } from './drawFieldCenterLine';
import { drawFieldCorners } from './drawFieldCorners';

export const drawField = (
  canvasContext: CanvasRenderingContext2D,
  gameDimensions: GameDimensions,
) => {
  const [fullCanvasWidth, fullCanvasHeight] = getFullCanvasSize(canvasContext);
  const { x, width } = gameDimensions;

  drawFieldGrass(canvasContext);
  drawFieldMainLines(canvasContext, gameDimensions);
  drawFieldCenterLine(canvasContext, gameDimensions);

  canvasContext.beginPath();
  canvasContext.arc(
    fullCanvasWidth / 2,
    fullCanvasHeight / 2,
    73,
    0,
    2 * Math.PI,
    false,
  );
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    fullCanvasWidth / 2,
    fullCanvasHeight / 2,
    FIELD_LINE_WIDTH + 1,
    0,
    2 * Math.PI,
    false,
  );
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.rect(x, (fullCanvasHeight - 322) / 2, 132, 322);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.rect(x, (fullCanvasHeight - 146) / 2, 44, 146);
  canvasContext.stroke();
  canvasContext.closePath();

  // canvasContext.beginPath();
  // canvasContext.moveTo(1, canvas.height / 2 - 22);
  // canvasContext.lineTo(1, canvas.height / 2 + 22);
  // canvasContext.lineWidth = FIELD_LINE_WIDTH;
  // canvasContext.stroke();
  // canvasContext.closePath();
  // canvasContext.lineWidth = FIELD_LINE_WIDTH;

  canvasContext.beginPath();
  canvasContext.arc(
    88 + FIELD_MARGIN,
    fullCanvasHeight / 2,
    FIELD_LINE_WIDTH,
    0,
    2 * Math.PI,
    true,
  );
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    x + 88,
    fullCanvasHeight / 2,
    73,
    0.29 * Math.PI,
    1.71 * Math.PI,
    true,
  );
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.rect(width - 132, (fullCanvasHeight - 322) / 2, 132, 322);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.rect(width - 44, (fullCanvasHeight - 146) / 2, 44, 146);
  canvasContext.stroke();
  canvasContext.closePath();

  // canvasContext.beginPath();
  // canvasContext.moveTo(fullCanvasWidth - 1, fullCanvasHeight / 2 - 22);
  // canvasContext.lineTo(fullCanvasWidth - 1, fullCanvasHeight / 2 + 22);
  // canvasContext.lineWidth = FIELD_LINE_WIDTH;
  // canvasContext.stroke();
  // canvasContext.closePath();
  // canvasContext.lineWidth = FIELD_LINE_WIDTH;

  canvasContext.beginPath();
  canvasContext.arc(
    width - 88,
    fullCanvasHeight / 2,
    FIELD_LINE_WIDTH,
    0,
    2 * Math.PI,
    true,
  );
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.beginPath();
  canvasContext.arc(
    width - 88,
    fullCanvasHeight / 2,
    73,
    0.71 * Math.PI,
    1.29 * Math.PI,
    false,
  );
  canvasContext.stroke();
  canvasContext.closePath();

  drawFieldCorners(canvasContext, gameDimensions);
};
