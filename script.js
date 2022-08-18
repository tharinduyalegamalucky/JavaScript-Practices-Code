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


//For
for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let x = 0; x <= 10; x++){
    console.log(x);
}

for (let i =0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

//While Loop
let i = 0;
while(i <10){
    console.log(`While Loop Number: ${i}`);
    i++;
}


for(let y = 0; y < todos.length; y++) {
    console.log(y);
}

for(let y = 0; y < todos.length; y++) {
    console.log(todos[y].text);
}

for(let todo of todos) {
    console.log(todo.id);
}

//forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
});

todos.map(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });

// console.log(todoCompleted);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

const z = 4;

if(z === 10){
    console.log('z is 10');
} else if(x > 10) {
    console.log('z is greater than 10');
} else {
    console.log('z is less than 10');
}

const w = 4;
const c = 11;

if(w > 5 || c > 10 ){
    console.log('w is more than 5 or c is more than 10');
}

const a = 6;
const d = 11;

if(a > 5 && d > 10) {
    console.log('a is more than 5 or d is more than 10');
}


// ------BMI Comparison-------

var mass, height, bmik, bmic, isKasun;

// Kasun's BMI
mass = prompt("Kasun's mass : ");
height = prompt("Kasun's height : ");
bmik = mass / (height * height);

//Chamar's BMI
mass = prompt("Chamara's mass : ");
height = prompt("Chamara's height : ");
bmic = mass / (height * height);

// //boolean
isKasun = (bmik > bmic);

alert(isKasun);


// If Else----------
// -----------------

var a = 10;
var b = 20;

if(a > b){
    console.log("a is greater than b");
}
else if(a < b){
    console.log("a less than b");
}
else{
    console.log("a is less than or equal to b");
}

if(a == 10){
    console.log("a is equal to 10");
}


// --------------------------------------
// ---------Comparison Operators---------
// --------------------------------------

var a = 20;
var b = '20';
var c = 5;
var d = 15;

//Equal to
if(a === b){
    // Equal value and equal type
    if(a === b){
        console.log('Both value and type of a is equal to b');
    }
    // Not Equal value or not equal type
    else if(a !== b){
        console.log('Only value or type of a is equal to b');
    }
}

// Greater than oe equal
else if(a == 10){
    // greater than
    if(a > 10){
        console.log('a is greater than 10')
    }
    //equal to
    else if(a == 10){
        console.log('a is equal to 10');
    }
}

// Not equal
else if(a == c){
    // Less than
    if(a < c){ 
        console.log('a is less than c');
    }
    else{
        console.log('a is greater than c');
    }
}

else {
    // less than or equal to
    if(c <= d){
        // if(c <= 5){
        //     console.log('c is less than or equal to 5');
        // }
        // else{
        //     console.log('c is greater than to 5');
        // }

        //  Ternary Operator
        c <= 5 ? console.log('c is less than or equal to 5')  : 
        console.log('c is greater than to 5');
    }
}
