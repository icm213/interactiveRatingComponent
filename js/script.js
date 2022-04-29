const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const submit = document.getElementById('submit')
const output = document.getElementById('output')

let rateValue = 0

function outputOne() {
    output.innerHTML = 1
    rateValue = 1
}
function outputTwo() {
    output.innerHTML = 2
    rateValue = 2
}
function outputThree() {
    output.innerHTML = 3
    rateValue = 3
}
function outputFour() {
    output.innerHTML = 4
    rateValue = 4
}
function outputFive() {
    output.innerHTML = 5
    rateValue = 5
}


function flipCondition() {
    if (rateValue > 0) {
        flipCard()
    } else {
        alert('Select Rate First')
    }
}

function flipCard() {
    document.getElementById('submitInit').classList.add('animationToUp')
    document.getElementById('submitResult').classList.add('animationToDown')
}

one.addEventListener('click', outputOne)
two.addEventListener('click', outputTwo)
three.addEventListener('click', outputThree)
four.addEventListener('click', outputFour)
five.addEventListener('click', outputFive)

submit.addEventListener('click', flipCondition)