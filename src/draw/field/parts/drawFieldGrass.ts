import { FIELD_PRIMARY_COLOR, FIELD_SECONDARY_COLOR } from '@src/constants';
import { GameDimensions } from '@src/types';
import { getFullCanvasDimensions } from '@src/utils/getFullCanvasDimensions';

export const drawFieldGrass = (
  canvasContext: CanvasRenderingContext2D,
  { x, y, width, height }: GameDimensions,
) => {
  const { fullCanvasWidth, fullCanvasHeight } =
    getFullCanvasDimensions(canvasContext);

  const secondaryColorStripsCount = 9;
  const stripWidth = (width - x) / secondaryColorStripsCount;

  canvasContext.fillStyle = FIELD_PRIMARY_COLOR;
  canvasContext.fillRect(0, 0, fullCanvasWidth, fullCanvasHeight);

  canvasContext.fillStyle = FIELD_SECONDARY_COLOR;
  [...new Array(secondaryColorStripsCount)].forEach((_, i) => {
    if (i % 2 === 0) {
      canvasContext.fillRect(x + i * stripWidth, y, stripWidth, height - y);
    }
  });
};
