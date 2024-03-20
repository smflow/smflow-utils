type Join = (...args: string[]) => string;
declare const join: Join;

type E = String | Object | Number | Array<null> | null | undefined | Symbol | Boolean;
declare const ternary: <WIf extends E, WElse extends E = null>(condition: boolean, wIf: WIf, wElse: WElse) => WIf | WElse;

export { type Join, join, ternary };
