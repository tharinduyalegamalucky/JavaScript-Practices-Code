let age = 30;
console.log(age);

let score;
score = 10;
console.log(score);

//String , Numbers, Boolean, null, undefined

const name = 'John';
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Concatenation
console.log('My name ' +name + 'and I am ' + age);
//Template String
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = 'Hello World';

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));


const y = 'technology, computers, it, code';

console.log(y.split(''));
