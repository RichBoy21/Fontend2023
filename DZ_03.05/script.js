//-----1-----// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять 
// у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.


// const button = document.querySelector(".btn") 
// const redSquare = document.querySelector(".square")


// button.addEventListener("click", function() {

//         redSquare.style.height = "100px"
//         redSquare.style.width = "100px"
//         redSquare.style.backgroundColor = "green"
//     })


//-----2-----//Создать кнопку и розовый квадрат с размерами 200х200px.
 //При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.


// const button = document.querySelector(".btn") 
// const pinkSquare = document.querySelector(".square")


// button.addEventListener("click", function () {
//     pinkSquare.style.backgroundColor = "blue"
//     console.log(`Новый цвет квадрата: ${pinkSquare.style.backgroundColor}`);
// })



//-----3-----//Создать кнопку и квадрат с размерами 150х150px.
// При клике на кнопку увеличивать высоту и ширину квадрата на 20px.


// const button = document.querySelector(".btn")
// const increaseSquare = document.querySelector(".square")

// button.addEventListener("click", function () {
//     increaseSquare.style.height = "170px"
//     increaseSquare.style.width = "170px"
//})

//-----4-----//Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета.
// Текст параграфа произвольный.

// const button = document.querySelector("#btn")
// const root = document.querySelector(".root")



// button.addEventListener("click", function () {
//     root.innerHTML += `<div class="root">
//                                 <p>Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
//                                 </p>
//                             </div>`
//     root.style.color = "blue"
// })

//-----5-----//Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди 
//параграфы синего и зеленого цветов. Первый цвет синий.

const myButton = document.querySelector(".btn")
const textsRoot = document.querySelector(".root")

myButton.addEventListener("click", function () {
    textsRoot.innerHTML *= `<div class="root"
                                <p id="blue">Today is the six hundred and twenty-third day since the show began</p>
                            </div>`
    textsRoot.innerHTML *= `<div class="root"
                                <p id="green">Today is the six hundred and twenty-third day since the show began</p>
                            </div>`
    textsRoot.style.color = "blue"
    textsRoot.style.color = "green"
})
