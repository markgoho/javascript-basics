const num = 37.5;
const str = 'Hello world!';
const bool = true;
const arr = [num, str, bool, 'Another string', 5324, true, false];

///////////////////
// Array Methods //
///////////////////

// Add, remove elements
arr.push('Haha!'); // adds 'haha' into the array as the last element
arr.pop(); // removes the element at the last index
arr.unshift('Haha!'); // adds 'Haha!' into the array, first element
arr.shift(); // removes first element

arr.indexOf('Hello world!'); // returns 1 because that string is at index 1

// Slice
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
alphabet.slice(1, 3); // returns a new array, start to end

// Join
const newArr = ['more', 'items', true, 53];
arr.concat(newArr);
arr.join(', '); // returns a string, with , separator

////////////////////
// String Methods //
////////////////////
const newString = `  Don't have a cow man!  `;
newString.length; // -> 21
newString.trim(); // removes whitespace
newString.toUpperCase(); // makes all characters uppercase

/////////////////
// Math Object //
/////////////////
console.log(Math.floor(14.1)); // goes to the nearest whole number below what's given
console.log(Math.sqrt(10));

console.log(Math.floor(Math.random() * 10));

/////////////
// Objects //
/////////////

const obj = {
  height: 6,
  weight: 195,
  name: 'Francisco',
  goodAtSoccer: true
};
