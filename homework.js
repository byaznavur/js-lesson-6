//? DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

const { array } = require("prop-types");

//! Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// Input: getInitialOdds(5)
// Output: [1, 3, 5, 7, 9]

//! Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

//! Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

//! Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32

//! Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
// Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// Output: [7, 4, 2, 3, 1, 5]

//! Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// [7, 4, 1, 2, 3, 9, 5]

//! Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// Input: [1, 5, 8, 9, 10]
// Output: [5, 8, 9, 10, 1]

//? UYGA VAZIFA

//! Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]

// function getLevel2(n) {
//   let arr = [];

//   for (let i = 0; i <= n; i++) {
//     arr.push(Math.pow(2, i));
//   }

//   return arr;
// }

// const res = getLevel2(5);

// console.log(res);

//! Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// function getArray(n, A, B) {
//   let arr = [A, B];
//   for (let i = 2; i < n; i++) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//       sum += arr[j];
//     }
//     arr.push(sum);
//   }
//   return arr;
// }
// let res = getArray(5, 2, 3);
// console.log(res); // Output: [2, 3, 5, 10, 20]

//! Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

// function reverseArray(arr) {
//   return arr.reverse();
// }
// let arr = [2, 4, 16, 32, 62];
// reverseArray(arr);

//! Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// function getEvenNum(arr) {
//   let evenArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       evenArr.push(arr[i]);
//     }
//   }
//   return evenArr;
// }
// let arr = [4, 5, 7, 8, 6, 9];
// let evenArr = getEvenNum(arr);
// console.log(evenArr);
//! Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// function getOddEvenNum(arr) {
//   let oddArr = [];
//   let evenArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenArr.push(arr[i]);
//     } else {
//       oddArr.push(arr[i]);
//     }
//   }

//   return [...oddArr, ...evenArr];
// }
// let arr = [2, 3, 8, 9, 4];
// const res = getOddEvenNum(arr);
// console.log(res);

//! Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.
// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }
//! Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[arr.length - i]);
// }
//! Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i] + " Juft index");
// }
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i] + " Toq index");
// }

//! Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11];
// let evenArr = [];
// let oddArr = [];
// for (let i = 0; i < arr.length; i += 2) {
//   oddArr.push(arr[i]);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   evenArr.push(arr[i]);
// }

// console.log(...evenArr, ...oddArr.reverse());
//! Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11];
// let len = arr.length;

// for (let i = 0; i < Math.ceil(len / 2); i++) {
//   if (i < len / 2) {
//     console.log(arr[i]);
//   }
//   if (len - 1 - i > i) {
//     console.log(arr[len - 1 - i]);
//   }
// }

//! Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
//
// function rangeOutSum(arr, K, L) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i < K || i > L) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let K = 2;
// let L = 5;
// console.log(rangeOutSum(arr, K, L));

//! Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

// let arr = [10, false, "", "Abdulaziz", null];
// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     arr1.push(arr[i]);
//   } else {
//     arr2.push(arr[i]);
//   }
// }

// console.log(arr1);
//! Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.
// let arr = [3, 2, 8, 3, 4, 2, 5, 6];

// let min = arr[0];
// for (let i = 0; i < arr.length; i += 2) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(min);
//! Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.
// function getEvenMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i += 2) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// let arr = [3, 2, 8, 3, 4, 2, 5, 6];
// let res = getEvenMax(arr);

// console.log(res);
//! Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.
// let arr = [3, 2, 8, 3, 4, 2, 5, 6];

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     console.log(arr[i], i);
//   }
// }

//! Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
// let arr = [4, 2, 8, 3, 4, 2, 5, 6];
// let R = 6;
// let minLine = Math.abs(arr[0] - R);
// let closestValue = arr[0]; // R ga eng yaqin qiymatni saqlash uchun

// for (let i = 1; i < arr.length; i++) {
//   let diff = Math.abs(arr[i] - R);
//   if (diff < minLine) {
//     minLine = diff;
//     closestValue = arr[i]; // R ga eng yaqin qiymatni yangilash
//   }
// }

// console.log(closestValue); // Eng yaqin qiymatni chiqarish

//! Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.
// let arr = [4, 2, 8, 3, 4, 2, 5, 6];

// Dastlabki eng katta yig'indi va mos elementlarni olish
// let maxSum = arr[0] + arr[1];
// let maxNum = arr[0];
// let maxNum1 = arr[1];

