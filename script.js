/** @format */

//reversing strings 1

const reverse1 = (string) => string.split("").reverse().join("");

// // adding the quotation ensures it targets each charaters

const reverse2 = (string) => {
  let result = "";
  //target each chararcter of the string
  for (let character of string) result = character + result;
  // console.log(character);
  return result;
};

const reverse3 = (string) =>
  string.split("").reduce((result, character) => character + result);

// console.log(reverse4("hlelo world"));

//checking for palindrome 2
const isPalindrome = (string) => {
  //cleaning the string by removing the any space in the word with regex
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  console.log(cleaned);

  //returning true if the cleaned world matches the reverse word
  return cleaned === cleaned.split("").reverse().join("");
};

// console.log(isPalindrome("hello world"));
const palin = (string) => {
  //removing the space, reversing the string and joining it back with the space
  cleaned = string.split("").reverse().join("");
  console.log(cleaned);

  //checking if the reversed string is same with the input string
  return string === cleaned;
};
// console.log(isPalindrome("mom"));
// console.log(palin("yes"));

//the reverse integer 3
const reverse = (integer) =>
  //passing the integer to string, then converting the string back to int
  parseInt(integer.toString().split("").reverse().join("")) *
  Math.sign(integer);

// parseInt(integer.toString().split("").reverse().join("")) *
//   Math.sign(integer);

// console.log(reverse(234));

//Fizz BUzz 4
// let numb = 20;
//fizzbuzz, takes an input number then retrn fizz buzz, if divisible by 6, returns fizz if divisible by 2 and buzz if divisible by 3
const fizzBuzz = (number) => {
  //creating an empty array
  let output = [];

  //looping through the number length
  for (let i = 1; i <= number; i++) {
    console.log(i);

    //% is modulus which returns the remainder of after a division
    if (i % 6 === 0) output.push("Fizz Buzz");
    else if (i % 2 === 0) output.push("Fizz");
    else if (i % 3 === 0) output.push("Buzz");
    else output.push(i);
  }
  return output;
};

// console.log(fizzBuzz(30));

// checking for the max character in an input string  5
const max = (string) => {
  const characters = {};

  //loops through every letter in the string, and counts its characters
  for (let character of string) {
    //adding each char to the object chars, returns the number of characters in each word
    //if the character is single, add it up, or if its not add 1
    characters[character] = characters[character] + 1 || 1;
  }

  let maxCount = 0;
  let maxCharacter = null;

  for (let character in characters) {
    if (characters[character] > maxCount) {
      // console.log(characters[character]);
      // console.log(maxCount);
      maxCount = characters[character];
      maxCharacter = character;
    }
  }
  return `the max number is ${maxCount} and char is ${maxCharacter.toUpperCase()}`;
};

// console.log(max("this is my love ss"));

//Anagrams 6

//character map, maps out all the characters with keys using the
// for off loop

const charCount = (string) => {
  const table = {};

  //arranges the characters alphabetically
  //goes through every letter in the  word and makes it an object with keys,value
  for (let char of string.replace(/\W/g, "").toLowerCase())
    table[char] = table[char] + 1 || 1;

  return table;
};

const anagrams = (stringA, stringB) => {
  //the key value pairs with the charcount function, with each value passed through
  const charCountA = charCount(stringA);
  // console.log(charCountA);
  const charCountB = charCount(stringB);
  // console.log(Object.keys(charCountB).length);

  //checking the length of each string
  if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
    return false;

  //checking for each character
  for (let char in charCountA)
    if (charCountA[char] !== charCountB[char]) return false;

  return true;
};

//anagram different approach using the sort api
// .replace(/\W/g,""), removes the empty space
const _sort = (string) =>
  string.replace(/\W/g, "").toUpperCase().split("").sort().join("");

//passing the string into the _sort function
const _anagrams = (stringA, stringB) => _sort(stringA) === _sort(stringB);

// console.log(_sort("HELLO"));
// console.log(_anagrams("Hello world", "welo horld"));

