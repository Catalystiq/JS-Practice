// material from freeCodeCamp.org

//test method, returns true if found or false if not found

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1);

//different possibilites with the OR operator

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);
console.log(result2);

//ignore case

let freeString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result3 = fccRegex.test(freeString);
console.log(result3);

//extract using matches, opposite syntax from .test

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i;
let result4 = extractStr.match(codingRegex);
console.log(result4);

//multiple matches

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result5 = twinkleStar.match(starRegex);
console.log(result5);

//wilcard character, match any letter in place of it

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/ig;
let result6 = unRegex.test(exampleStr);
console.log(result6);

//multiple possibilites with brackets

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result7 = quoteSample.match(vowelRegex);
console.log(result7);

//range of numbers or letters

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result8 = quoteSample1.match(alphabetRegex);
console.log(result8);

//match numbers and letters

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/ig;
let result9 = quoteSample2.match(myRegex1);
console.log(result9);

//match single characters not specified

let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/ig;
let result10 = quoteSample3.match(myRegex2);
console.log(result10);

//match characters that occur one or more times

let difficultSpelling = "Mississippi";
let myRegex3 = /s+/ig;
let result11 = difficultSpelling.match(myRegex3);
console.log(result11);

//match characters that occur zero or more times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aaa*/ig;
let result12 = chewieQuote.match(chewieRegex);
console.log(result12);

//find characters with lazy matching

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/ig;
let result13 = text.match(myRegex4);
console.log(result13);

//match beginning string patterns, ^ outside of [brackets]

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result14 = calRegex.test(rickyAndCal);
console.log(result14);

//match ending string patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result15 = lastRegex.test(caboose);
console.log(result15);

//shortcut for matching all letters and numbers + underscore

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig;
let result16 = quoteSample.match(alphabetRegexV2).length;
console.log(result16);

//scortcut for matching everthing but all letters and numbers + underscore

let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig;
let result17 = quoteSample5.match(nonAlphabetRegex).length;
console.log(result17);

//match all numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/ig;
let result18 = movieName.match(numRegex).length;
console.log(result18);

//match all non-numbers

let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/ig;
let result19 = movieName1.match(noNumRegex).length;
console.log(result19);

//match whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/ig;
let result20 = sample.match(countWhiteSpace);
console.log(result20);

//match non whitespaace characters

let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/ig;
let result21 = sample1.match(countNonWhiteSpace);
console.log(result21);

//specify upper and lower number of matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/ig;
let result22 = ohRegex.test(ohStr);
console.log(result22);

//specify only the lower number of matches

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result23 = haRegex.test(haStr);
console.log(result23);

//specify exact number of matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result24 = timRegex.test(timStr);
console.log(result24);

//check for all or none

let favWord = "favorite";
let favRegex = /favou?rite/;
let result25 = favRegex.test(favWord);
console.log(result25);

//positive and negative lookaheads

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/;
let result26 = pwRegex.test(sampleWord);
console.log(result26);

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

//check for mixed grouping of characters

let myString1 = "Eleanor Roosevelt";
let myRegex5 = /(Franklin D.|Franklin|Eleanor) Roosevelt/;
let result27 = myRegex5.test(myString1);
console.log(result27);

//reuse patterns using capture groups

let repeatNum = "42 42 42";
let reRegex = /(^\d+)\s\1\s\1$/;
let result28 = reRegex.test(repeatNum);
console.log(result28);

//using capture groups to search and replace

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result29 = str.replace(fixRegex, replaceText);
console.log(result29);

//remove whitespace from start and end

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/ig;
let result30 = hello.replace(wsRegex, "");
console.log(result30);