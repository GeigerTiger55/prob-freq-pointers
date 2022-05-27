"use strict";

// add whatever parameters you deem necessary & write doc comment

/**Accepts two strings (word and letters) and determines if word can be made from the characters in letters; 
 * returns true if it can, and false if it cannot */
function canConstructWord(word, letters) {
    //fast fail if not enough characters in letter to build word
    if(word.length > letters.length){
        return false;
    }

    const freqWord = freqCtr(word);
    const freqLetters = freqCtr(letters);

    for(let char in freqWord){
        if(!char in freqLetters){
            return false;
        }

        if(freqWord[char] > freqLetters[char]){
            return false;
        }
    }

    return true;
}

function freqCtr(str){
    const freqs = {};

    for(const char of str){
        const curr = freqs[char] || 0;
        freqs[char] = curr + 1;
    }

    return freqs;
}
