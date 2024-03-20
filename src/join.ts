export type Join = (...args: string[]) => string;

export const join: Join = function (this: any, ...args) {
  return args.join(typeof this === 'string' ? this : " ");
};