import sayHello, { name, sum } from "./myModule";

console.log(name);
console.log(sum(3,4));
sayHello()

// import { readFileSync } from 'fs'
// readFileSync('./')

// import * as fs from 'fs'
// fs.readFileSync('./')

import fs from 'fs'
fs.readFileSync('./')