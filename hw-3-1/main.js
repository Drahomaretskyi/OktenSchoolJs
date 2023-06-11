// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let arr = [5, 7, -3, 112, 35];
// console.log(arr);
// let arr1 = ['кошка', 'собачка', 'енот', 'кашалот', 'бегемот'];
// console.log(arr1);
// let arr2 = [ 25, 'юла', 'труба', -11, true];
// console.log(arr2);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let mas = [1, -1, 'цветок', '2', true, 'false'];
//
// let mas0 = mas[0];
// console.log(mas0);
// let mas1 = mas[1];
// console.log(mas1);
// let mas2 = mas[2];
// console.log(mas2);
// let mas3 = mas[3];
// console.log(mas3);
// let mas4 = mas[4];
// console.log(mas4);
// let mas5 = mas[5];
// console.log(mas5);
//

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let numbers = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
// let i = 0;
// while (i < numbers.length) {
//     let num = numbers[i];
//     console.log(num);
//     i++;
// }

// 2. перебрати його циклом for
// for (let i = 0; i <numbers.length; i++) {
//     console.log(numbers[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i +=2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < numbers.length; i+=2) {
//     console.log(numbers[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let j = 0;
// while (j < numbers.length) {
//     if (numbers[j] % 2 === 0) {
//         console.log(numbers[j]);
//     }
//     j++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = "okten";
//     }
// }
//
// console.log(numbers);

// 8. вивести масив в зворотньому порядку.
// numbers.reverse();
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let mas = [5,21,41,7,87,42,11,378,100,98];
//
// for (let i = 0; i <mas.length; i++) {
//     console.log(mas[i]);
// }
//
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = ['Аид', 'Тор', 'Рок', 'Носорог', 'Бумеранг', 'Человек', 'Стрекоза', 'Cова', 'Егоза', 'Дрезина'];
//
// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arrOne = ['навигация', 'девиация', '21', 'диградазия', true, false, 24, 25, 27, undefined];
//
// for (let i = 0; i <arrOne.length; i++) {
//     console.log(arrOne[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrTwo = ['типизация', 'hello', false, 'раритет', true, false, '622', 25, '27', null];
//
// for (let i = 0; i < arrTwo.length; i++) {
//     if (typeof arrTwo[i] === "boolean") {
//         console.log(arrTwo[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrThree = [4, 'hello', false, 2, true, false, '622', 25, '27', null];
//
// for (let i = 0; i < arrThree.length; i++) {
//     if (typeof arrThree[i] === "number") {
//         console.log(arrThree[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrFour = [4, 'hello', false, 2, true, false, 'черешня', 25, 'ананас', null];
//
// for (let i = 0; i < arrFour.length; i++) {
//     if (typeof arrFour[i] === "string") {
//         console.log(arrFour[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrFive = [true, false, '2', 4, 'раритет', 'седан', 'ромашка', null, undefined, 99];
//
// for (let i = 0; i < arrFive.length; i++) {
//     if (i === 0) {
//         console.log(arrFive[i]);
//     }
//     if (i === 1) {
//         console.log(arrFive[i]);
//     }
//     if (i === 2) {
//         console.log(arrFive[i]);
//     }
//     if (i === 3) {
//         console.log(arrFive[i]);
//     }
//     if (i === 4) {
//         console.log(arrFive[i]);
//     }
//     if (i === 5) {
//         console.log(arrFive[i]);
//     }
//     if (i === 6) {
//         console.log(arrFive[i]);
//     }
//     if (i === 7) {
//         console.log(arrFive[i]);
//     }
//     if (i === 8) {
//         console.log(arrFive[i]);
//     }
//     if (i === 9) {
//         console.log(arrFive[i]);
//     }
//     if (i === 10) {
//         console.log(arrFive[i]);
//     }
// }

// let arrSix = [true, false, '2', 4, 'раритет', 'седан', 'ромашка', null, undefined, 99];

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    document.write(i + "<br>");
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.

let books = [
    {
        title: 'Deception Point',
        pageCount: 989,
        genre:['Mystical detective'],
        authors: ['Dan Brown', 'author 2'],
    },
    {
        title: 'Carl Boos',
        pageCount: 752,
        genre:['Action and Adventure'],
        authors: ['Dan Brown', 'author 2'],
    },
    {
        title: 'Georgi Boos',
        pageCount: 400,
        genre:['Classics'],
        authors: ['Dan Brown', 'author 2'],
    },
    {
        title: 'Deception Point',
        pageCount: 1024,
        genre:['Literary Fiction'],
        authors: ['Dan Brown', 'author 2'],
    },
    {
        title: 'Deception Point',
        pageCount: 320,
        genre:['Horror'],
        authors: ['Dan Brown', 'author 2'],
    },
    {
        title: 'Deception Point',
        pageCount: 120,
        genre:['Hystorical'],
        authors: ['Sam Smith', 'Adam Moris']
    },
]

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор