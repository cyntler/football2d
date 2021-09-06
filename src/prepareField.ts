import { isWindow } from './utils/isWindow';

const createRoot = (scale: number) => {
  const rootEl = window.document.createElement('div');
  rootEl.style.width = `${125 * scale}px`;
  rootEl.style.height = `${85 * scale}px`;

  return rootEl;
};

const createCanvas = () => {
  const canvasEl = window.document.createElement('canvas');
  canvasEl.style.display = 'block';
  canvasEl.style.width = '100%';
  canvasEl.style.height = '100%';

  return canvasEl;
};

export const prepareField = (targetEl: HTMLElement, scale = 2) => {
  if (!targetEl) {
    throw new Error(`Target HTML [${targetEl}] element doesn't exists!`);
  }

  if (isWindow()) {
    const root = createRoot(scale);

    const canvas = createCanvas();
    const canvasContext = canvas.getContext('2d');

    root.appendChild(canvas);
    targetEl.appendChild(root);

    return canvasContext;
  }
};
