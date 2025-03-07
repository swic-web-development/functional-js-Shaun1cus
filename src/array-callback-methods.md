# Array Callback Methods in JavaScript

JavaScript provides several array methods that accept callback functions. One of the most commonly used ones is "filter()."

## `filter()`

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.


The example in the MDN Web Docs uses `filter()` to determine which words in an array are more than 6 letters long.
```javascript
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```
The `filter()` method returns a new array `word` containing only the words that are greater than 6 letters long.

Another example would be to use `filter()` to find the even numbers within an array.
```javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(number => number % 2 === 0);
console.log(even);
```

The `filter()` method returns a new array `even` containing only the even numbers from the `numbers` array.

These methods provide powerful ways to manipulate and iterate over arrays in JavaScript.