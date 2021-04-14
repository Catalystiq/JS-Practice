//debugging

//using the javascript console to check the value of a variable

let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(sumAB);
console.log(a);

//using console.clear to clear the console

let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
console.log(output);
console.clear();


//use typeof to check the type of a variable

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

//catch misspelled variables

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//catch single and double quotes

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//catch use of assignment operator instead of equality operator

let x = 7;
let y = 9;
let result = "to come";
//wrong x = y
if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//catch assignments passed in the wrong order

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp); //wrong way raiseToPower(exp, base);
console.log(power);