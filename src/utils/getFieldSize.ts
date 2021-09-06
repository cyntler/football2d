import { Field } from '../types';

export const getFieldSize = (field: Field): [number, number] => {
  const width = field.canvas.width;
  const height = field.canvas.height;

  return [width, height];
};
