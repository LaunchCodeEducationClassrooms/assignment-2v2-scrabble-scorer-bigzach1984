// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
  let count = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
       count += Number(pointValue);
		 }
 
	  }
	}
  return count;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let wordToScore = ''
function initialPrompt() {
  wordToScore = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
  //console.log(oldScrabbleScorer(wordToScore));
  //return simpleScore(wordToScore);
  //return vowelBonusScore(wordToScore);
  //return scrabbleScore(wordToScore);
  //return wordToScore;
};

const simpleScoreStructure = {
  1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
};

let simpleScore = word => {
  word = word.toUpperCase();
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in simpleScoreStructure) {
      if (simpleScoreStructure[pointValue].includes(word[i])) {
        count += Number(pointValue);
      }
    }
  }
  return count;
};

const vowelPointStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

let vowelBonusScore = word => {
  word = word.toUpperCase();
  let count = 0;
  
  for (let i = 0; i < word.length; i++) {
    for (const pointValue in vowelPointStructure) {
      if (vowelPointStructure[pointValue].includes(word[i])) {
        count += Number(pointValue);
      } 
    }
  }
  return count;
};

let scrabbleScore = word => {
  word = word.toUpperCase();
  let letterPoints = "";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        count += Number(pointValue);
        letterPoints += `Points for '${word [i]}': ${pointValue}\n`
      }
    }
  }
  return count;
  return letterPoints;
};

const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore(wordToScore)
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm',
    scoringFunction: oldScrabbleScorer
  }
];

function scorerPrompt() {
  let typeOfScorer = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
  if (typeOfScorer === '0') {
    console.log("Algorithm Name:", scoringAlgorithms[0].name);
    console.log(`Score for '${wordToScore}':`, simpleScore(wordToScore));
  }
  if (typeOfScorer === '1') {
    console.log("Algorithm Name:", scoringAlgorithms[1].name);
    console.log(`Score for '${wordToScore}':`, vowelBonusScore(wordToScore));
  }
  if (typeOfScorer === '2') {
    console.log("Algorithm Name:", scoringAlgorithms[2].name);
    console.log(`Score for '${wordToScore}':`, oldScrabbleScorer(wordToScore));
  }
  
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

