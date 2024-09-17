
// If conditions
if (1 == "1") {
    console.log("equals"); 
};
// equals

if (1 === "1") {
    console.log("equals"); 
}
// <nothing>

if (1 !== "1") {
    console.log("does not equal"); 
}
// does not equal

if (1 != "1") {
    console.log("does not equal"); 
}
// <nothing>

// Greater or lower
if (3 > 3) { console.log("greater"); };  // <nothing>
if (3 >= 3) { console.log("greater or eq"); };  // greater or eq
if (3 < 3) { console.log("lower"); };  // <nothing>
if (3 <= 3) { console.log("lower or eq"); };  // lower or eq

if ((1 == 1) && (3 > 1)) { console.log("both"); }  // both - AND
if ((1 == 1) || (1 > 3)) { console.log("first"); }  // both - BOTH

// Other
!true;  // false
!false;  // true
!1;  // false
!0;  // true

console.log((1 === 1) ? "equals" : "does not equal");  // equals
// Same as: if (1 === 1) { console.log("equals"); } else { console.log("equals"); }

// Switch
let value = 1;

switch (value) {
    case 1: console.log("Executing script!"); break;
    case 2: console.log("Executing db backup!"); break;
    default: console.log("I don't know what to do!"); break;
}

// Same as:
if (value === 1) {
    console.log("Executing script!");
} else if (value === 2) {
    console.log("Executing db backup!")
} else {
    console.log("I don't know what to do!");
}

// Loops

// While
let i = 0;
while (i < 5) {
    i++;
    console.log(i);
}
// 1, 2, 3, 4, 5

let i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);
// 1, 2, 3, 4, 5

// For loops
const items = ["a", "b", "c", "d"];

for (let i = 0; i < items.length; i++) {
    if (items[i] === "c") {
        continue;
    }
    console.log(items[i]);
}
// a, b, d

for (let item of items) {
    if (item === "c") {
        continue;
    }
    console.log(item);
}
// a, b, d

// Array forEach
const items = ["a", "b", "c", "d"];

items.forEach(item => {
    if (item === "c") {
        return;
    }
    console.log(item);
});
// a, b, d

// Loop over Object
const person = {firstName: "John", lastName: "Kovalsky", age: 33};

for (let key in person) {
    console.log(`${key} -> ${person[key]}`);
}
// firstName -> John, lastName -> Kovalsky, age -> 33 (Possible problems with complex objects)

Object.keys(person).forEach(key => console.log(key));
// firstName, lastName, age

Object.values(person).forEach(value => console.log(value));
// John, Kovalsky, 33

Object.entries(person).forEach(entry => console.log(entry[0] + "=" + entry[1]));
// firstName=John, lastName=Kovalsky, age=33
