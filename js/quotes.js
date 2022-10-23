const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
  },
  {
    quote: "Never tell the truth to people who are not worthy of it.",
    author: "Mark Twain",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "You can never be overdressed or overeducated.",
    author: "Oscar Wilde",
  },
  {
    quote: "It's the friends you can call up at 4 a.m. that matter.",
    author: "Marlene Dietrich",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama XIV",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    author: "Edgar Allan Poe",
  },
  {
    quote: "Peace begins with a smile..",
    author: "Mother Teresa",
  },
  {
    quote: "You are, and always have been, my dream.",
    author: "Nicholas Sparks, The Notebook",
  },
  {
    quote: "Don't think or judge, just listen.",
    author: "Sarah Dessen, Just Listen",
  },
  {
    quote: "You cannot find peace by avoiding life.",
    author: "Michael Cunningham, The Hours",
  },
  {
    quote: "Grief does not change you, Hazel. It reveals you.",
    author: "John Green, The Fault in Our Stars",
  },
  {
    quote: "Be kind, for everyone you meet is fighting a harder battle.",
    author: "Plato",
  },
  {
    quote: "May you live every day of your life.",
    author: "Jonathan Swift",
  },
  {
    quote: "Sleep is good, he said, and books are better.",
    author: "George R. R. Martin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
