### Завдання 1:
Є функція `fetchData`, яка симулює отримання даних із сервера. Виправте код, щоб він коректно виводив дані в консоль.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Дані завантажено"), 1000);
  });
}

const data = fetchData();
console.log(data); // Очікується: "Дані завантажено"
```

1. Знайдіть помилку.
2. Виправте код так, щоб у консоль виводилося "Дані завантажено".

---

### Завдання 2:
Напишіть функцію `retryFetch`, яка отримує на вхід функцію для отримання даних `fetchData` та кількість спроб `retries`.
Функція повинна виконати `fetchData`. Якщо вона завершується помилкою (reject), функція повинна повторити запит до тих пір, поки не вичерпається кількість спроб.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7; 
    setTimeout(() => (success ? resolve("Дані отримано") : reject("Помилка")), 500);
  });
}

function retryFetch(fetchData, retries) {
  // ...
}

retryFetch(fetchData, 3)
  .then((data) => console.log(data))
  .catch((err) => console.error("Не вдалося отримати дані:", err));
```

---

### Завдання:
Напишіть функцію `calculateTotal`, яка використовує `reduce` для обчислення загальної суми замовлення. Кожен елемент — це об'єкт із полями `name`, `price`, `quantity`.

```javascript
const cart = [
  { name: "Телефон", price: 700, quantity: 1 },
  { name: "Ноутбук", price: 1500, quantity: 2 },
  { name: "Мишка", price: 50, quantity: 3 },
];

// Ваша функція
function calculateTotal(cart) {
  // ...
}

console.log(calculateTotal(cart)); // Очікується: 3850
```

---

### Завдання:
Є функція `mergeObjects`, яка приймає два об'єкти та об'єднує їх. Знайдіть помилку в коді та виправте її.

```javascript
function mergeObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = mergeObjects(obj1, obj2);

console.log(merged); // Очікується: { a: 1, b: 3, c: 4 }
console.log(obj1);   // Очікується: { a: 1, b: 2 } (не має змінюватися)
```

---
practical https://www.jsv9000.app/
