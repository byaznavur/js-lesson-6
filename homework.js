// !DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

// Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// Input: getInitialOdds(5)
// Output: [1, 3, 5, 7, 9]
// function getInitialOdds(n) {
//   let res = [];

//   for (let i = 0; i < n; i++) {
//     res.push(2 * i + 1);
//   }

//   return res;
// }

// const result = getInitialOdds(5);

// console.log(result);
// Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

// function getEvenReverse(arr) {
//   let res = [];

//   for (let el of arr) {
//     if (el % 2 === 0) {
//       res.push(el);
//     }
//   }

//   return res.reverse();
// }
// let arr = [4, 5, 7, 8, 6, 9];
// const result = getEvenReverse(arr);

// console.log(result);
// Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4
// let arr = [4, 5, 7, 8, 6, 9];
// let len = arr.length;

// for (let i in arr) {
//   console.log(arr[i], arr[len - i - 1]);
// }
// Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32
// let arr = [1, 6, 9, 5, 8, 10, 15];

// function rangeSum(arr, K, L) {
//   let sum = 0;
//   let res = arr.slice(K, L + 1);
//   for (el of res) {
//     sum += el;
//   }
//   return sum;
// }

// let result = rangeSum(arr, 2, 5);

// console.log(result);
// Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
// Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// Output: [7, 4, 2, 3, 1, 5]
// function getSingleArr(arr) {
//   let res = [];

//   for (el of arr) {
//     if (!res.includes(el)) {
//       res.push(el);
//     }
//   }

//   return res;
// }
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let k = getSingleArr(arr);

// console.log(k);
// Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// let arr = [7, 4, 1, 2, 3, 9, 5];
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

// let maxIndex = arr.indexOf(max);
// let minIndex = arr.indexOf(min);

// arr[maxIndex] = min;
// arr[minIndex] = max;

// console.log(maxIndex, minIndex);

// console.log(arr);
// Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// Input: [1, 5, 8, 9, 10]
// Output: [5, 8, 9, 10, 1]
// let arr = [9, 43, 1, 5, 8, 9, 10, 2, 3, 4];

// let firstIndex = arr.shift();
// arr.push(firstIndex);

// console.log(arr);
//! UYGA VAZIFA

// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 8 , 16, 32, 64]

// function getLevel2(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     let res = 2 ** i;
//     arr.push(res);
//   }

//   return arr;
// }

// let a = getLevel2(5);

// console.log(a);
// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// function createArray(n, A, B) {
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
// console.log(createArray(5, 2, 3));

// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
// let arr = [2, 4, 8, 16, 32, 64];
// let res = arr.reverse();

// console.log(res);
// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = " ";

// let sum = 0;
// for (let el of arr) {
//   if (el % 2 !== 0) {
//     res += el + " ";
//     sum++;
//   }
// }
// console.log(res);

// console.log(sum);
// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = [];
// let oddArr = [];
// let evenArr = [];
// for (let el of arr) {
//   if (el % 2 == 0) {
//     oddArr.push(el);
//   }
//   if (el % 2 != 0) {
//     evenArr.push(el);
//   }
// }
// res.push(...evenArr.reverse(), ...oddArr);
// console.log(res);

// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// let arr = [2, 3, 4, 5, 6, 7];
// let newArr = [];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.
// let arr = [2, 3, 4, 5, 6, 7];
// let len = arr.length;

// for (let i = 0; i < len / 2; i++) {
//   console.log(arr[len - 2 * i - 1]);
// }

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.
// let arr = [1, 2, 3, 5, 6, 7];
// let even = [];
// let odd = [];

// let len = arr.length;
// for (let i = 0; i < Math.floor(len / 2); i++) {
//   even.push(arr[2 * i]);
//   odd.push(arr[2 * i + 1]);
// }

// console.log(...even, ...odd);
// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.
// let arr = [1, 2, 3, 5, 6, 7];
// let even = [];
// let odd = [];

// let len = arr.length;
// for (let i = 0; i < Math.floor(len / 2); i++) {
//   even.push(arr[2 * i]);
//   odd.push(arr[2 * i + 1]);
// }

// console.log(...odd, ...even.reverse());
// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.  A[0] ,A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let len = arr.length;

