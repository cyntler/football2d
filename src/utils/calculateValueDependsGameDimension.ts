import { GameDimensions } from '../types';
import { FIELD_WIDTH } from '../constants';

export const calculateValueDependsGameDimension = (
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
