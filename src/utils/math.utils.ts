export const add = (...args: number[]) =>
  args.reduce((sum, num) => sum + num, 0);

export const testFunc = (...args: number[]) =>
  args.reduce((sum, num) => sum + num, 0);
