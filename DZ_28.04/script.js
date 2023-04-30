// Напишите функцию, которая принимает два числовых аргумента и
//  выводит в консоль все четные числа от большего к меньшему.

// function getNumbers(num1, num2) {
//     if (num1 > num2) {
//         for (let i = num2; i <= num1; i++) {
//             if (i % 2 === 0) {
//                 console.log(i)
//             }
//         }
//     }else {
//         for (let i = num1; i <= num2; i++) {
//             if (i % 2 === 0) {
//                 console.log(i)
//             }
//         }
//     }
// }
// getNumbers(23, 6)

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
//  и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function getPower(num1, num2 = 2) {
//     const sum = num1 * num2

//     return sum
// }
// console.log(getPower(4))

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function calcNumber(n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(calcNumber(34))

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел
// и нечетных чисел от n до m.
//  Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function getNumbers(n, m) {
//   let sumEvent = 0;
//   let sumAdd = 0;
//   for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) {
//       sumEvent += i;
//     } else sumAdd += i;
//   }
//   console.log(sumEvent);
//   console.log(sumAdd);
// }
// getNumbers(10, 24);


// Напишите функцию, которая принимает в качестве аргументов массив строк,
//  а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null.
//   Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//   (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'

// const strings = [ "one", "twowwwww", "three", "schmetarling" ]
// function getLongestString(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     let longestString = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > longestString.length) {
//         longestString = arr[i];
//         }
//     }
//     return longestString;
//     }
//     console.log(getLongestString(strings))




