let age = 25;
let year = 2020;
// log things to comments
console.log(age, year);

age = 30;
console.log(age);

let points = 100;
console.log(points);
if (points = 50) {
    console.log(true);
} else {
    console.log(false);
}

var score = 75;
console.log(score);
console.log("");





console.log('test 123');

let email = 'jamesnel.exe@gmail.com'
console.log(email);

let firstName = 'james';
let space = ' ';
let lastName = 'nelson';

let fullName = firstName + space + lastName;
console.log(fullName);

console.log(fullName[0]);

console.log(fullName.length);

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);
console.log("");




let email1 = 'jamesnel.exe@gmail.com';

let result1 = email1.lastIndexOf('n');

let result2 = email1.slice(0, 5);

let result3 = email1.substr(4, 10);

let result4 = email1.replace('m', 'w');

let result5 = email1.replace('n', 'w')

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log("");

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10 / 2);
let result11 = radius % 3;
console.log(result11);

let result22 = pi * radius ** 2;
console.log(result22);

// order of operations - P E D M A S

let result33 = 5 * (10 - 3) ** 2;
console.log(result33);

let likes = 10;

likes = likes + 1
likes++;
likes--;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;

console.log(likes);

// NaN - not a number

console.log(5 / 'hello');
console.log(5 * 'hello');

let result44 = 'the blog has ' + likes + ' likes';
console.log(result44);
console.log("");




const title = 'Best reads of 2020';
const author = 'Mario';
const likes1 = 30;

let result12 = 'The blog called ' + title + ' by ' + author + ' has ' + likes1 + ' likes';
console.log(result12);

//template string way
let result23 = `The blog called ${title} by ${author} has ${likes1} likes`;
console.log(result23);

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes1} likes</span>
`;

console.log(html);
console.log("");




let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas);
console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 25];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

//array methods

let resultA = ninjas.join(', ');
console.log(resultA);

let result2A = ninjas.indexOf('chun-li');
console.log(result2A);

let result3A = ninjas.concat(['ken', 'crystal']);
console.log(ninjas);

let result4A = ninjas.push('ken');
console.log(ninjas);

let result5A = ninjas.pop();
console.log(result5A);
console.log("");




let age1;

console.log(age1, age1 + 3, `the age is ${age1}`);

let age2 = null;

console.log(age2, age2 + 3, `the age is ${age2}`);
console.log("");




console.log(true, false, 'true', 'false');

let emaill = 'jamesnel.exe@gmail.com';
let namess = ['mario', 'luigi', 'toad'];

let resultt = emaill.includes('@');
console.log(resultt);

let resultt2 = emaill.includes('!');
console.log(resultt2);

let resultt3 = namess.includes('luigi');
console.log(resultt3);

let resultt4 = namess.includes('bowser');
console.log(resultt4);

console.log('');

//comparison operators
let agee = 25;
console.log(agee == 25);
console.log(agee == 30);
console.log(agee != 30);
console.log(agee > 20);
console.log(agee < 20);
console.log(agee <= 25);
console.log(agee >= 25);

console.log('');

let tester = 'shaun';
console.log(tester == 'shaun');
console.log(tester == 'Shaun');
console.log(tester > 'crystal');
console.log(tester > 'Shaun');
console.log(tester > 'Crystal');
console.log("");




let aage = 25;

//loose comparison(different types can still be equal)

console.log(aage == 25);
console.log(aage == '25');
console.log(aage != 25);
console.log(aage != '25');

console.log('');

//strict comparison(different types cannot be equal)

console.log(aage === 25);
console.log(aage === '25');
console.log(aage !== 25);
console.log(aage !== '25');
console.log("");




//type conversion
let sscore = '100';
console.log(sscore + 1);

sscore = Number(sscore);
console.log(sscore + 1);

console.log(typeof sscore);

console.log('');

let rresult = Number('hello');
console.log(rresult);

let rresult2 = String(50);
console.log(rresult2, typeof rresult2);

let rresult3 = Boolean(100);
console.log(rresult3, typeof rresult3);

let rresult4 = Boolean(0);
console.log(rresult4, typeof rresult4);

let rresult5 = Boolean('0');
console.log(rresult5, typeof rresult5);

let rresult6 = Boolean('');
console.log(rresult6, typeof rresult6);