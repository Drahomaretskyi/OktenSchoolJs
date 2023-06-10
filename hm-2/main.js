// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr;

arr = ["Андрiй", "Петя", 2, "3", 45, "пистолет", "нож", "старiсть", true, "скритнiсть"];

console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = {
    title: 'Эпоха мертвих',
    pageCount: 400,
    genre: 'Пост апокалипсис'
}

let books1 = {
    title: 'Гарри Поттер',
    pageCount: 500,
    genre: 'Фэнтези'
}

let books2 = {
    title: 'Метро',
    pageCount: 400,
    genre: 'Пост апокалипсис'
}

console.log(books, books1, books2);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books3 = {
    title: 'Эпоха мертвих',
    pageCount: 400,
    genre: 'Пост апокалипсис',
    authors: {nameAge:['name', 'age']}
}
console.log(books3);

// Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Petya', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya1', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya2', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya3', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya4', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya5', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya6', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya7', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya8', username: 'Kaban12',password: "hello321123"},
    {name: 'Petya9', username: 'Kaban12',password: "hello321123"},
]
console.log(users[0].name);
console.log(users[1].username);
console.log(users[2].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let message = "Вiрно";
let x = 0;

if (x < 10) {
    console.log(message);
} else {
    console.log("Невiрно")
}

//- Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 16;

if (time < 15) {
    console.log("Перша четверть");
} else if (time < 30) {
    console.log("Друга четверть");
} else if (time < 45) {
    console.log("Третя четверть");
} else {
    console.log("Четверта четверть");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 17;

if (day < 11) {
    console.log("Перша");
} else if (day < 21) {
    console.log("Друга");
} else if (day < 32) {
    console.log("Третя");
}

//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let daySelect = parseInt(prompt("Введiть порядковий номер дня"));

switch (daySelect) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('false');
        break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

if (num1 > num2) {
    console.log(`Максимальне число: ${num1}`);
} else if (num2 > num1) {
    console.log(`Максимальне число: ${num2}`);
} else {
    console.log("Числа рiвнi");
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
{
    let x;
    x = x || "default";
    console.log(x);
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log(coursesAndDurationArray[i].title + " - Супер");
    }
}
