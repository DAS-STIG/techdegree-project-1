/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// Array for storing the quotes we want to display on the website
var quotes = [
  {
    quote: 'The only journey is the one within.',
    source: 'Rainer Maria Rilke',
    category: 'Inspirational'
  }, {
    quote: 'Good judgment comes from experience, and a lot of that comes from bad judgment.',
    source: 'Will Rogers',
    category: 'Life'
  }, {
    quote: 'Imagination is more important than knowledge.',
    source: 'Albert Einstein',
    citation: 'The Saturday Evening Post',
    year: '1929'
  }, {
    quote: 'If music be the food of love, play on.',
    source: 'Shakespeare',
  }, {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    category: 'Inspirational'
  }, {
    quote: 'Obstacles are those frightful things you see when you take your eyes off the goal.',
    source: 'Henry Ford',
    category: 'Life'
  }, {
    quote: 'When you come to a fork in the road, take it.',
    source: 'Yogi Berra',
    citation: 'The Yogi Book: I Really Didn’t Say Everything I Said!',
    year: '1998',
    category: 'Life'
  }, {
    quote: 'The life which is unexamined is not worth living.',
    source: 'Socrates',
    category: 'Life'
  }, {
    quote: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    source: 'Zig Ziglar'
  }
]

/***
  Get a random number using Math.random and multiply that by the length of the array
  subtracting 1 from the quote array length since arrays start at 0 to get a number
  between 0 and length of quotes array
***/

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * Math.floor(quotes.length - 1))

  return quotes[randomQuote];
}

/***
  Get a random color using Math.random and set page background to that color
***/

function getRandomColor() {
  var roundNumber = Math.round;
  var randomNumber = Math.random;
  var max = 255;
  var rgbaColor = 'rgba(' + roundNumber(randomNumber() * max) + ',' + roundNumber(randomNumber() * max) + ',' + roundNumber(randomNumber() * max) + ',' + randomNumber().toFixed(1) + ')';
  document.body.style.backgroundColor = rgbaColor;
}

/***
  Grabs the random quote generate by getRandomQuote function and build out
  the HTML that we will inject into the website
***/

function printQuote() {
  var quoteToPrint = getRandomQuote();
  var html = '<p class="quote">' + quoteToPrint.quote + '</p><p class="source">' + quoteToPrint.source

  if (quoteToPrint.hasOwnProperty('citation')) {
    html += '<span class="citation">' + quoteToPrint.citation + '</span>';
  }

  if (quoteToPrint.hasOwnProperty('citation')) {
    html += '<span class="year">' + quoteToPrint.year + '</span>';
  }

  if (quoteToPrint.hasOwnProperty('category')) {
    html += '<span class="category"> (' + quoteToPrint.category + ')</span>';
  }

  html += '</p>'

  document.getElementById('quote-box').innerHTML = html;
  getRandomColor();
}

/***
  Show another quote button event listener that triggers the printQuote function
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 5000, 'Quote was automatically changed!');