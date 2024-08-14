let arr = [
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

delete arr[5];
delete arr[9];

console.log(arr);
