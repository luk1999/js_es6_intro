// Spread operator

// Spread operator for arrays
const arrayOrg = [1, 2, 3];

const arrayRef = arrayOrg;  // Array is mutable, so arrayRef is just a reference
arrayRef.push("xyz");
arrayOrg;  // [1, 2, 3, "xyz"]

const arrayCopy = [...arrayOrg];  // Create shallow copy of an array
const [first, second] = arrayOrg;  // Extract 2 first items

const anotherArray = [-100, ...arrayOrg, 100];  // [-100, 1, 2, 3, 100]
const someArray = [1, 2, 3];
someArray.push(...["a", "b"]);  // [1, 2, 3, "a", "b"]
someArray.unshift(...["c", "d"]);  // ["c", "d", 1, 2, 3, "a", "b"]

// Spread operator for objects
const objectOrg = {firstName: "John", lastName: "Kovalsky"};
const objectRef = objectOrg;  // Obj is mutable, so objectRef is just a reference
objectRef.age = 33;
objectOrg;  // {firstName: "John", lastName: "Kovalsky", age: 33}

const objectCopy = {...objectOrg};  // Create shallow copy of an object
const { 
    firstName,  // Extract first name to firstName variable
    lastName: surname,  // Extract last name to surname variable
    // Extract age to variable and set it to "unknown" if missing in object
    age = "unknown",
} = objectOrg;

const newObject = { firstName, surname, age };
const anotherNewObject = {...objectOrg, gender: "male"};

// Spread operator for functions
function add(...numbers) {
    let sum = 0;
    numbers.forEach(val => sum += val);
    return sum;
};

add();  // 0
add(1);  // 1
add(1, 2, 3);  // 6

// Object as argument
function getPerson({ firstName, lastName, age = "unknown", ...other }) {
    return { firstName, lastName, age, ...other };
}

const john = getPerson({ firstName: "John", lastName: "Kovalsky", age: 33 });
console.log(`Name: ${john.firstName} ${john.lastName}`);
console.log(`Age: ${john.age}`);  // 33
console.log(`Gender: ${john.gender}`);  // undefined

const george = getPerson({ 
    firstName: "George", 
    lastName: "Testovsky", 
    gender: "male"
});
console.log(`Name: ${george.firstName} ${george.lastName}`);
console.log(`Age: ${george.age}`);  // unknown
console.log(`Gender: ${george.gender}`);  // male

// Classes
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo() {
        return `Name: ${this.getName()}\nAge: ${this.age}`;
    }

    getName = () => `${this.firstName} ${this.lastName}`;
}

const johnPerson = new Person("John", "Kovalsky", 33);
johnPerson.firstName;  // John
johnPerson.getInfo();  // Name: John Kovalsky\nAge: 33

// Inheritance
class User extends Person {
    constructor(firstName, lastName, age, username, email) {
        super(firstName, lastName, age);
        this.username = username;
        this.email = email;
    }

    getInfo() {
        return `${super.getInfo()}\nUsername: ${this.username}\nEmail: ${this.email}`;
    }
}

const johnUser = new User("John", "Kovalsky", 33, "john_kovalsky", "john_kovalsky@gmail.com");
johnUser.getInfo();  // Name: John Kovalsky\nAge: 33\Username: ...\nEmail: ...

// Promises
new Promise((resolve, reject) => {
    // Do something
    if (success) {
        resolve("OK");
    } else {
        reject("ERROR");
    }
});

// Promise example
const getRandomInt = (maxValue) => Math.floor(Math.random() * maxValue) + 1;

const getPromise = () => new Promise((resolve, reject) => {
    console.log("Awaiting 2 seconds...");

    const execute = () => {
        if (getRandomInt(2) === 1) {  // 1 - Resolve or 2 - Reject
            resolve("Got 1");
        } else {
            reject("Got 2");
        }
    }

    setTimeout(execute, 2000);
});

getPromise().then(
    (success) => console.log(`OK: ${success}`), 
    (error) => console.error(`ERROR: ${error}`)
);

(async () => {
    try {
        const success = await getPromise();
        console.log(`OK: ${success}`);
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }
})();

const getPromise1 = () => new Promise((resolve) => resolve("abc"));
const getPromise2 = () => new Promise((resolve) => resolve("cde"));

(async () => {
    try {
        const [first, last] = await Promise.all([getPromise1(), getPromise2()]);
        console.log(`OK: both passed and returned: ${first}, ${last}`);
    } catch (error) {
        console.error(`ERROR: one or both failed`);
    }
})();
//OK: both passed and returned: abc, cde
