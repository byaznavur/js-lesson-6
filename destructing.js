let arrWithDifferentValues = [
  5,
  6,
  0,
  "Abdulaziz",
  undefined,
  null,
  true,
  312323323213213312n,
  Symbol(),
  [],
  [false, NaN, "0", null, 10],
];

// console.log(arrWithDifferentValues[2]);
// console.log(arrWithDifferentValues[5]);
// console.log(arrWithDifferentValues[10]);

let [el0, el1, el2] = arrWithDifferentValues;

console.log(el0);
console.log(el1);
console.log(el2);