//reversing items in an array 7
const reverseItems = (array) => {
  //loop through one half of the array,  and store in a varible
  for (let i = 0; i < array.length / 2; i++) {
    //store each item in the array in a temp variable
    const temp = array[i];

    //getting the last item in the array
    array[i] = array[array.length - 1 - i];
    // console.log(array[i]);

    // console.log(i);
    // console.log(array[array.length - 1]);

    //storing each item of the array on the temp variable
    array[array.length - 1 - i] = temp;

    // console.log(array[i]);
  }
  return array;
};

const shuffleItem = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];

    //getting the last item in the array
    array[i] = array[array.length - 1];

    //storing the items in the array from the last forward, then to the middle and then in reverse
    array[array.length - 1] = temp;
  }
  return array;
};
// console.log(shuffleItem([2, 4, 5, 6, 7, 8, 9, 1]));

// console.log(reverseItems([1, 2, 3, 4, 5]));
// console.log(shuffleItem(["yes", "hello", "guive", "heh", "wer"]));

//reversing words 8
const reverseWords = (string) => {
  //initialising an empty array
  const reversedWord = [];

  string.split(" ").forEach((word) => {
    let wordReversed = "";
    for (let i = word.length - 1; i >= 0; i--) wordReversed += word[i];
    reversedWord.push(wordReversed);
  });

  return reversedWord.join(" ");
};

//another form of reverse words, taking the input string, spliting it
//to and array and then mapping the string to give a single word,
//then splitting it into character, reversing it adn joining
//it again
const _reverseWords = (string) => {
  return string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

// console.log(_reverseWords("yesterday"));

//capitalizing each word in a phrase
const capsLock = (phrase) => {
  //creating an empty array
  const words = [];

  //splitting the phrase into single words and storing it in the words array,
  //making each word an upperCase, and selecting all the words in array
  for (let word of phrase.split(" "))
    words.push(word[0].toUpperCase() + word.slice(1));
  return words.join(" ");
};

// console.log(capsLock("hey sweet baby"));

//Caesar cipher
const caesarCypher = (string, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const input = string.toLowerCase();
  let output = "";

  //looping throuigh the input string
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    // console.log(alphabet.indexOf(letter));

    //getting the number with indexOf whuch returns the position of an element
    //so we pass the input through the alphabet constant
    //-1 is the position returned if the letter is absent
    if (alphabet.indexOf(letter) === -1) {
      output += letter;
      continue;
    }

    //the position of the letter added to the number input modulus
    let index = alphabet.indexOf(letter) + (number % 26);
    console.log(index);
    //if the result is greater than 25,we subtract it from 26, the total number of the alphabet
    if (index > 25) index = index - 26;
    if (index < 0) index = index + 26;
    console.log(index);

    //adding the letters to the output
    // output +=
    //   string[i] === string[i].toUpperCase()
    //     ? alphabet[index].toUpperCase()
    //     : alphabet[index];

    // console.log(string[i]);
    if (string[i] === string[i].toUpperCase()) {
      output += alphabet[index].toUpperCase();
      console.log(output);
    } else {
      output += alphabet[index];
    }
  }
  return output;
};

// console.log(caesarCypher("santos12", 1000));

//ransome note
const ransomeNote = (note, magazine) => {
  //spliting the words
  const magazineWords = magazine.split(" ");
  console.log(magazineWords);
  const magazineHash = {};

  //getting each word from the magazine array
  magazineWords.forEach((word) => {
    // console.log(magazineWords[word]);
    if (!magazineHash[word]) magazineHash[word] = 0;
    magazine[word]++;
    // console.log(magazine[word]++);
  });
  //splitting the input notes
  const noteWords = note.split(" ");
  let possible = true;

  noteWords.forEach((word) => {
    console.log(word);
    if (magazineHash[word]) {
      // console.log(magazineHash[word]);
      magazineHash[word]--;
      if (magazineHash[word] < 0) possible = false;
    } else possible = false;
  });
  return possible;
};
const magazine =
  "this is a letter to the love of my life, I'll like you to know that i think about you every day and I dont know if I m ready for this level of commitment so, if you'd like us to take a break please do let me know";
console.log(
  ransomeNote(
    "let me know",
    "if you'd like us to take a break please do let me know"
  )
);
