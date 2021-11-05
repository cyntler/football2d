import { FieldRenderer, Team, MatchOptions } from './types';
import { clearCanvas } from './utils/clearCanvas';
import { drawField } from './draw/field/drawField';
import { getGameDimensions } from './utils/getGameDimensions';
import { drawBall } from './draw/ball/drawBall';
import { defaultMatchOptions } from './utils/defaultMatchOptions';
import { startMatchTimer } from './match/startMatchTimer';

export const startMatch = (
  fieldRenderer: FieldRenderer,
  _homeTeam: Team,
  _awayTeam: Team,
  options?: MatchOptions,
) => {
  const { canvasContext } = fieldRenderer;
  const { speed } = { ...defaultMatchOptions, ...options };

  const matchTimer = startMatchTimer(speed);

  const matchLoop = () => {
    const gameDimensions = getGameDimensions(canvasContext);

    clearCanvas(canvasContext);
    drawField(canvasContext, gameDimensions);

    drawBall(canvasContext);

    return requestAnimationFrame(matchLoop);
  };

  const animationFrame = matchLoop();

  return {
    animationFrame,
    matchTimer,
  };
};
