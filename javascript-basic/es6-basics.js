// Concept 1
const pi = 3.14159; // kabhi change nahi hogi
let counter = 0; // loop mein badhega
const user = "Zain"; // fix rahega
let score = 100; // game mein change hoga

// Concept 2: Arrow Functions
function add(a, b) {
  return a + b;
}

// modern way
const add = (a, b) => {
  return a + b;
};

// shortcut
const square = (a, b) => a + b;

const number = (n) => n * 3;
const num = (n) => n * 3;

const greet = () => "Hello Zain";

const multiple = (a, b) => {
  return a + b;
};

const double = (n) => n * 2;

const isPositive = (num) => num > 0;

console.log(multiple(16, 40));
console.log(double(13));
console.log(isPositive(49));

const userName = "Zain";
const role = "Developer";
const company = "Digisfly";

console.log(`${userName} works as a ${role} at ${company}`);

const price = 1000;
const discount = 20; // percent

console.log(`Final price after 20% discount: ${price - (price * discount) / 100}`);
