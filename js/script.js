// Treehouse FSJS Techdegree: Project 1 - A Random Quote Generator

/* This is a dimensional array of objects. Each object contains a quote 
and a source of the quote. Some objects contain also citation, year and 
tags which can be related to the quote. */

let quotes = [
  {
    quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    source: "Harry Potter and the Sorcerer's Stone",
    citation: "Albus Dumbledore",  
    year: 1997,
    tags: "human nature"
  },
  {
    quote: "Dobby is free.",
    source: "Harry Potter and the Chamber of Secrets", 
    citation: "Dobby",
    year: 1998
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: "Harry Potter and the Goblet of Fire",
    citation: "Sirius Black", 
    year: 2000,
    tags: "human nature"
  },
  {
    quote: "Always", 
    source: "Harry Potter and the Deathly Hallows", 
    citation: "Severus Snape", 
    year: 2007,
    tags: "love"
  },
  {
    quote: "Everyone has secrets. It's just a matter of finding out what they are.",
    source: "The Girl with the Dragon Tattoo",
    citation: "Lisbeth Salander", 
    year: 2011,
    tags: "human nature"
  },
  {
    quote: "Why is it that when one man builds a wall, the next man immediately needs to know what's on the other side?",
    source: "A Game of Thrones",
    tags: "human nature"
  }, 
  {
    quote: "Winter is coming.",
    source: "A Game of Thrones"
  },
  {
    quote: "The night is dark and full of terrors.", 
    source: "A Game of Thrones",
    citation: "Melisandre"
  }
]

/* A getRandomQuote function returns a random quote object using 
Math.random function to provide a random number and Math.floor
function to round the reuslt of Math.random function downward to 
its nearest interger.*/
 
function getRandomQuote() {
  let quoteNumber = Math.floor(Math.random() * quotes.length); 
  return quoteNumber;
}

/* This is a function that prints a quote. It uncludes three conditional 
statements, which add citations, years and tags to the quotes in case 
if there are these kinds of information in the array of quotes.*/

function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = `<p>"${quotes[randomQuote].quote}"</p>`;
  htmlString += `<p>${quotes[randomQuote].source} `;
  if (quotes[randomQuote].citation) {
    htmlString += `<span><em>${quotes[randomQuote].citation} </span>`;
  }
  if (quotes[randomQuote].year) {
    htmlString += `<span>${quotes[randomQuote].year}</em></span>`;  
  } 
  if (quotes[randomQuote].tags) {
    htmlString += `<p>${quotes[randomQuote].tags}`;
  }
  htmlString += `</p>`;
  return htmlString; 
}


document.getElementById('quote-box').innerHTML = printQuote();
document.getElementById('load-quote').addEventListener("click", printQuote, false);