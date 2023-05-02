//----1----// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке 
// от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50).
//  Добавить созданные параграфы в div с классом numbers.


//const main = document.querySelector("main");


// for (let i = 100; i >= 50; i--) {
//     if (i % 10 === 0) {
//         main.innerHTML +=  `<div class="nambers">${i}</div>`
//     }
    
// }

//-----2-----// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и 
// добавляет его в div с классом strings_container. Строки взять произвольные.


// const main = document.querySelector("main")


// const namesContainer = ["Rinat", "Leon", "Anna", "Katya"]
// for (let i = 0; i < namesContainer.length; i++) {
//     main.innerHTML += `<div class="strings_container">
//                                 <p>${namesContainer[i]}</p>
//                         </div>`
// }



//-----3-----//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name 
// и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей.
//  Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
//   Добавить все карточки в div с классом users_container.


// const main = document.querySelector("main")

// const users = [
//     {
//         first_name: "Rinat",
//         last_name: "Fromm",
//         age: 27
//     },
//     {
//         first_name: "Leon",
//         last_name: "Makartni",
//         age: 20
//     },
//     {
//         first_name: "Anna",
//         last_name: "Müller",
//         age: 34
//     },
//     {
//         first_name: "Katya",
//         last_name: "Schulz",
//         age: 17 
//     },
// ]
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 18) {
//         main.innerHTML += `<div class="users_container">
//                                     <h2>${users[i].first_name}</h2>
//                                     <h3>${users[i].last_name}</h3>
//                                     <p>${users[i].age} years old</p>
//                             </div>`
//     }
// }