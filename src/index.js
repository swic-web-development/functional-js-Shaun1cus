const x = 3;

console.log(x);

const greet = functions () {
    return 'Hello, world!'
}

const greet = () =? {
    return 'Hello, world!'
}

function calculateOrderCost(order) {
    return order.quantity * order.priceEa
}

const calcOrderCost = (order) => {
    return order.quantity * order.priceEa
}

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