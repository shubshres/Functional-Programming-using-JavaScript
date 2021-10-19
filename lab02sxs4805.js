// NAME: Shubhayu Shrestha
// STUDENT ID: 1001724804
// DUE DATE: October 20th, 2021

// Question 1
// Creating an array called inputtable which holds numbers 1 through 10

const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Question 2
// Use inputtable to create a set of multiplesof 5 between 1 and 51.
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

// Question 3
// Get the odd multiples of 5 between 1 and 100. 5, 15...

// creating an array with 1-20 for the array to find the odd multiples
// of 5
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

// Question 4
// get the sum of even multiples of 7 between 1 and 100

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
