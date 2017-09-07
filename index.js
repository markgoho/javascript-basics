const num = 37.5;
const str = 'Hello world!';
const bool = true;
const first = 3;
const second = 5;
const arr = [num, str, bool, 'Another string', 5324, true, false];

//console.log(arr[0]);

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
//console.log(alphabet.slice(1, 3)); // returns a new array, start to end

// Join
const newArr = ['more', 'items', true, 53];
arr.join(''); // returns a string, with , separator

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
// console.log(Math.ceil(14.5)); // goes to the nearest whole number below what's given
// console.log(Math.round(10.5));

// console.log(Math.PI);

// console.log(Math.floor(Math.random() * 10));

/////////////
// Objects //
/////////////

const francisco = {
  'height in feet': 6,
  weight: 195,
  name: 'Francisco',
  goodAtSoccer: true,
  cook: function() {
    console.log('I made a meal');
  }
};

francisco.cook();
