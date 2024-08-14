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

arr[3] = "";
arr[6] = false;

// arr[9][0] = 1;
// arr[9][1] = 2;

// arr[9] = [1, 2];

arr[10][0] = true;
arr[10][3] = undefined;

console.log(arr);
