// arr1

// function getInitialOdds(n) {
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     res.push(2 * i + 1);
//   }
//   return res;
// }

// let arr = getInitialOdds(5);

// console.log(arr);

// arr2

// function getEvenReverse(arr) {
//   let evenArr = [];
//   for (let el of arr) {
//     if (el % 2 === 0) {
//       evenArr.push(el);
//     }
//   }
//   return evenArr.reverse();
// }

// let res = getEvenReverse([4, 5, 7, 8, 6, 9]);

// console.log(res);

// arr3

// let arr = [4, 5, 7, 8, 6, 9];

// let len = arr.length;

// for (let i in arr) {
//   console.log(arr[i], arr[len - i - 1]);
// }

// arr4

// function rangeSum(arr, K, L) {
//   let res = arr.slice(K, L + 1);
//   let sum = 0;
//   for (let el of res) {
//     sum += el;
//   }
//   return sum;
// }

// let arr = [1, 6, 9, 5, 8, 10, 15];

// let s = rangeSum(arr, 2, 5);

// console.log(s);

// arr5

// function getSingleArr(arr) {
//   let res = [];
//   for (let el of arr) {
//     if (!res.includes(el)) {
//       res.push(el);
//     }
//   }
//   return res;
// }

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// let res = getSingleArr(arr);

// console.log(res);

// arr6

// let arr = [7, 4, 9, 2, 3, 1, 5];

// let max = arr[0];
// let min = arr[0];

// for (let el of arr) {
//   if (el > max) {
//     max = el;
//   }
//   if (el < min) {
//     min = el;
//   }
// }

// console.log(max);
// console.log(min);

// let maxIndex = arr.indexOf(max);
// let minIndex = arr.indexOf(min);

// arr[maxIndex] = min;
// arr[minIndex] = max;

// console.log(arr);
