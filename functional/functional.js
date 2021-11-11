//learn about functional programming

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);

//understand functional programming terminoligy

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea1 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

console.log('');
const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
console.log("");

//understand the hazards of using imperative code

// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {


  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1, this.tabs.length); // Get the tabs after the tab
  //console.log(tabsAfterIndex);
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together


  return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//avoid mutations and side effects using functional programming

// The global variable
var fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}
console.log(incrementer());

//pass arguments to avoid external dependence in a function

// The global variable
var fixedValue1 = 4;

function incrementer1(num) {
  return num + 1;
}

console.log(incrementer1(fixedValue1));
console.log('');

//refactor global variable out of functions

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let bookLst = [...arr];
  bookLst.push(bookName);
  //console.log(bookLst)
  return bookLst;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let bookLst = [...arr];
  var book_index = bookLst.indexOf(bookName);
  if (book_index >= 0) {

    bookLst.splice(book_index, 1);
    //console.log(bookLst)
    return bookLst;

    // Change code above this line
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
console.log(bookList);
console.log('');

//use the map method to extract data from an array

// The global variable
var watchList = [{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

console.log(JSON.stringify(ratings));
console.log('');

//implement map on a prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  this.forEach(item => newArray.push(callback(item)))
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
console.log(s)
console.log(new_s);

//use the filter method to extract data from an array

var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    return parseFloat(movie.rating) >= 8.0;
  });
// Only change code above this line
console.log(JSON.stringify(filteredList));

//implement the filter method on a prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  var fArr = [];

  this.forEach(a => newArray.push(callback(a)))
  console.log(newArray)
  for (let i = 0; i < this.length; i++) {
    if (newArray[i] === true) {
      fArr.push(this[i])
    }
  }

  return fArr;
};

var new_s1 = s.myFilter(function (item) {
  return item % 2 === 1;
});
console.log(new_s1);

//return part of an array using the slice method

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

//remove elements from an array using .slice() instead of .splice()

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

//combine two arrays using the concat method

function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));

//add elements to the end of an array by using .concat() instead of .push()

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));

//use the reduce method to analyze data

function getRating(watchList) {
  // Add your code below this line
  var count = 0;
  var averageRating = watchList.reduce((sum, movie) => {
    if (movie.Director == "Christopher Nolan") {
      count += 1;
      return sum + parseFloat(movie.imdbRating);
    }
    return sum;
  }, 0) / count;
  // Add your code above this line
  return averageRating;
}
console.log(getRating(watchList));

//use higher order functions map, filter, or reduce to solve a complex problem

const squareList = arr => {
  let newArr = [];
  arr.reduce((start, pos) => {
    if (Number.isInteger(pos) && pos > 0) {
      newArr.push(pos ** 2);
    }
  }, 0)
  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))

//sort an array alphabetically using the sort method

function alphabeticalOrder(arr) {
  return arr.sort();
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//return a sorted array without changing the original array

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let sortedArr = [...arr]
  return sortedArr.sort((a, b) => {
    return a - b
  })
}
nonMutatingSort(globalArray);
console.log(nonMutatingSort([1, 30, 4, 21, 100000]))

//split a string into an array using the split method

function splitify(str) {
  let newStr = str
  newStr.split(' ')
  return newStr.split(/\W/ig);
}
console.log(splitify("Hello World,I-am code"));
console.log(splitify("This.is.a-sentence"));

//combine an arry into a string using the join method 

function sentensify(str) {
  return str.split(/\W/ig).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("There,has,been,an,awakening"));

//apply functional programming to convert strings to url slugs

function urlSlug(title) {
  title = title.toLowerCase().trim().split(/\s+/ig).join("-");
  return title
}
console.log(urlSlug(" Winter Is  Coming"))
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

//use the every method to check that every element in an array meets a criteria

function checkPositive(arr) {
  return arr.every(currentValue => currentValue > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

//use the some method to check that any elements in an array meet a criteria

function checkPositive1(arr) {
  return arr.some(num => num > 0);
}
console.log(checkPositive1([1, 2, 3, -4, 5]));

//introduction to currying and partial application

let add1 = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    }
  }

}
console.log(add1(10)(20)(30));