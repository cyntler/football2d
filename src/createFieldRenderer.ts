import { FIELD_HEIGHT, FIELD_MARGIN, FIELD_WIDTH } from './constants';
import { drawField } from './draw/drawField';
import { FieldRenderer } from './types';
import { isWindow } from './utils/isWindow';

const createContainer = () => {
  const rootEl = window.document.createElement('div');
  rootEl.style.width = `100%`;

  return rootEl;
};

const createCanvas = () => {
  const canvasEl = window.document.createElement('canvas');
  canvasEl.style.display = 'block';
  canvasEl.style.width = '100%';
  canvasEl.style.height = '100%';

  return canvasEl;
};

const calculateContainerHeight = (container: HTMLDivElement) =>
  (FIELD_HEIGHT / FIELD_WIDTH) * container.clientWidth;

const updateContainerHeight = (container: HTMLDivElement) => {
  container.style.height = `${calculateContainerHeight(container)}px`;
};

const handleOnResize = (container: HTMLDivElement) => () => {};

export const createFieldRenderer = (targetEl: HTMLElement): FieldRenderer => {
  if (!targetEl) {
    throw new Error(`Target HTML [${targetEl}] element doesn't exists!`);
  }

  if (isWindow()) {
    const container = createContainer();

    const canvas = createCanvas();
    const canvasContext = canvas.getContext('2d');

    drawField(canvasContext);

    container.appendChild(canvas);
    targetEl.appendChild(container);

    updateContainerHeight(container);
    const handleOnResize = () => {
      updateContainerHeight(container);
    };

    window.addEventListener('resize', handleOnResize);

    return {
      container,
      canvasContext,
      handleOnResize,
    };
  }
};
