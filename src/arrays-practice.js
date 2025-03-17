// Imperative example

/* 
const numbers = [1, 2, 3, 4, 5]
const doubled = []

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled);
*/

// Declarative example

const numbersDeclarative = [1, 2, 3, 4, 5]
const doubledDeclarative = numbersDeclarative.map(number => number * 2)

console.log(doubledDeclarative);

// Filter method example

/*
const numbers = [1, 2, 3, 4, 5]
const oddNumbers = numbers.filter((number) => number % 2)

console.log(oddNumbers)
*/

const players = [
    { name: 'DoomGuy', frags: 25, deaths: 0 },
    { name: 'Slayer', frags: 25, deaths: 1 },
    { name: 'Marine', frags: 12, deaths: 15 },
    { name: 'Noob', frags: 0, deaths: 25 },
]


const playersWithMoreFragsThanDeaths = players.filter((player) => {
    // Additional `console.log` for clarity.
    console.log(`We are now looking at this player: ${player.name}`)

    return player.frags > player.deaths
})

console.log(playersWithMoreFragsThanDeaths)

// We can shorten that filter with implicit return:
const playersWMFTD = players.filter((player) => player.frags > player.deaths)

console.log(playersWMFTD)

// Reduce method example

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current value: ${currentValue}`)

    return accumulator + currentValue
}, 0)

console.log(sum)

const totalFrags = players.reduce((total, player) => {
    return total + player.frags
}, 0)
console.log(totalFrags)

// Again, we can shorten that with implicit return:
const totalFragsImplicit = players.reduce((total, player) => total + player.frags, 0)

console.log(totalFragsImplicit)

// Find method example

const firstOddNumber = numbers.find((number) => number % 2)

console.log(firstOddNumber)

const firstPlayerWithMoreFragsThanDeaths = players.find((player) => player.frags > player.deaths)

console.log(firstPlayerWithMoreFragsThanDeaths)

// Some method example

const hasOddNumber = numbers.some((number) => number % 2)

console.log(hasOddNumber)

const hasFrags = players.some((player) => player.frags)

console.log(hasFrags)

// Every method example

const allNumbersAreOdd = numbers.every((number) => number % 2)

console.log(allNumbersAreOdd) 

const allPlayersHaveMoreFragsThanDeaths = players.every((player) => player.frags > player.deaths)

console.log(allPlayersHaveMoreFragsThanDeaths)

// Sort method example

const sortedNumbers = numbers.sort((a, b) => a - b)
console.log(sortedNumbers)

const numbersSort = [5, 3, 8, 1, 2]

const sortedNumbersSort = numbersSort.sort((a, b) => {
    console.log(`Now comparing a: ${a}, b: ${b}`)

    return a - b
})

console.log(sortedNumbersSort)

const sortedPlayers = players.sort((a, b) => b.frags - a.frags)

console.log(sortedPlayers)