const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];


let titleCased = () => {
  // How can we "iterate" through individual words in a string?
  return tutorials.map((tutorial) => {
    // Can we execute an iteration inside an iteration? How?
    const words = tutorial.split(" ");
    // How can we capitalize just the first letter in a word?
    const capitalizedWords = words.map((word) => {
      let newWord = word[0].toUpperCase();
      newWord += word.slice(1);
      return newWord;
    });

    return capitalizedWords.join(" ");
  });
};

