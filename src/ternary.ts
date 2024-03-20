type E = String | Object | Number | Array<null> | null | undefined | Symbol | Boolean;
export const ternary = <WIf extends E, WElse extends E = null>(condition: boolean, wIf: WIf, wElse: WElse) => {
  if (Boolean(condition)) return wIf;
  else return wElse;
};