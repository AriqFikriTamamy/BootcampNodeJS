// Descriptive
// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function substract(a, b) {
//     return a - b;
// }

// function division(a, b) {
//     return a / b;
// }

// console.log("add: ", add(2, 3));
// console.log("multiply: ", multiply(2, 3));
// console.log("substract: ", substract(2, 3));
// console.log("division: ", division(2, 3));

// Expressive
// const add = function (a, b) {
//     return a + b;
// };
// const multiply = function (a, b) {
//     return a * b;
// };
// const substract = function (a, b) {
//     return a - b;
// };
// const division = function (a, b) {
//     return a / b;
// };
// console.log("add: ", add(2, 3));
// console.log("multiply: ", multiply(2, 3));
// console.log("substract: ", substract(2, 3));
// console.log("division: ", division(2, 3));

// Arrow Function
// const add = (a, b) => {
//     return a + b;
// };
// const multiply = (a, b) => {
//     return a * b;
// };
// const substract = (a, b) => {
//     return a - b;
// };
// const division = (a, b) => {
//     return a / b;
// };

// console.log("add: ", add(2, 3));
// console.log("multiply: ", multiply(2, 3));
// console.log("substract: ", substract(2, 3));
// console.log("division: ", division(2, 3));

// Default Parameter (ES6)
// const add = (a = 0, b = 0) => {
//     return a + b;
// };

// console.log("add with default parameter: ", add());
// console.log("add with custom parameter: ", add(5, 5));

function add(a, b) {
    return a + b;
}

const add = (a, b) => {
    return a + b;
};

console.log("add: ", add(2, 3));