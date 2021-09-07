import { FieldRenderer } from './types';

export const removeFieldRenderer = ({
  container,
  handleOnResize,
}: FieldRenderer) => {
  container.remove();
  window.removeEventListener('resize', handleOnResize);
};
