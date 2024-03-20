// cmd: npm run test:mjs
import { join, ternary } from "../dist/index.mjs";

// join
console.log(join.call("-", "test1", "test2")); // test1-test2
console.log(join("test1", "test2")); // test1 test2

// ternary
console.log(ternary(true, "this returns this", "not this")); // test1-test2
console.log(ternary(false, "not this", "this returns this")); // test1 test2