/* 

NAME: Shubhayu Shrestha
STUDENT ID: 1001724804
DUE DATE: October 20th, 2021
CSE 3302-001 Programming Languages
Professor: Kelly French
Compiled using MacOS with Node.js v14.18.1

*/

// Question 1: Create an array called inputtable that holds numbers 1 through 10
// Creating an array called inputtable which holds numbers 1 through 10
const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Question 2: Use inputtable to create a set of multiples of 5 between 1 and 51.
// Create another array called fiveTable where it will add all the multiples
// of 5 utilizng a map
const fiveTable = inputtable.map(multOfFive);

// function that will check if the numbers in the array are multiples of five
function multOfFive(value, index, array) 
{
  return value * 5;
}

// Printing the table with the set of multiples of 5 between 1 and 51
console.log("\n2a) " + fiveTable); 

// Use inputtable to create a set of multiples of 13 between 1 and 131.
// Create another array called fiveTable where it will add all the multiples
// of 13 utilizng a map
const thirteenTable = inputtable.map(multOfThirteen);

// function that will check if the numbers in the array are multiples of 13
function multOfThirteen(value, index, array) 
{
  return value * 13;
}

// Printing the set of multiples of 14 between 1 and 131
console.log("\n2b) " + thirteenTable); 

// Use inputtable to create a set of squares from the input.
// Create another array called fiveTable where it will add all the multiples
// of squares utilizng a map
const squaresTable = inputtable.map(valueOfSquares);

// function that will check if there is a set of squares
function valueOfSquares(value, index, array) 
{
  return value * value;
}

// Printing the set of squares
console.log("\n2c) " + squaresTable); 

// Question 3: Get the odd multiples of 5 between 1 and 100. 5, 15...

// creating an array that has values with numbers between 1 and 100
const between1_100 = Array.from({ length: 100 }, (_, i) => i + 1);

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

// Printing the odd multiples of five
console.log("\n3) " + oddMultiplesFive);

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

// Printing out the even multiples of seven
console.log("\n4a) " + evenMultiplesSeven);


// variable that will hold the sum of the even multiples of seven
let sumOf7Even = evenMultiplesSeven.reduce(sumOfValues); 

// function that will sum up the values 
function sumOfValues(total, value, index, array)
{
  return total + value; 
}

// printing out the sum of the even multiples of 7
console.log("\n4b) " + sumOf7Even);

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

// Printing the volume of cylinder a
console.log("\n5a) " + cylinder_volume_a);

// Reuse the function from part ‘a’ but use h = 17
var cylinder_volume_b = cylinder_volume(5)(17); 

// Printing the volume of cylinder b
console.log("\n5b) " + cylinder_volume_b);

// Reuse the function from part ‘a’ but use h = 11
var cylinder_volume_c = cylinder_volume(5)(11); 

// Printing the volume of cylinder c
console.log("\n5c) " + cylinder_volume_c);


// Question 6: Use the following code to take advantage of closures to wrap content with HTML tags, 
// specifically show an HTML table consisting of a table row that has at least one table cell/element. 
// You can use the console to output your results.
makeTag = function (beginTag, endTag) 
{
  return function (textcontent) 
  {
    return beginTag + textcontent + endTag;
  }
}

// Print identifier so the grader knows that we are now doing question 6
console.log("\n6)");

// initializing array that stores an individual's information – First Name, Last Name, Age
const personA = ["Shubhayu", "Shrestha", 20];

// creating a maketag for th to surround the person info
const th = makeTag("\n<th>", "</th>"); 

// creating a maketag for person's name and age
//                            first name         age          last name
const personAInfo = makeTag(th(personA[0]), th(personA[2]))(th(personA[1])); 

// creating a maketag for tr which will surround the th
const tr = makeTag("\n<tr>", "\n</tr>")(personAInfo);

// creating a maketag for table which will surround the tr
const table = makeTag("<table>", "\n</table>")(tr); 

// printing the table
console.log("\n"+table+"\n\n"); 
