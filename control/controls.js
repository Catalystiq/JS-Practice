// for loops

for (let i = 0; i < 5; i++) {
    console.log('in loop', i);
}

console.log('loop finished');

console.log('');

const newNames = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < newNames.length; i++) {
    console.log(newNames[i]);
}

console.log('');
const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
console.log("");




//while loops

for (let i = 0; i < 5; i++) {
    console.log('in loop: ', i);
}

console.log('');


const names1 = ['shaun', 'mario', 'luigi'];
let i = 0;
while (i < 5) {
    console.log('in loop: ', i);
    i++;
}

console.log('');

let x = 0;
while (x < names1.length) {
    console.log(names1[x])
    x++;
}
console.log("");




//do while loops

let j = 0;
while (j < 5) {
    console.log('val of j is: ', j);
    j++;
}

console.log('');

let n = 5;
do {
    console.log('val of n is: ', n);
    n++;
} while (n < 5);
console.log("");





//if statements

const age = 25;

if (age > 20) {
    console.log('you are over 20 years old');
}

console.log('');

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

console.log('');

const password = 'password';

if (password.length >= 8) {
    console.log('that password is long enough')
}
console.log("");




//else if statements

const password1 = 'p@ss';

if (password1.length >= 12) {
    console.log('that password is mighty strong');
} else if (password1.length >= 8) {
    console.log('that password is long enough!');
} else {
    console.log('that password is not long enough');
}
console.log("");




//logical operators - OR || and AND &&

const password2 = 'p@ss12';

if (password2.length >= 12 && password2.includes('@')) {
    console.log('that password is mighty strong');
} else if (password2.length >= 8 || password2.includes('@') && password2.length >= 5) {
    console.log('that password is strong enough!');
} else {
    console.log('that password is not strong enough');
}
console.log("");




//logical NOT (!)

let user = false;

if (!user) {
    console.log('you must be logged in to continue');
}

console.log('');

console.log(!true);
console.log(!false);
console.log("");




// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue;
    }

    console.log('your scores: ', scores[i]);

    if (scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}
console.log("");





//switch statements
const grade = 'D';

switch (grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}








/* //using if statements
if(grade === 'A'){

}else if(grade === 'B'){

}else if(grade === 'C'){

}else if(grade === 'D'){

}else if(grade === 'E'){

}else{

} */
console.log("");




//variables & block scope
const age1 = 30;

if (true) {
    const age1 = 40;
    const names = 'shaun';
    console.log('inside 1st code block: ', age1, names);

    if (true) {
        const age1 = 50;
        console.log('inside 2nd code block: ', age1)
        var test = 'hello';
    }
}

console.log('outside code block: ', age1, names, test);