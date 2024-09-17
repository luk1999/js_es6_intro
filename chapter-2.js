
// Functions
function getTrue() {
    return true;
}

getTrue();  // true

const getFalse = function () {
    return false;
}
getFalse();  // false

// Arrow functions
const getNull = () => {
    return null;
};
getNull();  // null

const getNullOneliner = () => null;
getNullOneliner();  // null

const getArray = () => [1, 2, 3];
getArray();  // [1, 2, 3]

const lastName = "Kovalsky";
const getObj = () => ({ firstName: "John", lastName });  // () are important!
getObj();  // {firstName: "John", lastName: "Kovalsky"}

// Anonymous functions
function sayHello() {
    console.log("Hello!");
}
sayHello();

const sayHi = () => console.log("Hi!");
sayHi();

// Anonymous function called after creation
(
    function () {
        console.log("Hello!");
    }
)();

(() => console.log("Hi!"))();

// Function arguments
function addTwoNumbers(n1, n2) {
    return n1 + n2;
}
addTwoNumbers(1, 2);  // 3

function addTwoOrThreeNumbers(n1, n2, n3 = 0) {
    return n1 + n2 + n3;
}
addTwoOrThreeNumbers(1, 2);  // 3
addTwoOrThreeNumbers(1, 2, 3);  // 6

const add = (n1, n2) => n1 + n2;
add(5, 7);  // 12

// Array methods: map, filter, find, reduce
const people = [{id: 1, name: "John", age: 20}, {id: 2, name: "Anne", age: 25}, {id: 3, name: "Steven", age: 30}];

// map
people.map(i => i.id); // [1, 2, 3]
people.map(i => i.name); // ["John", "Anne", "Steven"]

// filter
people.filter(i => i.id <= 2); // [{id: 1, name: "John", age: 20}, {id: 2, name: "Anne", age: 25}]

// find
people.find(i => i.id == 2); // {id: 2, name: "Anne", age: 25}
people.find(i => i.id == 10); // undefined

// reduce
people.reduce((acc, i) => acc + i.age, 0); // 75

// Variables scope
let n1 = 1; 
let n2 = 2; 
let n3 = 3; 
let n4 = 4;

function addNumbers(n1, n2) {
    return n1 + n2 + n3 + n4;
}
addNumbers(10, 20);  // 37
addNumbers(10);  // NaN
