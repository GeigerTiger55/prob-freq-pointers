"use strict";

/**Given two positive integers, find out if the two numbers have the same frequency of digits.

sameFrequency(123, 321);   // true
sameFrequency(34, 14);     // false
sameFrequency(22, 22);     // true
sameFrequency(22, 222);    // false
Constraints: Time complexity: O(n + m) */

/**
 * Function accepts two positive integers, checks the digits of each integer and 
 * confirms if the frequency of each digit is the same in each integer
 * Returns true or false
 * */

// add whatever parameters you deem necessary & write docstring
function sameFrequency(integer1, integer2) {
    const intStr1 = integer1.toString();
    const intStr2 = integer2.toString();

    //Fast fail if not the same number of digits
    if (intStr1.length !== intStr2.length) {
        return false;
    }

    const integerFreq1 = generateFreqCtr(intStr1);
    const integerFreq2 = generateFreqCtr(intStr2);

    for (let digit in integerFreq1) {
        if (!digit in integerFreq2) {
            return false;
        }

        if (integerFreq1[digit] !== integerFreq2[digit]) {
            return false;
        }
    }

    return true;
}

/**
 * Takes an item and creates an object that breaks down each piece of the item (the object key) 
 * and the frequency of occurrence in the item (the object value)
 */
function generateFreqCtr(integer) {
    const freqs = {};

    for (const digit of integer) {
        const curr = freqs[digit] || 0;
        freqs[digit] = curr + 1;
    }

    return freqs;
}
