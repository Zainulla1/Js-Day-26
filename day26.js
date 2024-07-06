//Question: Find last element of an array
//without using length property

const arr = ['white', 'red', 'black', 'yellow']
console.log('???');

//at () methods takes an integer value.
//Returns the item at that index.
//Allows positive and negetive integers.
//Negative integers count back from the last item in the array.

console.log(arr.at(0))

arr.push('green');

console.log(arr.at(-2));