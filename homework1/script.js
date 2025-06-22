
let person1 = { name: "Alice", age: 25 };


let person2 = JSON.parse(JSON.stringify(person1));
person2.favoriteColor = "blue";


console.log("Original:", person1);
console.log("Copy:", person2);

/*
6. When should you use an object?
 Use an object when you need to store **related data in key-value format**.
Example: information about a person, product, user, etc.

7. When should you use an array?
 Use an array when you need to store **an ordered list of elements**, such as a list of names, numbers, tasks, etc.
*/

function introduce(name, favoriteHobby) {
    console.log(`My name is ${name} and my favorite hobby is ${favoriteHobby}`);
}

introduce("Alice", "painting");

/*
 JS:
1. string — "Hello"
2. number — 42
3. boolean — true / false
4. null — null
5. undefined — undefined
6. bigint — 123n
7. symbol — Symbol("id")
*/
