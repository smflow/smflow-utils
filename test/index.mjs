// cmd: npm run test:mjs
import defaultExport, { sayHello } from "../dist/index.mjs";

console.log(defaultExport());
console.log(sayHello());