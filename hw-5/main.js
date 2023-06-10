// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a, b) => a * b;

const a = rectangle (10, 5);
console.log(a);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let aUnit = (r) => Math.PI * r ** 2;

const ens = aUnit(10);
console.log(ens);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h, r) => Math.PI * 2 * h * r;

const b = cylinder (25, 14);
console.log(b);
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let printingArray = (array) => {
    for (const item of array) {
        console.log(item)
    }
}
printingArray(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let pCreator = (text, esad, wey) => document.write(`${text} ${esad} ${wey}`);

pCreator('Hi', ',', 'Tom!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let sCreator = (one, two, three) => {
    document.write(`
            <ul>
                <li>${one}</li>
                <li>${two}</li>
                <li>${three}</li>
            </ul>
    `);
}
sCreator('1', '2', '3');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let oneFunc = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++ ) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

oneFunc('hey', 4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr=[14,112,'eea', true, 'yo'];

let funcTwo = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

funcTwo(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersOne = [
    {id: 4, name: 'vasya', age: 31},
    {id: 3, name: 'petya', age: 30},
    {id: 5, name: 'kolya', age: 29},
    {id: 6, name: 'olya', age: 28},
    {id: 7, name: 'max', age: 30},
    {id: 9, name: 'anya', age: 31},
    {id: 1, name: 'oleg', age: 28},
    {id: 2, name: 'andrey', age: 29},
    {id: 8, name: 'masha', age: 30},
    {id: 11, name: 'olya', age: 31},
    {id: 10, name: 'max', age: 31}
];

let obj = (arr) => {
    for (let user of arr) {
        document.write(`<div>id:${user.id} - name:${user.name} - age:${user.age}</div>`);
    }
}
obj(usersOne);
// - створити функцію яка повертає найменьше число з масиву
const array = [51, 231, 14, 67, 78, 111];
let arrayMin = (arr) => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }
    return result;
}

console.log(arrayMin(array));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let result = 0;
    for (const number of arr) {
        result += number
    }
    return result;
}

console.log(sum([13,2,4]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap1 = (arr, index1, index2) => {
    let temp1 = arr[index1];
    let temp2 = arr[index2];
    arr[index1] = temp2;
    arr[index2] = temp1;
    console.log(arr);
}

swap1([12,42,5,1], 0, 1);// Выводит [3, 2, 1]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

const result = exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}], 'USD');
console.log(result);