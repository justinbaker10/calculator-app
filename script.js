const clickClear = document.querySelector('#clear')
const clickOne = document.querySelector('#one')
const clickTwo = document.querySelector('#two')
const clickThree = document.querySelector('#three')
const clickFour = document.querySelector('#four')
const clickFive = document.querySelector('#five')
const clickSix = document.querySelector('#six')
const clickSeven = document.querySelector('#seven')
const clickEight = document.querySelector('#eight')
const clickNine = document.querySelector('#nine')
const clickZero = document.querySelector('#zero')
const clickDecimal = document.querySelector('#decimal')
const clickDelete = document.querySelector('#delete')
const clickDivide = document.querySelector('#divide')
const clickMultiply = document.querySelector('#multiply')
const clickAdd = document.querySelector('#addition')
const clickSubtract = document.querySelector('#subtract')
const clickEquals = document.querySelector('#equals')
const current = document.querySelector('#current')
const previous = document.querySelector('#previous')
const aquaSplash = document.querySelector('#aqua-splash')
const warmFlame = document.querySelector('#warm-flame')
const flyHigh = document.querySelector('#fly-high')
const plumPlate = document.querySelector('#plum-plate')
const mountainRock = document.querySelector('#mountain-rock')

let total = '';

clickClear.addEventListener('click', function() {
    current.innerHTML = ''
    previous.innerHTML = ''
})

clickOne.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickOne.innerHTML
})

clickTwo.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickTwo.innerHTML
})

clickThree.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickThree.innerHTML
})

clickFour.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickFour.innerHTML
})

clickFive.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickFive.innerHTML
})

clickSix.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickSix.innerHTML
})

clickSeven.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickSeven.innerHTML
})

clickEight.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickEight.innerHTML
})

clickNine.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickNine.innerHTML
})

clickZero.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickZero.innerHTML
})

clickDecimal.addEventListener('click', function() {
    current.innerHTML = current.innerHTML + clickDecimal.innerHTML
})

clickDivide.addEventListener('click', function() {
    previous.innerHTML = current.innerHTML + clickDivide.innerHTML
    current.innerHTML = ''
})

clickMultiply.addEventListener('click', function() {
    previous.innerHTML = current.innerHTML + clickMultiply.innerHTML
    current.innerHTML = ''
})

clickAdd.addEventListener('click', function() {
    previous.innerHTML = current.innerHTML + clickAdd.innerHTML
    current.innerHTML = ''
})

clickSubtract.addEventListener('click', function() {
    previous.innerHTML = current.innerHTML + clickSubtract.innerHTML
    current.innerHTML = ''
})

clickEquals.addEventListener('click', function() {
    let newEquation = parseInt(previous.innerHTML + current.innerHTML)
})

aquaSplash.addEventListener('click', function() {
    document.getElementById('body').style.background = 'linear-gradient(to right, #13547a, #80d0c7)'
})

warmFlame.addEventListener('click', function() {
    document.getElementById('body').style.background = 'linear-gradient(to right, #ff9a9e, #fad0c4)'
})

flyHigh.addEventListener('click', function() {
    document.getElementById('body').style.background = 'linear-gradient(to right, #48c6ef, #6f86d6)'
})

plumPlate.addEventListener('click', function() {
    document.getElementById('body').style.background = 'linear-gradient(to right, #667eea, #764ba2)'
})

mountainRock.addEventListener('click', function() {
    document.getElementById('body').style.background = 'linear-gradient(to right, #868f96, #596164)'
})