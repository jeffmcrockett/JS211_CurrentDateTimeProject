// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = function(num) {
  let newNum = num.toString();
  console.log(newNum);
}

numToString(42);


// Write a JavaScript program to convert a string to the number.

const stringToNum = function(string2) {
  let newNumber = parseInt(string2);
  console.log(newNumber);
}

stringToNum("20 aliens eat cupcakes");


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const determineDataType = function(myValue) {
  if (typeof(myValue) === 'undefined') {
    console.log("Undefined");
  }
  if (typeof(myValue) === 'number') {
    console.log("Number");
  }
  if (typeof(myValue) === 'string') {
    console.log("String");
  }
  if (typeof(myValue) === 'NaN') {
    console.log("NaN");
  }
  if (typeof(myValue) === 'null') {
    console.log("Null");
  }
  if (typeof(myValue) === 'boolean') {
    console.log("Boolean");
  }
}

determineDataType();
determineDataType(42);
determineDataType("Hello");
determineDataType(NaN); //this is Not-A-Number but still registers as a number due do its data type.
determineDataType(null);
determineDataType(true);
determineDataType(false);

  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = function(num1, num2) {
  let z = num1 + num2;
  console.log(z);
}

addTwoNumbers(4, 6);


// Write a JavaScript program that runs only when 2 things are true.

const aliveAndWell = function(isAlive, isHealthy) {
  if (isAlive && isHealthy) {
    console.log("Yes, you are alive and healthy! Keep up the good work!");
  }
  else console.log("Something is wrong, go see a doctor!");
}

aliveAndWell(true, true);


// Write a JavaScript program that runs when 1 of 2 things are true.

const tvShowChoice = function(supernatural, lost) {
  if (supernatural || lost) {
    console.log("Great choice! That's also one of my favorite shows.");
  }
}

tvShowChoice(true, false);


// Write a JavaScript program that runs when both things are not true.  

const doYouLikeCandy = function(skittles, snickers) {
  if (!skittles && !snickers) {
    console.log("That's too bad! Those are pretty good candy choices. More for me I guess.");
  }
}

doYouLikeCandy(false, false);


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
