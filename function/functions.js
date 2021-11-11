//function declaration
function greet() {
    console.log('hello there');
}

//function expression
const speak = function () {
    console.log('good day');
};


greet();
greet();
greet();

console.log('');

speak();
speak();
speak();
console.log("");




//arguments and parameters

const speak1 = function (name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};

speak1();
speak1('shaun', 'day');
console.log("");




//returning values

const speak2 = function (name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};


const calcArea = function (radius) {
    /* let area = 3.14 * radius**2;
    return area; */
    return 3.14 * radius ** 2;
};

const area = calcArea(5);
console.log(area);
console.log("");




//regular funciton
/* const calcArea = function(radius){
    return 3.14 * radius**2;
}; */

//arrow function
const calcArea1 = (radius) => 3.14 * radius ** 2;


const area1 = calcArea1(5);
console.log('area is: ', area1);

console.log('');

//practice arrow functions
/*  const greet = function(){
     return 'hello, world';
 } */

const greet1 = () => 'hello, world';

const result = greet1();
console.log(result);



console.log('');



/*  const bill = function(products, tax){
     let total = 0;
     for(let i = 0; i < products.length; i++){
         total += products[i] + products[i] * tax;
     }
     return total;
 } */


const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

/* console.log(bill([10, 15, 30], 0.2)) */

const todaysBill = bill([10, 15, 30], 0.2)
console.log(todaysBill);
console.log("");




const name1 = 'shaun';

//functions

const greet3 = () => 'hello';

let resultOne = greet();
console.log(resultOne);

//methods

let resultTwo = name1.toUpperCase();
console.log(resultTwo);
console.log("");




//callbacks and foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    //do something
    console.log(value);
});

let people1 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-lu'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

/*  people.forEach((person, index) => {
     console.log(index, person);
 }); */

people1.forEach(logPerson);
console.log("");




//get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    //create html template
    html += `<li style="color: purple">${person}</liv>`;
});

console.log(html);
//ul.innerHTML =  html;