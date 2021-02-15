const input = require("readline-sync")

function transform(obj) {
  let myNewObject = {};

  for (item in obj) {
    for (i = 0; i < obj[item].length; i++) {
      let newKey = obj[item][i].toLowerCase();
      let newValue = item
      myNewObject[newKey] = Number(newValue);
    }
  }
  return myNewObject
}



function initialPrompt() {
let p1 = "0 - Scrabble: The traditional scoring algorithm.\n1 - Simple Score: Each letter is worth 1 point. \n2 - Bonus Vowels: Vowels are worth 3pts, and consonants are 1pt.";
let choosePrompt = Number(input.question(`Welcome to the Scrabble score calculator! \n\nWhich scoring algorithm would you like to use?: \n \n${p1} \n \nEnter 0, 1, or 2: `));
return choosePrompt
}
// Code your runProgram function here:

function runProgram(objArray) {
let algorithmChoose = initialPrompt();
let choosenArray = objArray[algorithmChoose]
console.log(`\nUsing algorithm: ${choosenArray.name}`)
let userWord = input.question("\nEnter a word to be scored, or 'Stop' to quit: ")

  while (userWord.toLowerCase() !== "stop") {
   let mech = choosenArray.scoreFunction(userWord, newPointStructure)
   console.log(`Score for '${userWord}': ${mech}`)
    userWord = input.question("\nEnter a word to be scored, or 'Stop' to quit: ")
  }

if (userWord === "Stop") {
return
}


}

// Here is the oldPointStructure object:
const oldPointStructure = {
   0: [" "],
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};


newPointStructure = transform(oldPointStructure)



function simpleScore(word) {
return word.length
}


 function bonusVowels(word){
   let score = 0
   let vowels = ['a', 'e', 'i', 'o', 'u']

   for (let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
    score += 3
}
 else { score++ }

}
return score
}


 function scrabbleScore(word, obj) {
   let score = 0;
   for (i = 0; i < word.length; i++) {
     score += obj[word[i].toLowerCase()]

   }
   //console.log('score: ', score)
   return score
 }


let scoringAlgorithm = [
{
name:"Scrabble",
description:"The traditional scoring algorithm",
scoreFunction: scrabbleScore
},

{
  name:"Simple Score",
  description:"Each letter is worth 1 point",
  scoreFunction: simpleScore,
},

{
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: bonusVowels
}]





runProgram(scoringAlgorithm)
