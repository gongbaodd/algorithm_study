declare global {
  type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
}
export {};