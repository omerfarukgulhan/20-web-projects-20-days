// Html elements
const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterButton = document.querySelector("#twitter");
const newQuoteButton = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

// Array for quotes
let apiQuotes = [];

// On load
getQuotes();
eventListeners();

// Event listeners
function eventListeners() {
  newQuoteButton.addEventListener("click", newQuote);
  twitterButton.addEventListener("click", tweetQuote);
}

// Get quotes from api
async function getQuotes() {
  loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert(error);
  }
  complete();
}

// Change quote
function newQuote(params) {
  loading();
  const rand = Math.floor(Math.random() * apiQuotes.length);

  quote = apiQuotes[rand].text;
  author = apiQuotes[rand].author;

  if (quote.length >= 80) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  if (!author) {
    author = "Unknown";
  }

  quoteText.textContent = quote;
  authorText.textContent = author;
  complete();
}

// Tweet the quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}
