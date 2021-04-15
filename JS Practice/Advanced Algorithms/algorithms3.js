//palindrome checker

function palindrome(str) {
    let regex = /[_\W]+/ig;
    let revStr = str.replace(regex, "").toLowerCase().split("").reverse();
    let newStr = revStr.reverse()
    if (revStr.join("") == newStr.reverse().join("")) {
        return true;
    } else {
        return false;
    }
}



console.log(palindrome("eye"))
console.log(palindrome("0_0 (: /-\ :) 0-0"))
console.log(palindrome("almostomla"))
console.log(palindrome("_eye"))
console.log(palindrome("not a palindrome"))
console.log(palindrome("A man, a plan, a canal. Panama"))
console.log("");