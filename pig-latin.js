// Given a word, return the pig latin version of that word

// word indicates a string
// functions or method, at least one
// comparison logic
// We might need to put the word in an array
//  This could be used to move letters to the end of the array
//  If we do use an array of letters, we need to convert a string to an array
// multiple strings
// 

function getConsonants() {
    return ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
}

function doesWordBeginWithConsonantSound(word) {
    // define what a consonant is
    var consonants = getConsonants();

    // get the first letter of the word
    var firstLetter = word[0];

    // if the first letter is a consonant
    if (consonants.includes(firstLetter)) {
        return true;
    }
    
    return false;
}

function translateWordThatBeginsWithConsonantSound(word) {
    // all letters before the initial vowel are placed at the end of the word sequence.
    var translatedWord = "";

    var firstVowelIndex = 0;
    // loop through letters in word
        // until we reach the first vowel
    for(var letterIndex = 0; letterIndex < word.length; letterIndex++) {
        // check if the letter is a vowel
        var consonants = getConsonants();
        
        var letter = word[letterIndex];

        if (!consonants.includes(letter)) {
            firstVowelIndex = letterIndex;
            break;
        }
    }

    // Move everything before the first vowel to the end
    // push the consonants before the first vowel to the end of the word
    // get the first half of the word
    // get the second half of the word
    var firstPart = word.slice(0, firstVowelIndex);
    var secondPart = word.slice(firstVowelIndex);

    translatedWord = secondPart + firstPart;

    // Then, "ay" is added
    translatedWord = translatedWord + "ay";

    return translatedWord;
}

function getPigLatin(inputWord) {
    // If the word begins with a consonant sound
    if (doesWordBeginWithConsonantSound(inputWord)) {
        return translateWordThatBeginsWithConsonantSound(inputWord);
    }

    return "Unable to translate " + inputWord + " to pig latin"
}

var pigLatinWord = getPigLatin("pig");

console.log(pigLatinWord);

pigLatinWord = getPigLatin("at");

console.log(pigLatinWord);

/*
For words that begin with consonant sounds,
all letters before the initial vowel are placed at the end of the word sequence.
Then, "ay" is added, as in the following examples:

"pig" = "igpay"
"latin" = "atinlay"
"banana" = "ananabay"
"happy" = "appyhay"
"duck" = "uckday"
"me" = "emay"
"too" = "ootay"
When words begin with consonant clusters (multiple consonants that form one sound),
the whole sound is added to the end when speaking or writing.

"smile" = "ilesmay"
"string" = "ingstray"
"stupid" = "upidstay"
"glove" = "oveglay"
"trash" = "ashtray"
"floor"= "oorflay"
"store"= "orestay"
For words that begin with vowel sounds,
one just adds "way" or "yay" to the end (or just "ay").
Examples are:

"eat" = "eatway" or "eatay"
"omelet" = "omeletway" or "omeletay"
"are" = "areway" or "areay"
"egg" = "eggway" or "eggay"
"explain" = "explainway"
"always" = "alwaysway" or "alwaysay"
"ends" = "endsway" or "endsay"
"honest" = "honestway"
"I"= "Iway"
An alternative convention for words beginning with vowel sounds,
one removes the initial vowel(s) along with the first consonant or consonant cluster.
This usually only works for words with more than one syllable and offers
a more unique variant of the words in keeping with the mysterious,
unrecognizable sounds of the converted words. Examples are:

"every" = "eryevay"
"another" = "otheranay"
"under" = "erunday"
"island" = "andislay"
"elegant" = "egantelay"
Sentence structure remains the same as it would in English.
Pronunciation of some words may be a little difficult for beginners,
but people can easily understand Pig Latin with practice.
*/