//default perameters
const add = (number, value = 1) => {
  return number += value;
}

console.log(add(5));
console.log(add(6, 7));

//rest perameter
function howMany(...args) {
  console.log(...args);
  return "You have passed " + args.length + " arguments.";

}
console.log(howMany(1, 2, 3));
console.log(howMany("string", null, [1, 2, 3, 4], {}));

//spread operator
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);
console.log(...arr);


//destructuring

const user = {
  person: 'John Doe',
  age: 34
};

//const name = user.name;
//const age = user.age;


const {
  person,
  age
} = user;
console.log(person);
console.log(age);