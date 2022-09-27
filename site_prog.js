let body = document.querySelector('body')
let button = document.querySelector('#button')
let text = document.querySelector('#dev')
let list1 = ['Баитов Иван', 'Баркалов Роман', 'Воробьёв Никита', 'Гарстуков Никита', 'Збутевич Элина', 'Кириченко Кирилл', 'Константинов Григорий', 'Окс Елизавета', 'Корошавин Александр', 'Нмбуренко Александр', 'Нмбуренко Дарья']
button.addEventListener('click', ClickEVent)

function ClickEVent() {
    let texted = prompt('Введите цифру в списке для выбора класса: 1 - 7Б')
    let x = 0
    if (texted == 1) {
       x = Math.round(Math.random() * 11)
       alert(list1[x])
    }
    
}