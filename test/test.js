var frustumTest = require("../index.js");

console.log(frustumTest(
  [1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1],
  [[-1,-1,-2], [1,1,-1.5]]
));