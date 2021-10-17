import { FIELD_HEIGHT, FIELD_MARGIN, FIELD_WIDTH } from './constants';
import { drawField } from './draw/drawField';
import { FieldRenderer } from './types';
import { isWindow } from './utils/isWindow';

const createContainer = () => {
  const rootEl = window.document.createElement('div');
  rootEl.style.width = `100%`;

  return rootEl;
};

const createCanvas = (container: HTMLDivElement) => {
  const canvasEl = window.document.createElement('canvas');
  canvasEl.style.display = 'block';

  canvasEl.width = container.clientWidth;
  canvasEl.height = container.clientHeight;

  return canvasEl;
};

const calculateContainerHeight = (container: HTMLDivElement) =>
  (FIELD_HEIGHT / FIELD_WIDTH) * container.clientWidth;

const updateContainerHeight = (container: HTMLDivElement) => {
  container.style.height = `${calculateContainerHeight(container)}px`;
};

export const createFieldRenderer = (targetEl: HTMLElement): FieldRenderer => {
  if (!targetEl) {
    throw new Error(`Target HTML [${targetEl}] element doesn't exists!`);
  }

  if (isWindow()) {
    const container = createContainer();
    targetEl.appendChild(container);
    updateContainerHeight(container);

    const canvas = createCanvas(container);
    const canvasContext = canvas.getContext('2d');

    drawField(canvasContext);
    container.appendChild(canvas);

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
