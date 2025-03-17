// Imperative example

const numbers = [1, 2, 3, 4, 5]
const doubled = []

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled);

// Declarative example

const numbersDeclarative = [1, 2, 3, 4, 5]
const doubledDeclarative = numbersDeclarative.map(number => number * 2)

console.log(doubledDeclarative);