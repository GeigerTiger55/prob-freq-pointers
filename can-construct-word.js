"use strict";

// add whatever parameters you deem necessary & write doc comment

/**Accepts two strings (word and letters) and determines if word can be made from the characters in letters;
 * returns true if it can, and false if it cannot 
 * */

function canConstructWord(word, letters) {
    //fast fail if not enough characters in letter to build word
    if (word.length > letters.length) {
        return false;
    }

    const freqWord = generateFreqCtr(word);
    const freqLetters = generateFreqCtr(letters);

    for (let char in freqWord) {
        if (!char in freqLetters) {
            return false;
        }

        if (freqWord[char] > freqLetters[char]) {
            return false;
        }
    }

    return true;
}

/**
 * Takes an item and creates an object that breaks down each piece of the item (the object key) 
 * and the frequency of occurrence in the item (the object value)
 * 
 * TODO: function parameter name should be more specific
 */
function generateFreqCtr(items) {
    const freqs = {};

    for (const char of items) {
        const curr = freqs[char] || 0;
        freqs[char] = curr + 1;
    }

    return freqs;
}
