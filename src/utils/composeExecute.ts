export const composeExecute = <T>(
  args: T[],
  ...fns: ((...args: T[]) => void)[]
) => fns.forEach((fn) => fn(...args));