// let start = 0;
// let end = len - 1;

// while (start <= end) {
//   console.log(arr[start]);
//   start += 2;
//   if (start <= end) {
//     console.log(arr[end]);
//     end -= 2;
//   }
// }
// ! = 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let len = arr.length;
// let start = 0;
// let end = len - 1;
// let chunkSize = 2;
// while (start <= end) {
//   for (let i = 0; i < chunkSize && start <= end; i++) {
//     console.log(arr[start]);
//     start++;
//   }
//   for (let i = 0; i < chunkSize && start <= end; i++) {
//     console.log(arr[end]);
//     end--;
//   }
// }

//! Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
//
// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]\

// let arr = [10, false, "", "Abdulaziz", null];

// let arrTruthy = [];
// let arrFalsy = [];
// for (let i of arr) {
//   if (i) {
//     arrTruthy.push(i);
//   } else {
//     arrFalsy.push(i);
//   }
// }

// console.log(arrFalsy);
// console.log(arrTruthy);
// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

// let arr = [8, 3, 2, 9, 2, 5, 89];

// function getOddMin(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// let res = getOddMin(arr);
// console.log(res);

// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.
// let arr = [8, 3, 2, 9, 2, 5, 89];

// function getEvenMax(arr) {
//   let max = arr[1];
//   for (let i = 1; i < arr.length; i += 2) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// let res = getEvenMax(arr);
// console.log(res);

// Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.
// let arr = [2, 4, 5, 3, 9, 8, 12, 13, 15, 6, 7];
// let lastLocalMaxIndex = -1;

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     lastLocalMaxIndex = i;
//   }
// }

// console.log(lastLocalMaxIndex);
// Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
// let arr = [4, 5, 3, 9, 8, 12, 13, 15, 6, 7];
// let R = 4;

// let closest = arr[0];
// let minDifference = Math.abs(R - arr[0]);

// for (let i = 1; i < arr.length; i++) {
//   let currentDifference = Math.abs(R - arr[i]);
//   if (currentDifference < minDifference) {
//     minDifference = currentDifference;
//     closest = arr[i];
//   }
// }

// console.log(closest); // Natija: 4

// Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.
// let arr = [4, 5, 3, 9, 8, 12, 13, 15, 6, 7];

// let maxSum = arr[0] + arr[1];
// let index = 0;

// for (let i = 1; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];
//   if (sum > maxSum) {
//     maxSum = sum;
//     index = i;
//   }
// }

// console.log(
//   `Eng katta yig'indiga ega bo'lgan qo'shni elementlar: ${arr[index]} va ${
//     arr[index + 1]
//   }`
// );
// console.log(`Yig'indisi: ${maxSum}`);

// Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.

// Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.
let arr = [3, 7, 3, 2, 9, 3, 7, 9, 7, 9, 9];

let maxCount = 0; // Eng ko'p uchragan elementning sonini saqlash uchun
let mostFrequentElement; // Eng ko'p uchragan elementni saqlash uchun

for (let i = 0; i < arr.length; i++) {
  // Massivdagi har bir elementni ko'rib chiqish
  let currentCount = 0; // Hozirgi elementning sonini saqlash uchun

  for (let j = 0; j < arr.length; j++) {
    // Hozirgi elementni (arr[i]) boshqa barcha elementlar bilan solishtirish
    if (arr[i] === arr[j]) {
      // Agar hozirgi element (arr[i]) boshqa bir element bilan teng bo'lsa (arr[j]), sonini oshiramiz
      currentCount++;
    }
  }

  // Agar hozirgi element soni eng ko'p bo'lsa, maxCount va mostFrequentElement o'zgaruvchilarini yangilaymiz
  if (currentCount > maxCount) {
    maxCount = currentCount;
    mostFrequentElement = arr[i];
  }
}

console.log(
  `Eng ko'p uchragan element: ${mostFrequentElement}, soni: ${maxCount}`
);

// Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.

// Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.

// Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.

// Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)

// Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.

// Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.

// Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi deleteElementWithi(arr, k) nomli funksiya tuzilsin.

// Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.

// Array28. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.

// Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]

// Array30. arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !
