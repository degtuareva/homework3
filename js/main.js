// 1) Написать функцию, которая считает количество слов в предложении.
// function countWords(text){
//     const words=text.split(' ');
//     return words.length;
// }
// const text='Я люблю путешесвовать';
// const wordCount=countWords(text);
// console.log(wordCount);
// const text2='Я путешествую поездами,так как работаю на Белорусской Железной дороге';
// const wordCount2=countWords(text2);
// console.log(wordCount2);


// 2) Написать функцию сокращения строки. Функция принимает строку и ее
// максимальную длину. Если длина строки больше, чем максимальная, то необходимо
// отбросить лишние символы, добавив вместо них троеточие.
// Например: truncate(«Hello, world!», 8) должна вернуть «Hello...».

function truncate(text,maxLength){
    if(text.length<=maxLength){
        return text;
    }
const truncatedText=text.slice(0,maxLength);
return truncatedText + '...';
}
const text='Hello,world';
const maxLength=8;
const truncatedText=truncate(text,maxLength);
console.log(truncatedText);

// 3) Сделайте функцию, которая параметром будет принимать массив и элемент и
// возвращать следующий за ним элемент. Пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1
function findNextElement(arr, element) {
    let index = arr.indexOf(element);
    if (index === -1) {
    return "Element not found in the array";
    } else if (index === arr.length - 1) {
    return arr[0];
    } else {
    return arr[index + 1];
    }
}

let arr = [1, 2, 3, 4, 5];
  console.log(findNextElement(arr, 1)); // Output: 2
  console.log(findNextElement(arr, 4)); // Output: 5
  console.log(findNextElement(arr, 5)); // Output: 1
  
//   4) Дан массив чисел arrayNumbers. Необходимо создать переменную isEven, которая
// будет true или false в зависимости от того, являются ли все числа массива четными
const arrayNumbers= [2, 4, 10, 6, 8, 14, 24, 50];
// console.log(isEven); // => true
// const arrayNumbers = [2, 4, 10, 6, 8, 14, 24, 50];
// let isEven = arrayNumbers.every(num => num % 2 === 0);
// console.log(isEven); // Output: true
let isEven = arrayNumbers.some(num => num % 2 === 0);
console.log(isEven); // Output: true

// 5) Напишите функцию, которая принимает строку и возвращает строку, в которой
// каждый символ (с учетом регистра) повторяется.
// Примеры (ввод -> вывод):
// "String" -> "SSttrriinngg"
// "Hello World" -> "HHeelllloo WWoorrlldd"
// "1234!_" -> "11223344!!__"
// Используйте методы строк и методы массивов

function repeatCharacters(inputString) {
    return inputString.split("").map(char => char + char).join("");
  }
  
  console.log(repeatCharacters("String")); // Output: "SSttrriinngg"
  console.log(repeatCharacters("Hello World")); // Output: "HHeelllloo  WWoorrlldd"
  console.log(repeatCharacters("1234!_")); // Output: "11223344!!__"
//  6) Форма авторизации и регистрации - очень популярная и неотъемлемая часть многих
//   веб-сайтов. Сейчас вы разработаете ее на JavaScript.
//   Представим, что на нашем сайте есть пользователь, у которого логин - это
//   «the_best_user», а пароль - «12345678». Сохраните эти значения в переменные и
//   назовите их existedUserLogin и existedUserPassword соответственно.Вам требуется с помощью функции prompt вывести 2 модальных окна на экран. 1-е
//   будет с надписью «Введите логин», 2-е - «Введите пароль». Сохраните введенные
//   пользователем значения в переменные userLogin и userPassword. Также учтите, что в
//   итоговых данных пользователя не должно быть лишних пробелов в начале и в конце
//   строки. Используйте метод trim, чтобы убрать лишние пробелы.
//   Если введенные пользователем логин и пароль совпадают с уже существующими
//   данными в existedUserLogin и existedUserPassword, то выведите сообщение «Добро
//   пожаловать, userLogin!» (замените userLogin на логин пользователя). Иначе же
//   отобразите сообщение «Логин и (или) Пароль введены неверно!».


  function repeatCharacters(inputString) {
    return inputString.split("").map(char => char + char).join("");
  }
  
  let userInput = prompt("Введите логин").trim();
  let userLogin = userInput !== null ? userInput : "";
  userInput = prompt("Введите пароль").trim();
  let userPassword = userInput !== null ? userInput : "";
  
  const existedUserLogin = "the_best_user";
  const existedUserPassword = "12345678";
  
  if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    console.log(`Добро пожаловать, ${userLogin}!`);
  } else {
    console.log("Логин и (или) Пароль введены неверно!");
  }

//   7) С помощью prompt запросить у пользователя его имя. Передайте в prompt строку
// 'Как вас зовут? ' и введенный пользователем результат сохраните в переменную
// userName. Какое бы значение пользователь не ввел, вам требуется отформатировать
// строку userName по следующим условиям:
// 1. Все буквы должны быть строчными.
// 2. В начале и в конце строки не должно быть лишних пробелов.
// После выведите в модальное окно с помощью alert строку «Вас зовут userName»
// (замените userName на отформатированный текст, введенный пользователем).

function getFormattedUserName(inputString) {
    return inputString.trim().toLowerCase();
}

let userName = prompt("Введите ваше имя").trim();

console.log("Вас зовут " + getFormattedUserName(userName));


//   8) Дана строка 'я учу javascript!'. Нужно вырезать из нее слово 'учу' и слово 'javascript'
// (разными методами строк)
let str = "я учу javascript!";

// Using the slice() method
let word1 = str.slice(2, 5); // "учу"
let word2 = str.slice(6, 16); // "javascript"

// Using the substring() method
let word3 = str.substring(2, 5); // "учу"
let word4 = str.substring(6, 16); // "javascript"

// Using the substr() method
let word5 = str.substr(2, 3); // "учу"
let word6 = str.substr(6, 10); // "javascript"

console.log(word1, word2, word3, word4, word5, word6);


// 9) С помощью циклов for вам необходимо создать матрицу 3x5. В итоге она должна
// выглядеть следующим образом:
// Array(3) i
// 0:(5)[1,2,3,4,5]
// 1:(5)[1,2,3,4,5]
// 2:(5)[1,2,3,4,5]
// length:3
// Подсказка: как видите, в итоге получился массив из 3-х элементов, внутри которого
// хранятся массивы, каждый из которых имеет по 5 элементов. Это можно реализовать спомощью 2-х циклов for. Внутрь одного цикла for необходимо поместить еще один
// цикл

let matrix = [];

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 5; j++) {
    row.push(i * 5 + j + 1);
  }
  matrix.push(row);
}

console.log(matrix);

// 10) Когда мы проходим регистрацию, то в большинстве случаев у нас запрашивают
// пароль. И всегда для него есть некоторые ограничения по длине либо по символам.
// Сейчас вы напишете программу, которая будет проверять на валидность пароль,
// введенный пользователем.
// Для начала вам необходимо запросить пароль у пользователя при помощи prompt.
// Отобразите сообщение “Введите пароль”.
// Пароль должен удовлетворять следующим условиям:
// 1. Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая
// 20).
// 2. Пароль должен содержать минимум 1 прописную (большую) букву.
// 3. Пароль должен содержать минимум 1 цифру.
// Если все условия удовлетворены, то выведите при помощи alert сообщение 'Пароль
// валидный. Добро пожаловать в аккаунт! ’, иначе – 'Пароль не удовлетворяет условиям!
// Перезагрузите страницу и попробуйте ввести его еще раз.

let password = prompt("Введите пароль");

if (password.length >= 3 && password.length <= 20) {
  if (/[A-Z]/.test(password) && /\d/.test(password)) {
    alert("Пароль валидный. Добро пожаловать в аккаунт!");
  } else {
    alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз");
  }
} else {
  alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз");
}