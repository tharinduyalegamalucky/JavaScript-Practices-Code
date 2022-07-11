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


const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits =['apples', 'oranges', 'pears',10];


fruits[3] ='grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));
console.log(fruits);
console.log(fruits[1]);


const person= {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    hobbies: ['music', 'movies', 'sports'],
    address : {
        street : '50 main st',
        city : 'Boston',
        state : 'MA'
    }
}

console.log(person.hobbies[1]);
console.log(person.address);
const {firstName, lastName, address : {city} }= person;

console.log(city);

person.email = 'john@gmail.com';

console.log(person);



const todos =[
        { 
        id : 1,
        text : 'Text our trash',
        isCompleted : true
    },

    { 
        id : 2,
        text : 'Meeting with boss',
        isCompleted : true
    },

    { 
        id : 3,
        text : 'Dentist appt',
        isCompleted : false
    }
];

console.log(todos[1].text);
console.log(todos[2].id);
console.log(todos[0].isCompleted);

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

