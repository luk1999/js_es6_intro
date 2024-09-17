// Logging
console.log("Some message");
console.info("Some message");
// Shows message

console.warn("Some warning");
// Shows yellow message

console.error("Some error");
// Shows red message

console.debug("Some debug message");  
// Doesn't show message by default

// Create variables
var x = 1;  // ES5
let y = "a";  // ES6
const z = 3.0;  // ES6
q = 1;

x = 4;
y = "b";
z = 6.0;  // fails

var a, b;
let c, d;
const e, f;  // fails
let g = 1, h = 2;
const i = 1, j = 2;

// Strings
const firstName = 'John';
const lastName = "Kovalsky";
const middleName = `George`;

firstName + " " + middleName + " " + lastName;  // John George Kovalsky
"abc=" + 123;  // abc=123
`${firstName} ${middleName} ${lastName}`;  // John George Kovalsky

`${firstName} ${middleName} ${lastName}`.split(" ");  // ["John", "George", "Kovalsky"]

firstName[0];  // J
lastName.slice(0, 5);  // Koval
middleName.slice(2);  // orge

firstName.toLowerCase();  // john
firstName.toLocaleLowerCase();  // john
firstName.toUpperCase();  // john
firstName.toLocaleUpperCase();  // john

// Numbers
1 + 2;
2 - 1;
2 * 3;
5 / 2;  // Float div -> 2.5
Math.floor(5/2);  // Int div -> 2
5 % 2;  // Modulo -> 1
Math.pow(2, 4);  // Pow 2^4 -> 16

// Increment / decrement
let n = 0;
let f = 1.0;

n += 5;  // n = n + 5
n++;  // n = n + 1
f += 5;  // f = f + 5
f++;  // f = f + 1

n -= 5;  // n = n - 5
n--;  // n = n - 1
f -= 5;  // f = f - 5
f--;  // f = f - 1

// Conversions
parseInt("1");  // 1
parseFloat("1.0");  // 1.0
!!parseInt(1);  // true

parseInt("abc");  // NaN

String(1);  // "1"
(1).toString();  // "1"
"" + 1;  // "1"

!!null;  // false
!!undefined;  // false

// Arrays
const array = [0, 1, 2, 3, 4];  // Or: const array = new Array(0, 1, 2, 3, 4);
array.length;  // 5

array[0];  // First item: 0
array[array.length - 1];  // Last item: 4
array[111];  // undefined

array.push(5);  // Add at the end: [0, 1, 2, 3, 4, 5]
array.unshift(-1);  // Add at the beginning: [-1, 0, 1, 2, 3, 4, 5]

delete array[3];  // [-1, 0, 1, empty, 3, 4, 5]
array.splice(3, 1);  // [-1, 0, 1, 3, 4, 5]
array.shift();  // Remove and return first element: -1
array.pop();  // Remove and return last element: 5
array.reverse();  // Reverse order in place: [4, 3, 1, 0]

// Objects
const person = {firstName: "John", lastName: "Kovalsky", "eye-colour": "blue"};
// Or: const person = new Object(); person.firstName = "John";

person.firstName;  // John
person["lastName"];  // Kovalsky
person.age = 33;
person["gender"] = "male";

person.getName = function () {
    return this.firstName + " " + this.lastName;
};
person.getName();

delete person.lastName;  // {firstName: "John", age: 33, gender: "male"}
delete person.getName;