// for (let i = 0; i < arr.length - 1; i++) { // Tsikl oxirgi elementga yetib borguncha ishlaydi
//   let sum = arr[i] + arr[i + 1]; // Joriy element va keyingi elementning yig'indisi
//   if (sum > maxSum) {
//     maxSum = sum;
//     maxNum = arr[i];
//     maxNum1 = arr[i + 1];
//   }
// }

// console.log(maxNum);   // Birinchi element
// console.log(maxNum1);  // Ikkinchi element
// console.log(maxSum);   // Eng katta yig'indi

//! Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.
// let arr = [4, 1, 8, 3, 4, 2, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log(i, j);
//       break; // Birinchi moslikni topgandan so'ng chiqamiz
//     }
//   }
// }

//! Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.
// let arr = [4, 2, 8, 3, 4, 2, 5, 6];

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log(i, j);
//       count++;
//       break; // Birinchi moslikni topgandan so'ng chiqamiz
//     }
//   }
// }

// console.log(count);
//! Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.
// let arr = [4, 2, 8, 3, 4, 2, 5, 6];
// let resArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     resArr.push(arr[i]);
//   }
// }

// console.log(resArr);
//! Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.
// let arr = [4, 2, 8, 3, 4, 2, 5, 6];
// let k = 2;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * k;
// }
// console.log(arr);
//! Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // Misol massiv
// let n = arr.length;
// let firstHalf = arr.slice(0, n / 2);
// let secondHalf = arr.slice(n / 2);
// let newArr = secondHalf.concat(firstHalf);
// console.log(newArr);

//! Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;

for (let i = 0; i < n / 2; i++) {
  let temp = arr[i]; // Birinchi elementni saqlab qo'yamiz
  arr[i] = arr[n - 1 - i]; // Birinchi element o'rniga teskari indeksdagi elementni qo'yamiz
  arr[n - 1 - i] = temp; // Teskari indeksdagi element o'rniga saqlangan elementni qo'yamiz
}

console.log(arr); // [8, 7, 6, 5, 4, 3, 2, 1]

//! Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.
// let arr = [3, 1, 4, 5, 2, 6, 7];
// let minIndex = arr.indexOf(Math.min(...arr));
// let maxIndex = arr.indexOf(Math.max(...arr));

// if (minIndex > maxIndex) {
//   [minIndex, maxIndex] = [maxIndex, minIndex]; // min va max indekslarini almashtirish
// }

// for (let i = minIndex + 1; i < maxIndex; i++) {
//   arr[i] = 0;
// }

// console.log(arr); // [3, 1, 0, 0, 0, 6, 7]

//! Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.
// let arr = [1, 2, 3, 4, 5];
// let firstElement = arr.shift(); // Birinchi elementni olib tashlash
// arr.push(firstElement); // Uni oxiriga qo'shish

// console.log(arr); // [2, 3, 4, 5, 1]

//! Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi deleteElementWithIndex(arr, k) nomli funksiya tuzilsin.
// function deleteElementWithIndex(arr, k) {
//   return arr.slice(0, k).concat(arr.slice(k + 1));
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(deleteElementWithIndex(arr, 2)); // [1, 2, 4, 5]

//! Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.
// function deleteElementsInRange(arr, k, m) {
//   let newArr = arr.slice(0, k).concat(arr.slice(m + 1));
//   console.log('Elementlar soni:', newArr.length);
//   return newArr;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(deleteElementsInRange(arr, 2, 5)); // [1, 2, 7]

//! Array28. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.
// let arr = [1, 1, 2, 3, 3, 4, 5, 5];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr); // [1, 2, 3, 4, 5]

//! Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]
// function getElementsOneTime(arr) {
//   return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
// }
// let arr = [1, 5, 6, 1, 5, 7, 2];
// console.log(getElementsOneTime(arr)); // [6, 7, 2]

//! Array30. arr nomli massivda k qiymatli bir nech element mavjud. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !
// function searchAllElements(arr, k) {
//   let indices = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === k) {
//       indices.push(i);
//     }
//   }
//   return indices;
// }
// let arr = [1, 5, 6, 1, 5, 7, 2, 5];
// let k = 5;
// console.log(searchAllElements(arr, k)); // [1, 4, 7]
