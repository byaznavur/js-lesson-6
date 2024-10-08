# js-lesson-6

### JavaScript Arrays

### 1. **Nima uchun array?**

**Array** — bu bir nechta qiymatlarni saqlash uchun ishlatiladigan ma'lumotlar strukturasidir. Har bir element indeks orqali murojaat qilinadi va ular ketma-ket saqlanadi.

**Misol:**

!https://prod-files-secure.s3.us-west-2.amazonaws.com/fd898b3f-446b-4505-afd7-bb983413380e/c494ad4f-aaef-41cc-bce0-dd76384305cf/Untitled.png

### 2. **Array yaratish**

**Sintaksis:**

```jsx
const array_name = [item1, item2, ...];

```

**Misollar:**

```jsx
const cars = ["Saab", "Volvo", "BMW"];
```

Yana bir usul:

```jsx
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
```

Yana bir usul:

```jsx
const cars = Array("Saab", "Volvo", "BMW");
```

Bo'sh array yaratish:

```jsx
let scores = Array(10); // 10 ta bo'sh element
```

### 3. **Array turlari**

**Misol:**

```jsx
let arr = [1, 3, 5];
console.log(typeof arr); // object
```

### 4. **Array uzunligi**

**Sintaksis:**

```jsx
let mountains = ["Everest", "Fuji", "Nanga Parbat"];
let len = mountains.length;
console.log(len); // 3
```

**Olingan element:**

```jsx
console.log(mountains[len - 1]); // oxirgi element
```

### 5. **Elementlarga murojaat qilish**

**Sintaksis:**

```jsx
let mountains = ["Everest", "Fuji", "Nanga Parbat"];
console.log(mountains[0]); // 'Everest'
```

**Misol:**

```jsx
let mountains = ["Everest", "Fuji", "Nanga Parbat"];
let len = mountains.length;
console.log(mountains[len - 1]); // oxirgi element
```

### 6. **Elementlarni o'zgartirish**

**Sintaksis:**

```jsx
arrayName[index] = value;
```

**Misol:**

```jsx
const fruit = ["apple", "banana", "cherry"];
fruit[0] = "limon";
```

### 7. **Elementlarni qo'shish**

**Sintaksis:**

```jsx
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon"; // "Lemon" qo'shish
```

**Misol:**

```jsx
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon"; // undefined "holes" yaratadi
```

### 8. **Elementlarni o'chirish**

**Sintaksis:**

```jsx
delete arr[index];
```

**Misol:**

```jsx
let cars = ["Saab", "Volvo", "BMW"];
delete cars[1]; // "Volvo" o'chiriladi, lekin undefined qoladi
```

### 9. **Destructuring (Parchalash)**

**Sintaksis:**

```jsx
let arr = [1, 3, 5, 7];
let [el1, el2, el3, el4] = arr;
```

**Misol:**

```jsx
let [first, second, third] = [10, 20, 30];
console.log(first); // 10
console.log(second); // 20
```

### 10. **Spread operator (`...`)**

**Sintaksis:**

```jsx
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = [...arr1, ...arr2];
```

**Misol:**

```jsx
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

### 11. **Iteration (Takrorlash)**

- **for**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3, 4];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  ```
- **for in**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3, 4];
  for (let index in arr) {
    console.log(arr[index]);
  }
  ```
- **for of**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3, 4];
  for (let value of arr) {
    console.log(value);
  }
  ```

### 12. **Array metodlari**

- **at(index)**
  **Misol:**
  ```jsx
  let arr = [10, 20, 30];
  console.log(arr.at(-1)); // 30 (oxirgi element)
  ```
- **toString(), join()**
  **Misol:**
  ```jsx
  let arr = [10, 20, 30];
  console.log(arr.toString()); // "10,20,30"
  console.log(arr.join("-")); // "10-20-30"
  ```
- **push(), pop()**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3];
  arr.push(4); // [1, 2, 3, 4]
  arr.pop(); // [1, 2, 3]
  ```
- **unshift(), shift()**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3];
  arr.unshift(0); // [0, 1, 2, 3]
  arr.shift(); // [1, 2, 3]
  ```
