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

// arr[11] = "Hello";
// arr[12] = "World";

arr[arr.length] = "Hello";
arr[arr.length] = "World";

arr[20] = "fsdkf";

console.log(arr);
