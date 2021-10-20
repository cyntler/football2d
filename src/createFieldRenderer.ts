import { FIELD_HEIGHT, FIELD_WIDTH } from './constants';
import { FieldRenderer } from './types';
import { isWindow } from './utils/isWindow';

const createContainer = () => {
  const rootEl = window.document.createElement('div');
  rootEl.style.width = '100%';
  rootEl.style.minWidth = '350px';
  rootEl.style.overflow = 'hidden';

  return rootEl;
};

const createCanvas = (container: HTMLDivElement) => {
  const { width, height } = container.getBoundingClientRect();

  const canvasEl = window.document.createElement('canvas');
  canvasEl.width = width;
  canvasEl.height = height;
  canvasEl.style.display = 'block';

  return canvasEl;
};

const calculateContainerHeight = (container: HTMLDivElement) =>
  (FIELD_HEIGHT / FIELD_WIDTH) * container.getBoundingClientRect().width;

const updateCanvasDimensions = (
  canvas: HTMLCanvasElement,
  container: HTMLDivElement,
) => {
  const { width } = container.getBoundingClientRect();

  if (canvas.width !== width) {
    canvas.width = width;
  }
  canvas.height = calculateContainerHeight(container);
};

export const createFieldRenderer = (targetEl: HTMLElement): FieldRenderer => {
  if (!isWindow()) {
    throw new Error(`Football 2D should be run in the browser!`);
  }

  if (!targetEl) {
    throw new Error(`Target HTML [${targetEl}] element doesn't exists!`);
  }

  const container = createContainer();
  targetEl.appendChild(container);

  const canvas = createCanvas(container);
  const canvasContext = canvas.getContext('2d');

  container.appendChild(canvas);
  updateCanvasDimensions(canvas, container);

  const handleOnResize = () => {
    updateCanvasDimensions(canvas, container);
  };

  window.addEventListener('resize', handleOnResize);

  return {
    container,
    canvasContext,
    handleOnResize,
  };
};
