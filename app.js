// console.log("hello from node");
// console.log("PROCESS: ", process);

// const helpers = require("./helpers");

// const total = helpers.sum(10, 200);
// console.log("TOTAL: ", total);

// Destructuring
const { sum2, sub2, mult2, div2 } = require("./helpers");

const total = sum2(10, 200);
console.log("TOTAL: ", total);

const diff = sub2(200, 75);
console.log("DIFF: ", diff);

const times = mult2(10, 75);
console.log("TIMES: ", times);

const div = div2(200, 4);
console.log("DIV: ", div);
