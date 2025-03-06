const x = 3;

console.log(x);

/*
const greet = functions () {
    return 'Hello, world!'
}

const greet = () =? {
    return 'Hello, world!'
}
*/

/*
function calculateOrderCost(order) {
    return order.quantity * order.priceEa
}

const calcOrderCost = (order) => {
    return order.quantity * order.priceEa
}
*/

function greet(name) {
    return 'Hello, ${name}!'
}

console.log(greet('John'))

function double(num) {
    return num * 2
}

console.log(double(3))

function doSomethingWithNumber(number, callbackFunction) {
    return callbackFunction(number)
}

function divideByTwo(num) {
    return num / 2
}

function double(num) {
    return num * 2
}

function triple(num) {
    return num * 3
}

doSomethingWithNumber(42, double)
doSomethingWithNumber(42, triple)
doSomethingWithNumber(42, divideByTwo)

// using an imperative loop
/*
const numbers = [1, 2, 3, 4, 5]
const doubleNumbers = []

for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2)
}

console.log(doubleNumbers)
*/

// using the map method

const numbers = [1, 2, 3, 4, 5]
const doubleNumbers = numbers.map(number => number * 2)

console.log(doubleNumbers)

const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5 },
    { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
    { item: 'rockets', quantity: 1, priceEa: 5.0 },
    { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
]

function calculateOrderCost(order) {
    return order.quantity * order.priceEa
}

const totalValue = backpackFullOfAmmo.map((ammo) => {
    console.log(ammo)
})

console.log(totalValue)