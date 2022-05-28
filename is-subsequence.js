'use strict';

/**isSubsequence»
This should take two strings, s1 and s2.
It checks whether the characters in
s1`form a subsequence of the characters in `s2.
In other words, this should check whether the characters in the s1 appear
somewhere in the s2, without their order changing.

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting');        // true
isSubsequence('abc', 'acb');           // false (order matters)
Constraints: Time complexity: O(n + m) */

/** takes 2 stings
 * checks if the order of the characters in the first string appear in the
 * same order in the secong string
 * returns true or false
 *
 * example: isSubsequence('sing', 'sting');        // true
 */
// add whatever parameters you deem necessary & write docstring
function isSubsequence(str1, str2) {
  let str1Counter = 0;
  let str2Counter = 0;

  //fast fail
  if (str1.length > str2.length) {
    return false;
  }

  while (str2Counter < str2.length) {
    debugger;
    if (str1[str1Counter] === str2[str2Counter]) {
      str1Counter++;
      if (str1Counter === str1.length) {
        return true;
      }
    }
    str2Counter++;

  }
  return false;


}
