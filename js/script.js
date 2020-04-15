// Treehouse FSJS Techdegree: Project 1 - A Random Quote Generator

/* A getRandomQuote function returns a random quote object using Math.random function to provide a random number 
and Math.floor function to round the reuslt of Math.random function downward to its nearest interger.*/

function getRandomQuote () {
    const quoteNumber = Math.floor (Math.random () * quotes.length); 
    return quotes[quoteNumber];
}
  
/* These two functions update the quote automatically every 10 seconds. */

let timer = setInterval (printQuote, 10000);

function startInterval () {
    timer = setInterval (printQuote, 10000);
}

function stopInterval () {
    timer = clearInterval (timer);
}

/* This is a function that updates the background color to a random color each time when a new quote prints to the page. */

function changeBackground () {
    let col = `rgb(${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)})`;
    for (let i = 0; i < quotes.length; i ++) {
        document.body.style.backgroundColor = col;
    }
}

/* This is a function that prints a quote. It uncludes three conditional statements, which add citations, 
years and tags to the quotes in case if there are these kinds of information in the array of quotes.*/

function printQuote () {
    let randomQuote = getRandomQuote ();
    let htmlString = `<p class="quote">${randomQuote.quote}</p>`;
    htmlString += `<p class="source">${randomQuote.source} `;
    if (randomQuote.citation) {
      htmlString += `<span class="citation">${randomQuote.citation} </span>`;
    }
    if (randomQuote.year) {
      htmlString += `<span class="year">${randomQuote.year}</span>`;  
    } 
    if (randomQuote.tags) {
      htmlString += `<p>${randomQuote.tags}`;
    }
    htmlString += `</p>`;
    document.getElementById('quote-box').innerHTML = htmlString; 
    changeBackground ();
    startInterval ();
    stopInterval ();
}

document.getElementById ('load-quote').addEventListener ("click", printQuote, false);