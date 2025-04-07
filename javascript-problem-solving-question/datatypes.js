// Primitive datatype
// 7 types: string, number, boolean, null, BigInt, 

const scores = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); 

const heroes = ["dnlnlww", "dsvkjbvv", "dsvjvvekn"];

let myObj = {
    name: "Arijit",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Berlin"
    }
}

const myFunction = function(){
    console.log("Hello");
}
console.log(typeof myFunction);


// Refference types(Non Primitive)

// Array, Object, Functions

// ===================================

// stack (primitive) , Heap (Non-primitive)

let myYoutubename = "Arijit";
let anothername = "myyoutubename";

anothername = "ArijitYoutube";

console.log(myYoutubename); 
console.log(anothername);

let userOne = {
    email : "user@example.com",
    upi: "arijit@now"

}
let userTwo = userOne
userTwo.email = "user2@example.com"
console.log(userOne.email);
console.log(userTwo.email);