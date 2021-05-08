/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "We accept the love we think we deserve",
    source: "Stephen Chbosky",
    citation: "The Perks of Being a Wallflower",
    year: 1999,
    tag: "love"
  },
  {
    quote: "Maybe our girlfriends are our soulmates and guys are just people to have fun with",
    source: "Candace Bushnell",
    citation: "Sex and the City",
    year: 2001,
    tag: "friendship"
  },
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    source: "Marilyn Monroe"
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    source: "Mae West"
  },
  {
    quote: "If you don't love yourself, how in the hell you gonna love somebody else?",
    source: "Rupaul"
  },
];
//Empty array that will hold the quote objects
let arr = []; 

//This will add the array of objects into the quotes array using the push operator

arr.push(...quotes); 


/***************************/
/*----- Functions--------- */
/***************************/


//This function will create a random number from 0 up to the number
//set as the parameter. This function will be used to randomize the quote 
//and background color functions

function getRandomNumber (maximum) {
  return Math.floor(Math.random() * maximum)
}

//This function will generate a random color and and reset the background color
//when called 
//code adapted from https://www.w3resource.com/javascript-exercises

function randomBackgroundColor() {
  let a = getRandomNumber(256);
  let b = getRandomNumber(256);
  let c = getRandomNumber(256);

  let randomColor = `rgb(${a},${b},${c})`;
  document.body.style.backgroundColor = randomColor;
}

//This function calls 'getRandomNumber' function to get a random number up to the 
//length of the array passed into it and uses the random number to return a random
//quote object from the passed array

function getRandomQuote(array) {
  let randomNum = getRandomNumber(array.length); 
  return array[randomNum];
}


//The 'printQuote' function calls 'getRandomQuote' in order to get random quote
//object. The function uses an if statement to check if the object has more than 
//two properties in order to display additional quote details if they're passed
//through the function. The functions changes the quote on the screen and changes
//the background to a random color whenever invoked

function printQuote () {
  const randomQuote = getRandomQuote(arr);
  let html = `<p class = "quote">${randomQuote.quote}</p>`;
  html += `<p class = "source">${randomQuote.source}`;

  if (Object.keys(randomQuote).length > 4) {
    html += `<span class = "citation">${randomQuote.citation}</span>`
    html += `<span class = "year">${randomQuote.year} </span>`
    html += `<span class = "tags">"${randomQuote.tag}"</span>`
  }

  html += "</p>";

  randomBackgroundColor();

  return document.getElementById('quote-box').innerHTML = html; 
}

//This will call the printQuote function in intervals of 15 seconds

setInterval(printQuote, 15000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//document.body.style.backgroundColor = "red"