- **reverse() vs toReversed()**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3];
  console.log(arr.reverse()); // [3, 2, 1]
  let newArr = arr.toReversed(); // [1, 2, 3] (original array remains unchanged)
  ```
- **splice(startIndex, countOfElementDeleted, elementAdded1, elementAdded2, …)**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3, 4];
  arr.splice(2, 1, 5, 6); // [1, 2, 5, 6, 4]
  ```
- **fill(value, startIndex, endIndex)**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3, 4];
  arr.fill(0, 1, 3); // [1, 0, 0, 4]
  ```
- **slice(startIndex, endIndex)**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3, 4];
  let newArr = arr.slice(1, 3); // [2, 3]
  ```
- **includes(el)**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3];
  console.log(arr.includes(2)); // true
  ```
- **indexOf(), lastIndexOf()**
  **Misol:**
  ```jsx
  let arr = [1, 2, 3, 2];
  console.log(arr.indexOf(2)); // 1
  console.log(arr.lastIndexOf(2)); // 3
  ```
- **concat()**
  **Misol:**
  ```jsx
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  let newArr = arr1.concat(arr2); // [1, 2, 3, 4]
  ```

### 13. **`Array` constructor**

- **Array.isArray()**
  **Misol:**
  ```jsx
  console.log(Array.isArray([1, 2, 3])); // true
  console.log(Array.isArray({})); // false
  ```

### Amaliy mashqlar:

1. **Array yaratish va manipulyatsiya qilish:**
   - Bo'sh array yarating va 5 ta element qo'shing.
   - Array uzunligini aniqlang va oxirgi elementini chiqarib oling.
   - Elementlarning qiymatlarini o'zgartiring va yangi elementlar qo'shing.
2. **Destructuring:**
   - 3 ta qiymatli array yarating va destructuring orqali ularni alohida o'zgaruvchilarga ajrating.
3. **Spread operator:**
   - Ikki arrayni birlashtirib, yangi array yarating.
4. **Metodlarni qo'llash:**
   - `push()`, `pop()`, `shift()`, `

unshift()`,` splice()`metodlarini qo'llang va natijalarni tekshiring.     -`includes()`va`indexOf()` metodlarini ishlatib, ma'lum bir element mavjudligini tekshiring.

1. **Iteratsiya:**
   - `for`, `for in`, va `for of` loop yordamida array elementlarini chiqarib oling.

### 10 ta qiyin savol:

1. Arrayni o'zgartirish uchun `splice()` metodini qanday ishlatish mumkin? Misol keltiring.
2. `slice()` va `splice()` metodlarini taqqoslab bering. Ularning farqlari nimada?
3. Spread operator (`...`) yordamida ikki arrayni birlashtiring va natijani ko'rsating.
4. `fill()` metodidan foydalanib, arraydagi ma'lum qismni qanday qiymat bilan to'ldirish mumkin?
5. Arraydagi so'nggi elementni qanday olish mumkin? Qanday qilib bu elementni arraydan o'chirishingiz mumkin?
6. `indexOf()` metodidan qanday qilib arraydagi oxirgi qismdagi qiymatni olish mumkin?
7. `for of` loop va `for in` loop orasidagi farqlar nima? Qanday vaziyatlarda biri boshqaidan yaxshiroq ishlaydi?
8. Destructuring yordamida array elementlarini qanday qilib o'zgaruvchilarga ajratish mumkin?
9. `concat()` metodidan qanday foydalanish mumkin va u qanday ishlaydi?
10. `Array.isArray()` metodidan qanday foydalaniladi va u qanday holatlarda `false` qaytaradi?

Yuqoridagi ma'lumotlar va amaliy mashqlar sizga JavaScript arraylari haqida chuqurroq tushuncha beradi va intervyu savollariga tayyorlanishga yordam beradi. Har bir elementni o'rganib chiqing va amaliy mashqlarni bajarishga harakat qiling.
