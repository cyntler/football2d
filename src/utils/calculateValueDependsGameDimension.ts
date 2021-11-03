import { GameDimensions } from '@src/types';
import { FIELD_HEIGHT, FIELD_WIDTH } from '@src/constants';

export const calculateValueDependsWidthGameDimension = (
  value: number,
  { width }: GameDimensions,
  minValue?: number,
) => {
  const result = (value / FIELD_WIDTH) * width;

  if (minValue && result < minValue) {
    return minValue;
  }

  return result;
};

export const calculateValueDependsHeightGameDimension = (
  value: number,
  { height }: GameDimensions,
  minValue?: number,
) => {
  const result = (value / FIELD_HEIGHT) * height;

  if (minValue && result < minValue) {
    return minValue;
  }

  return result;
};
