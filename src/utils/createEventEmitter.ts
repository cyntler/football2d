export const createEventEmitter = () => {
  const callbacks = [];

  return {
    on(name: string, callback: (...params: any[]) => void) {
      callbacks.push({
        name,
        callback,
      });
    },
    emit(name: string, ...params: any[]) {
      callbacks
        .filter(({ name: callbackName }) => callbackName === name)
        .forEach(({ callback }) => callback(params));
    },
  };
};
