// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers.sort(function(a, b){return b - a})

console.log("decending", integers)

// Remove any integers greater than 19.

const newArray = integers.sort(function(a, b){return b - a}).filter(function (number){return number <= 19})


console.log("less than 19", newArray)

// Multiply each remaining number by 1.5 and then subtract 1.

const newerArray = integers.sort(function(a, b){return b - a}).filter(function (number){return number <= 19}).map(function (number1){return number1 * 1.5 - 1})

console.log("multiply by 1.5", newerArray)

// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const newestArray = integers.sort(function(a, b){return b - a}).filter(function (number){return number <= 19}).map(function (number1){return number1 * 1.5 - 1}).reduce(function (number2, next){return number2 + next})

console.log("add them up", newestArray)