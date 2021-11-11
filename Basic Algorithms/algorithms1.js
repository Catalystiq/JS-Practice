//convert celsius to fahrenheit

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

console.log(convertToF(30));

//reverse a string

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//factorialize a number

function factorialize(num) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(factorialize(5));

//find the longest words in a string

function findLongestWordLength(str) {
    let longest = 0;
    let arrStr = str.split(' ')
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length > longest) {
            longest = arrStr[i].length;
        }
    }
    return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//return largest numbers in arrays

function largestOfFour(arr) {
    let newArr = [];
    let longest = Math.log(0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > longest) {
                longest = arr[i][j];
            }
            if (arr[i][j + 1] == undefined) {
                newArr.push(longest);
                longest = Math.log(0);
            }
        }
    }
    return newArr;
}
//this function can do more than 4 elements and more than four elements in the nested arrays
console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));
console.log(largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
]));
console.log(largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
    [-72, -3, -17, -10, 134, 1, 34]
]));
//console.log(Math.log(0))

//confirm the ending

function confirmEnding(str, target) {
    let checkStr = str.split(target);
    if (checkStr[checkStr.length - 1] == "") {
        return true
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));

//testing

let str1 = "jack and ";
let str2 = "jill";
console.log(str1.concat(str2));

//repeat a string repeat a string

function repeatStringNumTimes(str, num) {
    let newStr = "";

    for (let i = 0; i < num; i++) {
        newStr = newStr.concat(str);
    }
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));

//truncate a string

function truncateString(str, num) {
    let length = str.length;
    let trStr = ["..."];
    str = str.split('');
    str.length = num;
    if (num >= length) {
        console.log("no truncation needed");
    } else {
        str.splice(str.length, 0, trStr);
    }
    str = str.join('');
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

//finders keepers

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i]
        if (func(num) == true) {
            return arr[i]
        } else if ((func(num) == false) && (arr[i + 1] == undefined)) {
            return undefined;
        }
    }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
}))

//boo who

function booWho(bool) {
    if (bool === false || bool === true) {
        return true
    } else {
        return false
    }
}

console.log(booWho(null));
console.log(booWho(true))
console.log(booWho(false))
console.log(booWho([1, 2, 3]))

//title case a string

function titleCase(str) {
    str = str.toLowerCase();
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            arr[i + 1] = arr[i + 1].toUpperCase();
        }
    }
    arr = arr.join('')
    return arr;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

//slice and splice

function frankenSplice(arr1, arr2, n) {
    let newArr = [...arr2];
    newArr.splice(n, 0, arr1)
    newArr = newArr.flat();
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

//falsy bouncer

function bouncer(arr) {
    let bouncedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) == true) {
            bouncedArr.push(arr[i])
        }
    }
    return bouncedArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

//where do i belong

function getIndexToIns(arr, num) {
    let newPos = 0;
    arr.sort((a, b) => a - b);
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[arr.length - 1]) {
            newPos = arr.indexOf(arr[arr.length - 1]) + 1;
        }
        if (arr[i] < num && arr[i + 1] >= num) {
            newPos = arr.indexOf(arr[i + 1])
        }
    }
    return newPos;
}

getIndexToIns([40, 60], 50);
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));

//mutations

function mutation(arr) {
    let elem1 = arr[0].toLowerCase();
    let elem2 = arr[1].toLowerCase();
    for (let i = 0; i < elem2.length; i++) {
        let letter = elem2[i];
        if (elem1.indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["voodoo", "no"]));

//chunky monkey 

function chunkArrayInGroups(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));