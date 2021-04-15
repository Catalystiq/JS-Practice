//diff two arrays

function diffArray(arr1, arr2) {
    var newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) <= -1) {
            newArr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) <= -1) {
            newArr.push(arr2[i]);
        }
    }

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

//sum all numbers in a range

function sumAll(arr) {
    let a = [];
    let sum = 0;
    a = arr.sort((a, b) => a - b)
    a = [...arr];

    for (let i = arr[0] + 1; i < a[arr.length - 1]; i++) {
        a.push(i);
    }
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }
    return sum;
}
console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));

//seek and destroy

function destroyer(arr) {
    let newArr = [];
    let argsArr = Object.values(arguments);
    argsArr.splice(0, 1)
    for (let i = 0; i < arr.length; i++) {
        if (argsArr.indexOf(arr[i]) <= -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
    "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))