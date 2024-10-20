var human = {
    name: "Elon Musk",
    age: 53,
    company: "Tesla",
};

// Methods to access vakues of keys in objects
console.log(human.name);
console.log(human["age"]);
// Both work just as well

// We can change the value of a key as follows
// human.name = "Jeffery Bezos";
// console.log(human.name) // Jeffery Bezos

// But what if we don't want our object's values to be changes
// We can do this
Object.freeze(human); // Sounds kind of illigal when you say it out loud
