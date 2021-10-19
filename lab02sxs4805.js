// NAME: Shubhayu Shrestha
// STUDENT ID: 1001724804
// DUE DATE: October 20th, 2021

// Sources Used: JavaScript Documentation 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// Question 1: Create an array called inputtable that holds numbers 1 through 10
// Creating an array called inputtable which holds numbers 1 through 10
const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Question 2: Use inputtable to create a set of multiplesof 5 between 1 and 51.
// Create another array called fiveTable where it will add all the multiples
// of 5 utilizng a map
const fiveTable = inputtable.map(multOfFive);

// function that will check if the numbers in the array are multiples of five
function multOfFive(value, index, array) 
{
  return value * 5;
}

// Use inputtable to create a set of multiplesof 13 between 1 and 131.
// Create another array called fiveTable where it will add all the multiples
// of 13 utilizng a map
const thirteenTable = inputtable.map(multOfThirteen);

// function that will check if the numbers in the array are multiples of 13
function multOfThirteen(value, index, array) 
{
  return value * 13;
}

// Use inputtable to create a set of squares from the input.
// Create another array called fiveTable where it will add all the multiples
// of squares utilizng a map
const squaresTable = inputtable.map(valueOfSquares);

// function that will check if there is a set of squares
function valueOfSquares(value, index, array) 
{
  return value * value;
}

// Question 3: Get the odd multiples of 5 between 1 and 100. 5, 15...

// creating an array with 1-100
const between1_100 = Array.from({ length: 100 }, (_, index) => index + 1);

// variable that will hold the multiples of 5 utilizing filter
const oddMultiplesFive = between1_100.filter(oddFiveFunction);

// function that will filter the values that will hold all of the odd values
// and numbers divisible by 5
function oddFiveFunction(value, index, array) 
{
  // checking if the number is odd
  if (value % 2 != 0) 
  {
    // checking if the number is divisible by 5
    if (value % 5 == 0) 
    {
      // returning value
      return value;
    }
  }
}

// Question 4: get the sum of even multiples of 7 between 1 and 100

// variable that will hold the multiples of 7 utilizing filter
const evenMultiplesSeven = between1_100.filter(evenMultiplesSevenFunction);

// function that will filter the values that will hold all of the even values
// and numbers that are divisible by 7
function evenMultiplesSevenFunction(value, index, array) 
{
  // checking if the number is even
  if (value % 2 == 0) 
  {
    // checking if the number is divisible by 7
    if (value % 7 == 0) 
    {
      // returning value
      return value;
    }
  }
}

// variable that will hold the sum of the even multiples of seven
let sumOf7Even = evenMultiplesSeven.reduce(sumOfValues); 

// function that will sum up the values 
function sumOfValues(total, value, index, array)
{
  return total + value; 
}


// Question 5: Use currying to rewrite the function:
/*
function cylinder_volume(r, h)
{
  var volume = 0.0;
  volume = 3.14 * r * r * h;
  return volume;
}
*/

// Curried version of the function that calculates the function cylinder_volume
function cylinder_volume(r) 
{
  return function (h) 
  {
    // original function variables
    // initializing volume
    var volume = 0.0;
    // calculating volume
    volume = 3.14 * r * r * h;
    // returning the value of volume
    return volume;
  }
}

// Use r = 5 and h = 10 to call your curried function.
var cylinder_volume_a = cylinder_volume(5)(10); 

// Reuse the function from part ‘a’ but use h = 17
var cylinder_volume_b = cylinder_volume(5)(17); 

// Reuse the function from part ‘a’ but use h = 11
var cylinder_volume_c = cylinder_volume(5)(11); 


// DEBUG PRINT STATEMENTS
console.log("\n2a) " + fiveTable); 

console.log("\n2b) " + thirteenTable); 

console.log("\n2c) " + squaresTable); 

console.log("\n3) " + oddMultiplesFive);

console.log("\n4a) " + evenMultiplesSeven);

console.log("\n4b) " + sumOf7Even);

console.log("\n5a) " + cylinder_volume_a);

console.log("\n5b) " + cylinder_volume_b);

console.log("\n5c) " + cylinder_volume_c);
