type Join = (...args: string[]) => string;
declare const join$1: Join;

type $join_Join = Join;
declare namespace $join {
  export { type $join_Join as Join, join$1 as join };
}

type E = String | Object | Number | Array<null> | null | undefined | Symbol | Boolean;
declare const ternary$1: <WIf extends E, WElse extends E = null>(condition: boolean, wIf: WIf, wElse: WElse) => WIf | WElse;

declare namespace $ternary {
  export { ternary$1 as ternary };
}

declare const utils: {
    join: typeof $join;
    ternary: typeof $ternary;
};
declare const join: typeof $join;
declare const ternary: typeof $ternary;

export { utils as default, join, ternary };
