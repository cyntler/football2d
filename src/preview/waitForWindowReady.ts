export const waitForWindowReady = () => {
  return new Promise((resolve) => {
    window.addEventListener('load', () => {
      resolve(true);
    });
  });
};
