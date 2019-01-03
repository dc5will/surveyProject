function superSize(n){
    return parseInt(n.toString().split('').sort().reverse().join(''))
  }

  const superSize = num => +(num+'').split('').sort((a,b)=>b-a).join('');

// 8 KYU (CodeWars)
 
//   Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

// You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20 Note: if there is nothing to sum, the sum is default to 0.

function positiveSum (arr) {
    const total = 0;
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}

function positive(arr) {
    return arr.reduce((a, b) => (b > 0 ? b: 0), 0);
}

// Very simple, given a number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34
// But can you do it in 1 line of code and without any conditionals?

function opposite(number) {
    return number * (-1);
}

function oppostive(number) {
    return (-number);
}

// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    return s.repeat(n);
}

function repeatStr (n, s) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

const repeatStr = (n, s) => s.repeat(n);

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar (str) {
    return str.split('').slice(1, str.length-1).join('');
}

function removeChar(str) {
    return str.slice(1, -1);
}

const removeChar = str => str.slice(1, -1)

function removeChar(str) {
    return str.substring(1, str.length-1);
}

// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort(function(a, b) {
            return a - b; } )
            return args[0];
    }
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if (num < 0) {
        return num;
    } else {
        return num * (-1);
    }
}

function makeNegative(num) {
    return -Math.abs(num);
}

function makeNegative(num) {
    return num < 0 ? num : -num;
}

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    return x.replace(/\s/g, '');
}

const noSpace = x => x.replace(/ /g, "");

function noSpace(x) {
    return x.split(' ').join('');
}

// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count;
}

function countSheeps(arrayOfSheep) {
    let count = 0;

    arrayOfSheep.forEach( function (sheep) {
        if (sheep)
            count++
    })  ;
    return count;
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}

let countSheeps = x => x.filter(s => s).length;

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
// Example:
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-) 

// COULD NOT SOLVE WITHOUT UNLOCKING SOLUTION
function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function(a, b) {
            return a - b;});
    let total = 0;
    for (let i = 1; i < array.length - 1; i++) {
        total += array[i];
    }
    return total;
    }
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

function sumArray(array) {
    return Array.isArray(array) && array.length > 1 ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array) : 0
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input[i] > 0)
          ++positive;
        else
          negative += input[i];
    }
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

// Convert number to reversed array of digits
// Given a random number:
// You have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    return String(n).split('').map(Number).reverse();
}

function digitize(n) {
    return (n + '').split('').map(Number).reverse();
}

function digitize(n) {
    return String(n).split('').reverser().map(Number);
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ) {
    if (bool === true) {
        return "Yes";
    } return "No";
}

function boolToWord( bool ) {
    if (bool) {
        return "Yes";
    } else {
        return "No";
    }
}

function boolToWord( bool ) {
    return bool ? 'Yes' : 'No';
}

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// JavaScript & TypeScript
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return
// "found the needle at position 5"

function findNeedle(haystack) {
    let indexOfHaystack = haystack.indexOf('needle');
    return `found the needle at position ${indexOfHaystack}`;
}

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
// Task
// Implement a function named
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// , which takes three arguments and generates a range of integers from min to max, with given step. The first is minimum value, second is maximum of range and the third is step.
// Note
// min < max
// step > 0

function generateRange(min, max, step) {
    let result = [];
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }
    return result;
}

function generateRange(min, max, step) {
    for (let result = []; min <= max; min += step) 
    result.push(min)
    return result;
}

function generateRange(min, max, step) {
    let result = [];
    while (min <= max) {
        result.push(min);
        min += step;
    }
    return arr;
}

// Coding in function ```pickIt```, function accept 1 parameter:```arr```, it's a number array, we need traverse ```arr``` by using ```for``` loop, if element is odd number, push it to array ```odd```, if it's a even number, push it to array ```even```.

// I've defined two array ```odd``` and ```even``` in the function, and also wrote the return statement. ```your work is write a for loop.```

function pickIt(arr) {
    let odd=[], even=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }
    return [odd, even];
}

function pickIt (arr) {
    let odd = [];
    let even = [];

    for (let x of arr) {
        ((x % 2) ? odd : even).push(x)
    }
    return [odd, even]
}

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

const summation = n => n * (n + 1) / 2;

function summation(num) {
    return num * (num + 1) / 2;
}

// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
// Examples:
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

function numberToString(num) {
    return num.toString();
}

function numberToString(num) {
    return String(num);
}

// Write function avg which calculates average of numbers in given list.

function find_average(array) {
    return array.reduce(function(a, b) {return a+b;})/ array.length;
}

function find_average(array) {
    let sum = array.reduce((a, b) => a +b, 0);
    return sum/array.length;
}


