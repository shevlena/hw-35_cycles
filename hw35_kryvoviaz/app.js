// Задача 1

// перший спосіб

let elements = [23, 58, 12, 47, 81, 92, 37, 64, 72, 3];
let i = 0;
let sumEvenNumbers = 0;
do {
    EvenNumber(elements[i]);    
    i++
} while (i < elements.length);
console.log(`Сума парних чисел = ${sumEvenNumbers}`)

function EvenNumber(num) {
    if (num % 2 === 0) {
        console.log(`${elements.indexOf(num)+1} число - парне: ${num}`);
        sumEvenNumbers += num;
    }
}


// другий спосіб

let elements = [23, 58, 12, 47, 81, 92, 37, 64, 72, 3];
let sumEvenNumbers = 0;
for (let i = 0; i < elements.length; i++) {
    EvenNumber(elements[i]);
}
console.log(`Сума парних чисел = ${sumEvenNumbers}`);

function EvenNumber(num) {
    if (num % 2 === 0) {
        console.log(`${elements.indexOf(num)+1} число - парне: ${num}`);
        sumEvenNumbers += num;
    }
}



// третій спосіб

let elements = [23, 58, 12, 47, 81, 92, 37, 64, 72, 3];
let sumEvenNumbers = 0;
let i = 0;
while (i < elements.length) {
    EvenNumber(elements[i]);
    i++
}
console.log(`Сума парних чисел = ${sumEvenNumbers}`);

function EvenNumber(num) {
    if (num % 2 === 0) {
        console.log(`${elements.indexOf(num)+1} число - парне: ${num}`);
        sumEvenNumbers += num;
    }
}


// Задача 2
const products = [
    {name: 'Молоко', calories: 64, weight: 200},
    {name: 'Йогурт', calories: 59, weight: 150},
    {name: 'Сир', calories: 402, weight: 50}
];

let numCalories = 0;
let sumCaloriesProducts = 0;
let i = 0;
do {
    if (products[i].calories >= 50) {
        Calories(i);
        sumCaloriesProducts += numCalories;
    } else {
        console.log(`${products[i].name}: в 100 г менше 50 кал`);
        i++;
        continue
    }
    i++;   
} while (i < products.length);

console.log(`Загальна кількість калорій: ${sumCaloriesProducts} кал`);

function Calories(num) {
    numCalories = products[i].calories * products[i].weight / 100;
    console.log(`${products[i].name}: ${numCalories} кал`);
    return (numCalories);
}